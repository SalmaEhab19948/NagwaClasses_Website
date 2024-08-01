import Main_Base_PO from "./Main_Base_PO";

class MyAccount_PO extends Main_Base_PO{


    constructor(){
        super();
    }

     userinfo = {};
     existing_userinfo = {};
     mobile_otp;

    elements = {
        delete_account_link     :() => cy.xpath('//a[@class="cta delete-account__cta"]//span'),
        delete_popup_title      :() => cy.get('#delete-account-popup > div >h3'),
        delete_popup_text       :() => cy.get('#delete-account-popup > div > div > label'),
        confirm_delete_btn      :() => cy.get('#confirm-delete-account'),
        fullname_label          :() => cy.xpath('//div[@class="section-content"]//div[contains(@class,"form-group")][1]//label'),
        mobile_label            :() => cy.xpath('//div[@class="section-content"]//div[contains(@class,"form-group")][2]//label'),
        email_label             :() => cy.xpath('//div[@class="section-content"]//div[contains(@class,"form-group")][3]//label'),
        fullname_field          :() => cy.get('#userfullname'),
        mobile_field            :() => cy.get('#usermobilenumber'),
        email_field             :() => cy.get('#email'),
        country_code            :() => cy.xpath("//*[@id='select-country-in-page']//span[@class='country-code-selector__img-container']//span"),
        change_name_link        :() => cy.xpath('//div[@class="section-content"]//div[contains(@class,"form-group")][1]//button'),
        change_mobile_link      :() => cy.xpath('//div[@class="section-content"]//div[contains(@class,"form-group")][2]//button'),
        name_popup_title        :() => cy.get('#change-name-popup > div > h3'),
        firstname_field         :() => cy.get('#first-name'),
        lastname_field          :() => cy.get('#last-name'),
        save_name_button        :() => cy.get('#btn-save-fullame'),
        cancel_change_name      :() => cy.xpath('//div[@id="change-name-popup"]//a'),
        change_name_error       :() => cy.get('#errorMsg'),
        change_name_success_txt :() => cy.get('#success_txt'),
        mobile_popup_title      :() => cy.get('#register-popup > div > h3'),
        phonenumber_field       :() => cy.get('#PhoneNumber'),
        country_code_field      :() => cy.get('#country-prefix'),
        save_mobile_button      :() => cy.get('#show-verify-otp-btn'),
        cancel_change_mobile    :() => cy.xpath('//div[@id="change-name-popup"]//a'),
        change_mobile_error     :() => cy.get('#errorMsgmobile'),
        mobile_otp_popup_title  :() => cy.get('#otp-popup > div > h3'),
        mobile_otp_popup_text   :() => cy.get('#otp-popup > div > div > label'),
        verify_mobile_otp_btn   :() => cy.get('#verifyMobileOtpBtn'),
        mobile_otp              :() => cy.xpath('//div[@id="otp-popup"]//input[contains(@class,"verify-input")][1]'),
        mobile_otp_error        :() => cy.get('#errorMsgmobileverify'),
        mobile_success_popup    :() => cy.get('#register-success-popup'),
        mobile_success_text     :() => cy.get('#register-success-popup > div > h3'),
        mobile_success_close_btn:() => cy.xpath('//div[@id="register-success-popup"]//button'),
    }


    click_on_delete_account(){
        this.elements.delete_account_link().click()
    }

    delete_account(){
        this.elements.delete_account_link().click()
        this.elements.confirm_delete_btn().click()
        cy.wait(3000)
    }

    click_change(option){
        switch(option){
            case 'Full Name':
                this.elements.change_name_link().click()
            break;

            case 'Mobile Number':
                this.get_user_info_from_db().then(() => {
                    cy.log(this.userinfo.has_mobile)
                    if(this.userinfo.has_mobile == true){
                        this.elements.change_mobile_link().click()
                    }
                    else{
                        throw new Error("User doesn't have mobile number")
                    }
                })
                
            break;
        }
    }

