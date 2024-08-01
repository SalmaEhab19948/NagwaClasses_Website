import Main_Base_PO from "./Main_Base_PO";
import { faker } from '@faker-js/faker';

class Nagwa_Accounts_PO extends Main_Base_PO
 {
    
    elements = {
        
        continue_with_social   :() => cy.get('a:nth-child(1)'),
        continue_with_facebook :() => cy.get('a:nth-child(2)'),
        continue_with_email    :() => cy.get('a:nth-child(3)'),
        email                  :() => cy.get('#email'),
        submit_email           :()=> cy.get('#sbmtEmailBtn'),
        otp                    :()=> cy.get('.verification-form > :nth-child(1)'),
        verfiy_button          :()=> cy.get('#verifyBtn'),
        firstName              :()=> cy.get('#firstName'),
        lastName               :()=> cy.get('#lastName'),
        country                :()=> cy.get('#CountryIso'),
        grade                  :()=> cy.get('#GradeId'),
        signUp                 :() => cy.get('#SignUpDataEmailbtn'),
        mobile                 :() => cy.get('#mobileNumber'),
        submit_mobile          :() => cy.get('#requestOtpBtn'),

    }

    click_on_continue_with_email_link() {
            this.elements.continue_with_email().click();
    }

    enter_email(email){
        this.elements.email().type(email)
    }

    click_on_signUp_button(){
        this.elements.signUp().click()
    }

    click_on_next_button(){
        this.elements.submit_email().click()
    }

    get_email_otp(email){
        return cy.task('OtpDB',`SELECT * FROM public."UserMailOtp" where "Email" = '${email}'and "IsVerified" is false `)
    }

    enter_email_otp(email){
        this.get_email_otp(email).then((res)=>{
            this.elements.otp().type(res[0].Otp)
        })
    }

    get_mobile_otp(mobile){
        return cy.task('OtpDB',`SELECT * FROM public."UserOtp" where "MobileNumber" like '%${mobile}'
        and "IsVerified" is false 
        order by "LastRequestDate" desc`)
    }

    enter_mobile_otp(mobile){
       this.get_mobile_otp(mobile).then((res)=>{
            this.elements.otp().type(res[0].Otp)
        })
    }

    click_on_verfiy_button(){
        this.elements.verfiy_button().click()
    }

    enter_firstName(firstName){
        this.elements.firstName().type(firstName)
    }

    enter_lastName(lastName){
        this.elements.lastName().type(lastName)
    }
    
    select_country(country_key){
        this.elements.country().select(this.get_value_by_key(country_key, this.config.language()))
    }

    select_grade(grade_key){
        this.elements.grade().select(this.get_value_by_key(grade_key, this.config.language()))
    }

    select_random_grade(){
        this.elements.grade().then($select => {
            const options = $select.find('option').not('[value="0"]');
            const randomIndex = Math.floor(Math.random() * options.length);
            const randomOption = options[randomIndex];
            this.elements.grade().select(randomOption.value);
          });
    }

    new_user_signup(dataTable){
        let email = Cypress.env("new_user_email")
        let mobile = Cypress.env("new_user_mobile")
        this.enter_email(email)
        this.click_on_next_button()
        cy.wait(1000)
        this.enter_email_otp(email)
        this.click_on_verfiy_button()
        dataTable.hashes().forEach($elem => {
            this.enter_firstName($elem.fristName)
            this.enter_lastName($elem.lastName)
            this.select_country($elem.country)
            this.select_grade($elem.grade)
        });
        this.click_on_signUp_button()
        this.elements.mobile().type(mobile)
        this.elements.submit_mobile().click()
        this.enter_mobile_otp(mobile)    
        this.click_on_verfiy_button()
    }

    user_signin(){
        let email = Cypress.env("new_user_email")
        this.enter_email(email)
        this.click_on_next_button()
        cy.wait(1000)
        this.enter_email_otp(email)
        this.click_on_verfiy_button()
    }

    random_user_signup(){
        let firstName = faker.name.firstName()
        let lastName  = faker.name.lastName()
        let email = (firstName +'.'+ lastName).toLowerCase() + '@nagwa.com'
        let mobile = faker.phone.phoneNumber("01500000###")

        this.enter_email(email)
        this.click_on_next_button()
        cy.wait(2000)
        this.enter_email_otp(email)
       
        this.click_on_verfiy_button()
            this.enter_firstName(firstName)
            this.enter_lastName(lastName)
            this.select_random_grade()
        this.click_on_signUp_button()
        this.elements.mobile().type(mobile)
        this.elements.submit_mobile().click()
        cy.wait(2000)
        this.enter_mobile_otp(mobile)        
        this.click_on_verfiy_button()
    }

}




export default Nagwa_Accounts_PO;