
import Main_Base_PO from "./Main_Base_PO";



class Nagwa_Stage_PO extends Main_Base_PO {

    elements = {
        
        stage_garde_card_title: () => cy.get('.grade-cards__title'),
        grades:() => cy.xpath("//*[@class='grade-card__title']")
    }

    validate_stage_grade_card_title(key) {
        cy.verfiyTheDisplayedText(this.elements.stage_garde_card_title(), super.get_value_by_key(key, this.config.language()))
    }

    validate_stage_url(grade_name){
        let current_lan = this.config.language()
        let grade = grade_name.toLowerCase();
        let baseUrl = (Cypress.config().baseUrl).toString().split("/en");
        cy.url().should('eq', `${baseUrl[0]}/${current_lan}/eg/${grade}/`)
    }

    click_on_grade_name(grd_name_key){
        this.elements.grades().children().contains(super.get_value_by_key(grd_name_key, this.config.language())).click()
    }
}
export default Nagwa_Stage_PO;