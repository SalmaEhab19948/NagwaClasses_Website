import Main_Base_PO from "./Main_Base_PO";


class ClassDetails_PO extends Main_Base_PO{

    class_ID;
    educator_ID;
    layout_language = 'ar';

    elements ={
        details_btn         : () => cy.xpath("//div[@class='class-card']//a[contains(@class,'btn-black')]"),
        schedual_item       : () => cy.get('.schedule-box__classes__item'),
        class_title         : () => cy.get('.page-title > h1'),
        class_description   : () => cy.get('.page-description'),
        educator_name       : () => cy.get('.profile-info > h4'),
        educator_bio        : () => cy.get('.profile-info > p'),
        educator_likes      : () => cy.get('.num-of-likes'),
        educator_percentage : () => cy.get('.percentage'),
        seats_note          : () => cy.get('.band band--blue'),
        card_title          : () => cy.get('.card-header > h3'),
        card_p1             : () => cy.xpath('//div[@class="card-content"]//p[1]'),
        card_p2             : () => cy.xpath('//div[@class="card-content"]//p[2]'),
        get_started_link    : () => cy.get('.card-content > p > a'),
        enroll_btn          : () => cy.get('.btn-enroll > span'),
        profile_info_likes  : () => cy.get('.profile-info__likes'),
        class_country       : () => cy.xpath('//span[contains(text(),"الدولة")]//following-sibling::p'),
        class_subject       : () => cy.xpath('//span[contains(text(),"المادة")]//following-sibling::p'), 
        class_grade         : () => cy.xpath('//span[contains(text(),"الصف")]//following-sibling::p'),
        class_semester      : () => cy.xpath('//span[contains(text(),"الفصل الدراسي")]//following-sibling::p'),
        class_sessions      : () => cy.xpath('//span[contains(text(),"عدد الحصص")]//following-sibling::p'),
        class_session_time  : () => cy.xpath('//span[contains(text(),"مدة الحصة")]//following-sibling::p'),
        class_seats         : () => cy.xpath('//span[contains(text(),"إجمالي المقاعد")]//following-sibling::p'),
        class_remainingseats: () => cy.xpath('//span[contains(text(),"المقاعد المتبقية")]//following-sibling::p'),
        class_session_price : () => cy.xpath('//span[contains(text(),"سعر الحصة")]//following-sibling::p'),
        class_payment       : () => cy.xpath('//span[contains(text(),"نظام الدفع")]//following-sibling::p'),
        final_price            : () => cy.xpath('//li[@class="price"][last()]//p'),
        before_discount_price  : () => cy.xpath('//li[@class="price"][last()]//p//span'),
        register_success_popup : () => cy.get('#register-success-popup'),
        register_success_title : () => cy.get('.register-success__title'),
        register_success_card_title : () => cy.get('.register-success__card > h5'),
        register_success_card_desc  : () => cy.get('.register-success__cta-description'),
        close_popup_btn             : () => cy.get('.mfp-close')
        
    }



    get_class_id(){
        return cy.url().then(Url => {
            const parts = Url.split('/');
            const classid = parts[parts.length - 2]; 
            cy.log('class id', classid)
            this.class_ID = classid
        })
    }

    get_class_details(){
        return cy.task('NagwaClassesDB', `
        select * from classes c 
        left join classes_subjects cs on c.class_id = cs.class_id 
        left join subjects s on cs.subject_id = s.subject_id 
        left join classes_subjects_blocks csb on cs.class_subject_id = csb.class_subject_id 
        left join grades g on s.grade_id = g.grade_id 
        left join stages s2 on g.stage_id = s2.stage_id 
        left join countries c2 on s2.country_id = c2.country_id
        left join languages l on  s.language_id = l.language_id 
        where c.class_id = ${this.class_ID}`)
    }

