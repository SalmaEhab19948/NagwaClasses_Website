
import Main_Base_PO from "./Main_Base_PO";



class Nagwa_Home_PO extends Main_Base_PO {

    elements = {
        
        sign_up_button: () => cy.get('.home-landing__banner__info__actions > :nth-child(1)'),
        sign_in_button: () => cy.get('.home-landing__banner__info__actions > .btn-outline'),
        banner_title: () => cy.get('.home-landing__banner__info__title'),
        banner_desc: () => cy.get('.home-landing__banner__info__desc'),
        grades_card:() => cy.xpath('//*[@class="grade-cards"]//h2'),
        subject_link:() => cy.get('.subjects-list > li > a')
        
    }
    navigateToHomePage() {
        super.navigate()
    }
    validate_banner_title(key){
     cy.verfiyTheDisplayedText(this.elements.banner_title(), super.get_value_by_key(key,this.config.language()))
    }

    validate_banner_des(key){
        cy.verfiyTheDisplayedText(this.elements.banner_desc(), super.get_value_by_key(key,this.config.language()))
    }
    click_on_signIn_button() {
        this.elements.sign_in_button().click();
    }
    click_on_signUp_button() {
        this.elements.sign_up_button().click();
    }

    validate_signIn_button_text(key) {
        cy.verfiyTheDisplayedText(this.elements.sign_in_button(), super.get_value_by_key(key, this.config.language()))
    }

    validate_signUp_button_text(key) {
        cy.verfiyTheDisplayedText(this.elements.sign_up_button(), super.get_value_by_key(key, this.config.language()))
    }

    click_on_grade_name_from_grd_card(key){
        this.elements.grades_card().contains(this.get_value_by_key(key, this.config.language())).click()
    }

    open_subject_page(){
        
        const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        this.elements.subject_link().its("length").then((numEvents) => {
        let SubjectRandom = getRandomNumber(1, numEvents);
            cy.xpath(`(//ul[@class='subjects-list']//a)[${SubjectRandom}]`).click()

        
    })
}
}
export default Nagwa_Home_PO;