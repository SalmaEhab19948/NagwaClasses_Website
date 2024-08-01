
import Main_Base_PO from "./Main_Base_PO";
let subjects_name = ''


class Nagwa_Grades_PO extends Main_Base_PO {

    elements = {
        
        grade_title: () => cy.get('.big'),
        subjects: () =>  cy.get(".grade-language-card"),
        subjects_title: () => cy.get('.title-header__title'),
        subject_title : () => cy.get('.grade-page__scroll > a > h5')
       
    }
    validate_grade_title(key) {
        cy.verfiyTheDisplayedText(this.elements.grade_title(), super.get_value_by_key(key, this.config.language()))
    }
    validate_grade_url(stage_name, grade_num){
        let current_lan = this.config.language()
        let stage = stage_name.toLowerCase();
        let baseUrl = (Cypress.config().baseUrl).toString().split("/en");
        cy.log(baseUrl[0])
        cy.url().should('eq', `${baseUrl[0]}/${current_lan}/eg/${stage}/${grade_num}/`)
   

    }

   click_on_subject(){
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    this.elements.subjects().its("length").then((numEvents) => {
    let subjectRandom = getRandomNumber(1, numEvents);
        cy.xpath(`(//*[@class='grade-language-card'])[${subjectRandom}]`).then($elem=>{
        subjects_name = $elem.text().trim()
        this.elements.subject_title().contains(subjects_name).click()
       // cy.contains(subjects_name).click()
        })
    })
   }

   return_subject_name(){
    return subjects_name;
   }


    
}
export default Nagwa_Grades_PO;