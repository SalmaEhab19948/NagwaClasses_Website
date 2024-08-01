import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";
import Search_PO from "../page_objects/Search_PO";


const search_page = new Search_PO();
 

Given('user click on search icon',()=>{
    search_page.click_on_home_search_button()
})

When('user search by existing text {string}',(search_text)=>{
    search_page.type_text_on_home_search_field(search_text)
})

When('user click on submit button',() => {
    search_page.click_on_submit_search_button()
})

Then('I validate navigating to valid url and {string} exist in result',(search_text) => {
    cy.url().should("contain","https://www.nagwa.com/en/search/")
    search_page.verify_search_result(search_text)
})

Given('user in the search page', () =>{
    cy.visit("https://www.nagwa.com/en/search")
})

When('user search by notExisting text {string} in search page', (search_text) => {
    search_page.type_text_on_search_text_field(search_text)
    search_page. click_on_search_button()
})

When('user search by existing text {string} in search page', (search_text) => {
    search_page.type_text_on_search_text_field(search_text)
    search_page. click_on_search_button()
})

Then('I verify {string} and the {string} returned in all results', (page_title,text) => {
    search_page.verify_search_page_title(page_title)
    search_page.verify_search_result(text)
})

Then('I verify {string} title and {string} no result found in results', (page_title,no_result) => {
    search_page.verify_search_page_title(page_title)
    search_page.verify_no_result_found(no_result)
})


 