import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";
import { delete_user }  from "../step_definitions/apis_helper";
import Nagwa_Accounts_PO from "../page_objects/Nagwa_Accounts_PO";


const nagwa_account_page = new Nagwa_Accounts_PO();


When('I click on Continue with Email link', () => {
    nagwa_account_page.click_on_continue_with_email_link()
})

When('I sign in with {string} email',(email) =>{
    nagwa_account_page.enter_email(email)
    nagwa_account_page.click_on_next_button()
    nagwa_account_page.enter_email_otp(email)
    nagwa_account_page.click_on_verfiy_button()
   
})

When('I sign up with new user with the following data:', (dataTable) => {
    nagwa_account_page.new_user_signup(dataTable)
})

When('I sign in to Nagwa', () => {
    nagwa_account_page.user_signin()
})

When('I sign up to Nagwa using random email', () => {
    nagwa_account_page.random_user_signup()
})

When('delete the new user', ()=>{
    delete_user()
})