    update_user_info(dataTable){

        let data_rows = dataTable.rawTable;
        let row;

        for (row of data_rows){
            const field = row[0];
            const value = row[1];

            switch(field){
                case 'First Name':
                    this.elements.firstname_field().clear()
                    this.elements.firstname_field().type(value)
                    this.updated_firstname = value
                    console.log(this.updated_firstname)
                break
    
                case 'Last Name':
                    this.elements.lastname_field().clear()
                    this.elements.lastname_field().type(value)
                    this.updated_lastname = value
                    this.elements.save_name_button().click()
                    console.log(this.updated_lastname)
                break
    
                case 'Mobile Number':
                    this.elements.phonenumber_field().clear()
                    this.elements.phonenumber_field().type(value, { delay: 100 })
                    this.updated_mobile = value
                    this.elements.save_mobile_button().click()
                    cy.wait(3000)
                //    this.enter_mobile_otp(value)
                break
            }
        }
    }

    enter_existing_user_mobile(){
        this.elements.phonenumber_field().clear()
        this.get_existing_user_info_from_db().then(() => {
            this.elements.phonenumber_field().type(this.existing_userinfo.mobile, { delay: 200 })
        })
        this.elements.save_mobile_button().click()
    }

    get_mobile_otp(mobile){
        return cy.task('OtpDB',`SELECT * FROM public."UserOtp" where "MobileNumber" like '%${mobile}'
        and "IsVerified" is false 
        order by "LastRequestDate" desc`).then((res)=>{
            this.mobile_otp = res[0].Otp;
    })  
    }

    enter_mobile_otp(){
        this.get_mobile_otp(this.updated_mobile).then(() => {
            cy.log(this.mobile_otp)
            this.elements.mobile_otp().type(this.mobile_otp)
        })
        this.elements.verify_mobile_otp_btn().click()
    }

    enter_invalid_mobile_otp(){
        this.elements.mobile_otp().type(Math.floor(Math.random() * 900000) + 100000 )
        this.elements.verify_mobile_otp_btn().click()
    }

    get_user_info_from_db() {
        return cy.task('NagwaClassesDB',
        `select  student_id, student_first_name, student_last_name, student_email, student_mobile_number, st.grade_id, g.grade_url_text , g.stage_id, s.stage_url_text, c.country_iso_code , c.country_dial_code 
        from students st 
        left join grades g on st.grade_id = g.grade_id
        left join stages s on s.stage_id = g.stage_id 
        left join countries c on s.country_id = c.country_id 
        where student_email = '${Cypress.env("new_user_email")}'`)
            .then((res) => {
                this.userinfo.firstname = res[0].student_first_name;
                this.userinfo.lastname = res[0].student_last_name;
                this.userinfo.mobile = res[0].student_mobile_number;
                this.userinfo.email = res[0].student_email;
                this.userinfo.st_country_code = res[0].country_iso_code;
                this.userinfo.st_dial_code = res[0].country_dial_code;

                if(res[0].country_iso_code == 'eg' || res[0].country_iso_code == 'in' || res[0].country_iso_code == 'sa'){
                this.userinfo.has_mobile = true;
            }
                cy.log('User info fetched successfully:', this.userinfo.firstname, this.userinfo.lastname);
            });
    }

    get_existing_user_info_from_db() {
        return cy.task('NagwaClassesDB',
        `Select * from students st
        Inner Join grades g On st.grade_id = g.grade_id 
        inner join stages s On g.stage_id = s.stage_id 
        Inner Join countries c On s.country_id = c.country_id 
        Where c.country_iso_code = 'eg'
        And st.student_is_active = true 
        And st.student_is_deleted = false 
        And st.student_mobile_number is not null 
        And student_email != '${Cypress.env("new_user_email")}'
        Order By random()
        Limit 1`)
            .then((res) => {
                this.existing_userinfo.email = res[0].student_email;
                this.existing_userinfo.dial_code = res[0].country_dial_code;
                this.existing_userinfo.mobile = res[0].student_mobile_number.substring(res[0].country_dial_code.length);
                this.userinfo.st_country_code = res[0].country_iso_code;

                cy.log('Existing user info fetched successfully:', this.existing_userinfo.email);
            });
    }