    verify_class_details(){
        this.get_class_details().then((res)=> {

            var country     = this.get_value_by_key(res[0].country_localization_key,this.layout_language)
            var subject     = res[0].subject_name
            var grade       = this.get_value_by_key(res[0].grade_localization_key, this.layout_language)
            let semester    = this.get_value_by_key(res[0].class_semester_localization_key, this.layout_language)
            var total_seats = res[0].class_seats_limit
            // let remaining_seats
            let session_price = Math.floor(res[0].class_subject_session_price)
            var paymentID   = res[0].class_payment_option_id
            var payment     = this.get_calss_payment_type(res[0].class_payment_option_id)
            let discount_price
            let price

            switch(paymentID){
                case 1:
                    price          = Math.floor(res[0].class_subject_retail_price)
                    discount_price = res[0].class_subject_discounted_price            
                break;

                case 2:
                    price          = Math.floor(res[0].class_block_retail_price)
                    discount_price = res[0].class_block_discounted_price
                break;

                default:
                    cy.log('hello')
            } 

            this.elements.class_country().should('have.text',country)
            this.elements.class_subject().should('have.text', subject)
            this.elements.class_grade().should('have.text', grade)
            
            if(res[0].grade_localization_key == 'eg_third_secondary'){
                cy.log('One semester academic year')
            }
            else{
                this.elements.class_semester().should('contain.text', semester)
            }

            this.get_class_sessions().then((sessions_res)=> {
                this.elements.class_sessions().should('have.text',sessions_res.length);
                this.elements.class_session_time().should('contain.text', sessions_res[0].session_duration_in_minutes )
            });
            
            this.elements.class_seats().should('contain.text', total_seats)
            // this.elements.class_remainingseats().should('have.text', remaining_seats)
            this.elements.class_session_price().should('have.text', session_price + ' ج.م.')
            this.elements.class_payment().should('have.text', payment)
            
             
            
            if(discount_price !== null){
                let discount = Math.floor(discount_price)
                this.elements.final_price().should('contain.text', discount + ' ج.م.')
                this.elements.before_discount_price().should('contain.text', price + ' ج.م.')
            }
            else{
                this.elements.final_price().should('contain.text', price + ' ج.م.')
            }
        })
    }

    get_class_educator_id(){
        return cy.task('NagwaClassesDB', `select * from educators e 
        inner join classes_educators ce 
        on e.educator_id = ce.educator_id
        where ce.class_id = ${this.class_ID}
        order by ce.class_educator_order asc`).then(res => {
            this.educator_ID = res[0].educator_id
            cy.log(this.educator_ID)
        })
    }

    open_class_details(){
        const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        this.elements.details_btn().its("length").then((numEvents) => {
        let btnRandom = getRandomNumber(1, numEvents);
            cy.xpath(`(//div[@class='class-card']//a[contains(@class,'btn-black')])[${btnRandom}]`).click()
        })
    }
 
    verify_educator_data(){
        cy.task('NagwaClassesDB', `select * from educators e 
        inner join classes_educators ce 
        on e.educator_id = ce.educator_id
        where ce.class_id = ${this.class_ID}
        order by ce.class_educator_order asc`).then((res) => {

            let educator_fullname = res[0].educator_first_name + ' ' + res[0].educator_last_name
            let educator_bio = res[0].educator_bio
            cy.verfiyTheDisplayedText(this.elements.educator_name(), educator_fullname)
            cy.verfiyTheDisplayedText(this.elements.educator_bio(), educator_bio)
        })
    }

    verify_educator_feedback(){
        this.elements.profile_info_likes().then(likes =>{
        if(likes.is(':visible'))
            {
                cy.log("visible")
                this.get_class_educator_id().then(() => {
                    cy.task('NagwaClassesDB', `select sf.session_feedback, count(sf.session_feedback_id) from sessions s
                join sessions_feedback sf on s.session_id = sf.session_id
                join classes_educators ce on s.educator_id = ce.educator_id 
                where ce.class_id = ${this.class_ID} and ce.educator_id = ${this.educator_ID}
                group by sf.session_feedback
                order by sf.session_feedback asc`).then((res) => {
        
                    
                    let educator_percentage = this.calculate_percentage(Number(res[0].count), Number(res[1].count))
                    cy.verfiyTheDisplayedText(this.elements.educator_percentage(), educator_percentage)
        
                    cy.verfiyTheDisplayedText(this.elements.educator_likes(), res[1].count)
                    cy.log (educator_percentage)
                    cy.log(res[0].count)
                    cy.log(res[1].count)
                    cy.log("classid" , this.class_ID)
                cy.log("educatorid", this.educator_ID)
                })
            })
        }
        else
        {
            cy.log("There are no educator likes to check")
        }
        })
    }     

