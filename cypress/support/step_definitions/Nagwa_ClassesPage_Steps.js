/// <reference types="cypress" />
import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";
import Nagwa_ClassesPage_PO from "../page_objects/Nagwa_ClassesPage_PO.js";
import Main_Base_PO from "../page_objects/Main_Base_PO";

const nagwa_classes_page = new Nagwa_ClassesPage_PO();
const nagwa_main_Base = new Main_Base_PO();


When('I set language to {string}', (language) => {
    nagwa_classes_page.click_on_language_dropdown(language);
})



Then  ('I should see {string} within the sign up link for the selected language', (text_key) => {

    nagwa_classes_page.validate_signUp_link_text(text_key)
})

Then  ('I should see {string} within the sign in link for the selected language', (text_key) => {

    nagwa_classes_page.validate_signIn_link_text(text_key)

    
})

When('I should see {string} as selected country for the selected language', (text_key)=>{
    nagwa_classes_page.validate_selected_Country(text_key)
})

When('I should see {string} within the wallet link for the selected language', (text_key) => {
    nagwa_classes_page.validate_Wallet_text(text_key)
})

When('I should see the below grades on the grades bar for the selected language:', (dataTable)=>{
   nagwa_classes_page.validate_theDispayed_Grades(dataTable)
})


When('I should see the below localized under the campany section:', (dataTable)=>{

nagwa_classes_page.validate_theDispayed_Campany_Pages(dataTable)
})


When('I should see the below localized under the content section:', (dataTable)=>{

    nagwa_classes_page.validate_theDispayed_Content_Pages(dataTable)
    })


Then('I should see {string} and {string} localized within sub title',(grade_key,country_key )=>{
       nagwa_classes_page.validate_SubTitle(grade_key,country_key)
    
    })

When('I should see the below localized under the tutor card', (dataTable)=>{

        nagwa_classes_page.validate_theDispayed_tutor_card(dataTable)
        })

When('I should see {string} within the details link for the selected language', (text_key) => {
            nagwa_classes_page.validate_details_text(text_key)
        })

When('I should see {string} or {string} within the enrollment link for the selected language', (text_key1, text_key2) => {
            nagwa_classes_page.validate_enrollmet_text_or_soldout_text(text_key1, text_key2)
        })


When('I click on the Enrollment link', () => {
            nagwa_classes_page.click_on_enrollment()
        })

       

Then('The message {string} will be localized within page title with selected {string}', (text_key,language) => {
    nagwa_classes_page.validate_welcome_message_is_localized(text_key,language)
})  


When('I click on Details', () => {
    nagwa_classes_page.click_on_details()
})  

Then('I should see "سجل مجانًا" button', () => {
    nagwa_classes_page.validate_enroll_button_exist()
})  