    verify_user_info_with_db() {
        cy.log('Verifying user info...');
    
        return this.get_user_info_from_db().then(() => {
            cy.log(this.userinfo.firstname); 
            cy.log(this.userinfo.lastname)
            this.elements.fullname_field().invoke('val').should('equal', this.userinfo.firstname + ' ' + this.userinfo.lastname)
            this.elements.email_field().invoke('val').should('equal', this.userinfo.email)

            if(this.userinfo.has_mobile == true){
                this.elements.country_code().invoke('text').should('equal', this.userinfo.st_dial_code)
                this.elements.mobile_field().invoke('val').should('equal', this.userinfo.mobile.substring(this.userinfo.st_dial_code.length))
            }
            else{
                return "student has no mobile number"
            }            
        });
    }

    validate_fullname_sucees_msg(text_key){
        cy.verfiyTheDisplayedText(this.elements.change_name_success_txt(), this.get_value_by_key(text_key, this.config.language()));
    }

    validate_mobile_success_msg(text_key){
        cy.verfiyTheDisplayedText(this.elements.mobile_success_text(), this.get_value_by_key(text_key, this.config.language()));
        this.elements.mobile_success_close_btn().click()
    }

    validate_fullname_successfully_updated(){
        let expected_fullname = this.updated_firstname +' '+ this.updated_lastname
        this.elements.fullname_field().invoke('val').should('equal', expected_fullname)
    }

    validate_mobile_successfully_updated(){
        let expected_mobile = this.updated_mobile
        this.elements.mobile_field().invoke('val').should('equal', expected_mobile)
    }

    validate_title_text(text_key){
        cy.xpath('//h1')
          .contains(super.get_value_by_key(text_key, this.config.language()))
          .should("exist");
    }

    validate_link_text(text_key){
        cy.xpath('//a')
          .contains(super.get_value_by_key(text_key, this.config.language()))
          .should("exist");
    }

    validate_label_text(text_key){
        cy.xpath('//label')
        .contains(super.get_value_by_key(text_key, this.config.language()))
        .should("exist");
    }

    validate_popup_title(text_key){
        cy.xpath('//h3')
        .contains(super.get_value_by_key(text_key, this.config.language()))
        .should("exist");
    }

    validate_placeholder_text(text_key){
          cy.xpath(`//input[@placeholder="${super.get_value_by_key(text_key, this.config.language())}"]`).should('exist');
    }

    validate_name_error(text_key){
        cy.verfiyTheDisplayedText(this.elements.change_name_error(), super.get_value_by_key(text_key, this.config.language()))
    }

    validate_mobile_error(text_key){
        cy.log(text_key)
        cy.log(this.elements.change_mobile_error().text())
        cy.log(super.get_value_by_key(text_key, this.config.language()))
        cy.verfiyTheDisplayedText(this.elements.change_mobile_error(), super.get_value_by_key(text_key, this.config.language()))
    }

    validate_mobile_otp_error(text_key){
        cy.verfiyTheDisplayedText(this.elements.mobile_otp_error(), super.get_value_by_key(text_key, this.config.language()))
    }

    clear(field){
        switch(field){
            case'First Name':
            this.elements.firstname_field().clear()
            break

            case'Last Name':
            this.elements.lastname_field().clear()
            break

            case'Mobile Number':
            this.elements.phonenumber_field().clear()
            break

        }
    }

    validate_button_state(text_key) {
        var text_value = this.get_value_by_key(text_key, this.config.language());

          cy.xpath(`//button[contains(text(),'${text_value}')]`).should('have.class', 'disabled')
    }


}
export default MyAccount_PO;