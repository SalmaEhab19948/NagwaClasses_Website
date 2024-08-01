import Main_Base_PO from "./Main_Base_PO";

class Search_PO extends Main_Base_PO {

    elements = {
        Home_Search_Button          : () => cy.xpath('//*[@class="search"]//button[@type="button"]'),
        Home_Search_Text_Field      : () => cy.get('#txt_search_query'),
        Home_Submit_Search_Button   : () => cy.get('#btn_global_search'),
        Search_Text_Field           : () => cy.get('#txt_query'),
        Search_Button               : () => cy.get('#btn_search'),
        Search_Title                : () => cy.xpath('//*[@class="page-title"]//h1'),
        Search_Count                : () => cy.xpath('//*[@class="page-title"]//h1//small'),
        Search_Result               : () => cy.xpath('//*[@class="results"]//ul[@class="list"]//li'),
        No_Result                   : () => cy.xpath('//*[@class="results"]//*[@class="no-results"]//span')
    }    

    click_on_home_search_button(){
        this.elements.Home_Search_Button().click();
    }

    type_text_on_home_search_field(value){
        this.elements.Home_Search_Text_Field().type(value)
    }  

    click_on_submit_search_button(){
        this.elements.Home_Submit_Search_Button().click();
    }

    type_text_on_search_text_field(value){
        this.elements.Search_Text_Field().type(value)
    }  

    click_on_search_button(){
        this.elements.Search_Button().click();
    }

    verify_search_page_title(key){
        this.elements.Search_Title().contains(super.get_value_by_key(key,this.config.language()))
    }

    verify_search_result(search_text){
        let total_count = 0;
        this.elements.Search_Result().each($res => {
            const text = $res.text();
            if(text.includes(search_text))
            {cy.log("the result is containg " + search_text)
                total_count = total_count+1 ;
            }
            else{
                cy.log("the result is not containg text")
            }
        }).then(() => {
            this.elements.Search_Count().contains(total_count);
        });
    }

    verify_no_result_found(key){
        cy.verfiyTheDisplayedText(this.elements.No_Result(),super.get_value_by_key(key,this.config.language()))
    }



}
export default Search_PO;

