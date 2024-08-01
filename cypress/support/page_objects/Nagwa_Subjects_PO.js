import Main_Base_PO from "./Main_Base_PO";
 

class Nagwa_Subjects_PO extends Main_Base_PO {

    elements = {
          
        subject_title: () => cy.get('.title-header__title'), 

        sub_title_page:() => cy.get('.title-header__sub-title')

    }
    validate_subject_title(subject_name) {
        cy.verfiyTheDisplayedText(this.elements.subject_title(),subject_name)
    }

    validate_subTitle(grade_key, country_key){
         
        let sub_title =   `${super.get_value_by_key(country_key, this.config.language())} • ${super.get_value_by_key(grade_key, this.config.language())}`
        cy.verfiyTheDisplayedText(this.elements.sub_title_page(),sub_title)
    }

}
export default Nagwa_Subjects_PO;