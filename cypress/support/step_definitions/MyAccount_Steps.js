import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";
import MyAccount_PO from "../page_objects/MyAccount_PO"; 

const myAccount_page = new MyAccount_PO();


When('I click on Delete Account link', () => {
    myAccount_page.click_on_delete_account()
})

When('I delete the account', () => {
    myAccount_page.delete_account()
})

When('I click change {string} link', (option) => {
    myAccount_page.click_change(option)
})

When('I update user info with the following', (dataTable) => {
    myAccount_page.update_user_info(dataTable)
})

When('I enter valid mobile OTP', () => {
    myAccount_page.enter_mobile_otp()
})

When('I enter invalid mobile OTP', () => {
    myAccount_page.enter_invalid_mobile_otp()
})

Then('User full name is updated successfully', () => {
    myAccount_page.validate_fullname_successfully_updated()
})

Then('I should see {string} success message', (text_key) => {
    myAccount_page.validate_fullname_sucees_msg(text_key)
})

Then('I should see {string} as page title', (text_key) => {
    myAccount_page.validate_title_text(text_key)
})

Then('I should see {string} text as link text', (text_key) => {
    myAccount_page.validate_link_text(text_key)
})

Then('I should see {string} text as label text', (text_key) => {
    myAccount_page.validate_label_text(text_key)
})
   
Then('I should see {string} full name validation error', (text_key) => {
    myAccount_page.validate_name_error(text_key)
})

Then('I should see {string} as popup title', (text_key) => {
    myAccount_page.validate_popup_title(text_key)
})

Then('User info is retrieved successfully from database', () => {
    myAccount_page.verify_user_info_with_db();
})

Then('I should see {string} as field placeholder', (text_key) => {
    myAccount_page.validate_placeholder_text(text_key)
})

Then('I should see {string} mobile validation error', (text_key) => {
    myAccount_page.validate_mobile_error(text_key)
})

Then('I should see {string} mobile success message', (text_key) => {
    myAccount_page.validate_mobile_success_msg(text_key)
})

Then('Mobile is updated successfully', () => {
    myAccount_page.validate_mobile_successfully_updated()
})

Then('I clear {string} field', (field) => {
    myAccount_page.clear(field)
})

Then('{string} button should be disabled', (text_key) => {
    myAccount_page.validate_button_state(text_key)
})

Then('I enter (valid|invalid) mobile otp', (status) => {
    if (status == 'valid'){
    myAccount_page.enter_mobile_otp(status)}
    else if (status == 'invalid'){
        myAccount_page.enter_mobile_otp(status)
    }
})

Then('I should see {string} mobile otp validation error', (text_key) => {
    myAccount_page.validate_mobile_otp_error(text_key)
})

When('I update user info with existing mobile number', (text_key) => {
    myAccount_page.enter_existing_user_mobile()
})

