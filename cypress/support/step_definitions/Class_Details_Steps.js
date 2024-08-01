import ClassDetails_PO from "../page_objects/Class_Details_PO";
import { When , Then} from "@badeball/cypress-cucumber-preprocessor";
import Nagwa_Home_PO from "../page_objects/Nagwa_Homepage_PO";

const class_details_page = new ClassDetails_PO();
const home_page = new Nagwa_Home_PO();


When('I open any class details page', () => {
    class_details_page.open_class_details()
    class_details_page.get_class_id()
})

When('Class sessions data is correct', () => {
    class_details_page.verify_sessions_details()
})

When("I open subject's classes page", () => {
    home_page.open_subject_page()
})

Then('Class title and description are displayed properly', () => {
    class_details_page.verify_class_description()
})

Then('Class details are correct', () => {
    class_details_page.verify_class_details()
})


Then('Educator data are displayed properly', () => {
    class_details_page.verify_educator_data()
})

Then('I verify appearance of get started card', () => {
    class_details_page.validate_get_started_card_text()
})

When('I click on Get Started link', () => {
    class_details_page.click_get_started_link()
})

Then('User is redirected to Nagwa Welcome page', () => {
    class_details_page.validate_get_started_url()
})

When('I click on {string} button', (text_key) => {
    class_details_page.click_on_enroll(text_key)
})

Then('User is redirected to Nagwa Accounts page', () => {
    class_details_page.validate_accounts_url()
})

Then('educator feedback', () => {
    class_details_page.verify_educator_feedback()
})

When('I click on {string} link', (text_key) => {
    class_details_page.click_on_link(text_key)
})

Then('User is redirected to Tutor page', () => {
    class_details_page.validate_tutor_profile_url()
})


Then('I should see successful enrollment pop-up', () => {
    class_details_page.validate_successful_enrollment()
})


Then('validate successful enrollment pop-up text', () => {
    class_details_page.verify_successful_enrollment_popup()
})
  

Then('I close pop-up', () => {
    class_details_page.close_popup()
})
