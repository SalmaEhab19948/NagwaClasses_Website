/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import Nagwa_ClassesPage_PO from "../page_objects/Nagwa_ClassesPage_PO.js";
//import Main_Base_PO from "../page_objects/Main_Base_PO"
import Nagwa_Banner_PO from "../page_objects/Nagwa_Banner_PO.js";


const nagwa_banner = new Nagwa_Banner_PO();

//const nagwa_classes_page = new Nagwa_ClassesPage_PO();


Then('I should see {string} as the banner header', (text_key) => {
    nagwa_banner.validate_banner_header_text(text_key)
})


Then('I should see {string} as the banner details', (text_key) => {
    nagwa_banner.validate_banner_details_text(text_key)
})


When('I should see the below localized under the app features', (dataTable) => {

    nagwa_banner.validate_theDispayed_app_feature(dataTable)
})


When('I should see {string} button in the banner', (text_key) => {

    nagwa_banner.validate_download_button_text(text_key)
})


When('I should see {string} link in the banner', (text_key) => {

    nagwa_banner.validate_view_all_classes_text(text_key)
})



When('I click on Download for desktop button in the banner', () => {

    nagwa_banner.click_on_download()
})


When("I should validate there are links for each operating system to download the application", () => {

    nagwa_banner.validate_download_the_app_for_all_operating_systems()
})




When("I click on View All Classes", () => {

    nagwa_banner.click_on_view_all_classes()
})


When("I should be redirected to the Nagwa Classes homepage with the selected  {string} in the URL", (text_key) => {

    nagwa_banner.validate_home_url(text_key)
})


When("I should validate the redirection to the following storlink", (dataTable) => {

    nagwa_banner.validate_store_links_exists(dataTable)
})


