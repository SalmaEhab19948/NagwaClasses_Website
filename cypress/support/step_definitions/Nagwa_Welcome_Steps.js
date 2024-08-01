import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";
import Nagwa_Welcome_PO from "../page_objects/Nagwa_Welcome_PO";


const nagwa_welcome_page = new Nagwa_Welcome_PO();




Given('I open get started page',()=>{
    nagwa_welcome_page.visit_get_started_page()
})

Then('Welcome page url should contain {string}',(option) => {
    nagwa_welcome_page.validate_welcome_page_url(option)
})

Then('I should see {string} on the banner header',(text)=>{
    nagwa_welcome_page.validate_banner_title(text)
})

Then('I should see {string} as the banner text',(text)=>{
    nagwa_welcome_page.validate_banner_paragraph(text)
})

Then('I should see the below steps on the how-to-steps cards',(dataTable)=>{
    nagwa_welcome_page.validate_how_to_steps(dataTable)
})

Then('I should see {string} as paragraph text',(text)=>{
    nagwa_welcome_page.validate_paragraph_text(text)
})

Then('I should see {string} as Download section title',(text_key)=>{
    nagwa_welcome_page.validate_download_section_title(text_key)
})

Then('I should see {string} as Register section title',(text_key)=>{
    nagwa_welcome_page.validate_register_section_title(text_key)
})

Then('I should see {string} as Wallet section title',(text_key)=>{
    nagwa_welcome_page.validate_wallet_section_title(text_key)
})

Then('I should see {string} as Session section title',(text_key)=>{
    nagwa_welcome_page.validate_session_section_title(text_key)
})

When('I should see {string} within the download button',(text_key)=>{
    nagwa_welcome_page.validate_download_button_text(text_key)

})

When ('I click on download button',()=>{
    nagwa_welcome_page.click_on_download_button()
})

Then('I should see the below options in the download dropdown',(dataTable)=>{
    nagwa_welcome_page.validate_download_options(dataTable)
})

Then('I should see {string} as button text',(text)=>{
    nagwa_welcome_page.validate_button_text(text)
})

When ('I click on view classes button',()=>{
    nagwa_welcome_page.click_on_view_classes_button()
})

When ('I click on my wallet button',()=>{
    nagwa_welcome_page.click_on_my_wallet_button()
})

Then('I should see {string} as header text',(text)=>{
    nagwa_welcome_page.validate_header_text(text)
})