    get_class_sessions(){

                return cy.task('NagwaClassesDB', `SELECT * from classes c
                inner join classes_educators ce
                on c.class_id = ce.class_id
                inner join classes_subjects cs 
                on c.class_id =cs.class_id 
                inner join classes_subjects_sessions css
                on css.class_subject_id =cs.class_subject_id 
                inner join sessions s
                on ce.educator_id = s.educator_id
                and css.session_id =s.session_id 
                where c.class_id = ${this.class_ID}
                order by s.session_start_date asc`)
    }

    verify_sessions_details(){
        this.get_class_sessions().then((res)=> {
            this.elements.schedual_item().its("length").should('eq', res.length)
            res.forEach((resultrow, index) => {
                    cy.verfiyTheDisplayedText(cy.xpath(`(//div[@class='schedule-box__classes']//h3)[${index+1}]`),resultrow.session_title);
                });
        });
    }

    verify_class_description(){
        this.get_class_details().then((res) => {
            cy.verfiyTheDisplayedText(this.elements.class_title(), res[0].class_title)
            cy.verfiyTheDisplayedText(this.elements.class_description(), res[0].class_description)
        });
    }

    get_calss_payment_type(paymentID){
        var payment_key= ''
        var payment_type;
         switch (paymentID) {
             case 1:
                payment_key = 'fully_paid_payment_label'
                 break;
             case 2:
                payment_key = 'monthly_payment_label'
                 break;
             case 3:
                payment_key = 'per_session_payment_label'
         }
         payment_type = this.get_value_by_key(payment_key, this.layout_language)
         return payment_type;
 
    }

    validate_get_started_card_text(){
        cy.verfiyTheDisplayedText(this.elements.card_title(), this.get_value_by_key("new_to_nagwa_message", this.layout_language))
        cy.verfiyTheDisplayedText(this.elements.card_p1(), this.get_value_by_key("download_app_prompt_message", this.layout_language))
        cy.verfiyTheDisplayedText(this.elements.card_p2(), this.get_value_by_key("check_get_started", this.layout_language))

    }

    click_get_started_link(){
        this.elements.get_started_link().click({force:true})
    }

    click_on_enroll(text_key){
        this.elements.enroll_btn().contains(this.get_value_by_key(text_key, this.layout_language)).click({force:true})
    }

    click_on_link(text_key){
        cy.get('a').contains(this.get_value_by_key(text_key, this.layout_language)).click({force:true})
    }

    validate_accounts_url(){
        this.get_class_details().then((res) =>{
            cy.url().should('eq',
             `https://www.nagwa.com/${this.layout_language}/accounts/?redirectUrl=https://www.nagwa.com/${res[0].language_iso_code}/classes/${this.class_ID}/&enroll=true`)

        })
    }

    validate_get_started_url(){
        cy.url().should('eq', `https://www.nagwa.com/${this.layout_language}/eg/classes/welcome/`)
   }

   validate_tutor_profile_url(){
       this.get_class_educator_id().then(() => {
           cy.url().should('eq', `https://www.nagwa.com/${this.config.language()}/tutors/${this.educator_ID}/`)
       })
   }

   calculate_percentage(negative_feedback, positive_feedback){
    let percentage = (positive_feedback / (positive_feedback + negative_feedback)) * 100
    let rounded_percentage = Math.round(percentage)
    return rounded_percentage + '%'
    }

    validate_successful_enrollment(){
        this.elements.register_success_popup().should('be.visible')
    }

    verify_successful_enrollment_popup(){
        let localization_language;
        cy.url().then(Url => {
            if(Url.includes("classes")){
                localization_language = this.layout_language
                cy.log('hi')
            }
            else{
                localization_language = this.config.language()
                cy.log('bye')
            }

            cy.log(localization_language)
            cy.verfiyTheDisplayedText(this.elements.register_success_title(), this.get_value_by_key("registration_completed_message",localization_language))
           
        })

    }

    close_popup(){
        this.elements.close_popup_btn().click({ multiple: true , force: true})
    }
}


    


export default ClassDetails_PO;