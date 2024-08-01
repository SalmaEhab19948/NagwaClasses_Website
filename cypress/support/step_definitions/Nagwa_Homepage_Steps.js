import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";
import Nagwa_Homepage_PO from "../page_objects/Nagwa_Homepage_PO";
import Main_Base_PO from "../page_objects/Main_Base_PO";



const nagwa_home_page = new Nagwa_Homepage_PO();
const nagwa_main_Base = new Main_Base_PO();

When('I open the nagwa web site', () => {
    nagwa_home_page.navigateToHomePage()
})
When('I click on {string} stage', (text_key) => {
    nagwa_main_Base.click_on_grade_name(text_key)
})

When('click on {string} from grade cards', (text_key) => {
    nagwa_home_page.click_on_grade_name_from_grd_card(text_key)
})
//  When('check the DB', ()=>{
//     cy.task('OtpDB',`SELECT * FROM public."UserMailOtp" where "Email" = 'ashraf.hossam@nagwa.com'`).then((res)=>{
//         cy.log(res[0].Otp)
//       })
//  })
   


When('I click on sign in link', () => {
     nagwa_main_Base.click_on_signIn_link();
})

When('I click on sign up link', () => {
    nagwa_main_Base.click_on_signUp_link();
})

When('I click on wallet link', () => {
    nagwa_main_Base.click_on_wallet();
})

When('I click on nagwa logo', () => {
    nagwa_main_Base.click_on_nagwa_logo();
})

When('I should see {string} within the sign in link', (text_key) => {
    nagwa_main_Base.validate_signIn_link_text(text_key)
})

When('I should see {string} within the sign up link', (text_key) => {
    nagwa_main_Base.validate_signUp_link_text(text_key)
})

When('I should see {string} within the user name', (name) => {
    nagwa_main_Base.validate_user_name_text(name)
})

When('I should see {string} within the wallet link', (text_key) => {
    nagwa_main_Base.validate_wallet_text(text_key)
})

When('I should see {string} within the country dropdown', (text_key) => {
    nagwa_main_Base.validate_selected_country(text_key)
})

When('I should see {string} as selected country', (text_key)=>{
    nagwa_main_Base.validate_selected_country(text_key)
})

When('I should see the right language', ()=>{
    nagwa_main_Base.validate_dispalyed_language()
})

When('I should see the below grades on the grades bar:', (dataTable)=>{
    nagwa_main_Base.validate_theDispayed_grades(dataTable)
})

When('I should see {string} on the banner title',(text_key)=>{
    nagwa_home_page.validate_banner_title(text_key)
})
When('I should see {string} on the banner descrbtion', (text_key)=>{
  nagwa_home_page.validate_banner_des(text_key)
})

When('I should see {string} within the sign up button',(text_key)=>{
    nagwa_home_page.validate_signUp_button_text(text_key)

})

When('I should see {string} within the sign in button',(text_key)=>{
    nagwa_home_page.validate_signIn_button_text(text_key)

})
Given('The config language selected from dropDown list',()=>{
    nagwa_main_Base.update_language_dropdown()

})

When('I should see {string} on the app banner title',(text_key)=>{
    nagwa_main_Base.validate_footer_app_banner_title(text_key)

})

When('I should see {string} on the app banner details',(text_key)=>{
    nagwa_main_Base.validate_footer_app_banner_desc(text_key)   

})

When('I should see {string} on the download options desktop',(text_key)=>{
    nagwa_main_Base.validate_footer_download_desktop(text_key)

})

When('I should see {string} within the nagwa mission',(text_key)=>{
    nagwa_main_Base.validate_nagwa_mission(text_key)

})

When('I should see {string} within the footer campany',(text_key)=>{
    nagwa_main_Base.validate_footer_campany_title(text_key)

})

When('I should see {string} within the footer Content',(text_key)=>{
    nagwa_main_Base.validate_footer_content_title(text_key)
 
 })

When('I should see the below under the campany section:', (dataTable)=>{
    nagwa_main_Base.validate_theDispayed_campany_pages(dataTable)
})

When('I should see the below under the content section:', (dataTable)=>{
    nagwa_main_Base.validate_theDispayed_content_pages(dataTable)
})

Then('I should redirect to the home page', ()=>{
    nagwa_main_Base.validate_the_home_page_title()
    nagwa_main_Base.validate_home_url()
})

When("I set country to {string}",(country_name) => {
    nagwa_main_Base.update_country_dropdown(country_name)
})


When("I open My Account page",() => {
    nagwa_main_Base.click_on_my_account()
})



