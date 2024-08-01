import Main_Base_PO from "./Main_Base_PO";

class Nagwa_Welcome_PO extends Main_Base_PO {

    elements = {
        get_started_url         :() => cy.visit(`https://www.nagwa.com/${this.config.language()}/eg/classes/welcome/`),
        how_to_banner_header    :() => cy.get('h1'),
        how_to_banner_paragraph :() => cy.get('.how-to__top-banner > .container > p'),
        download_section_header :() => cy.xpath('//*[@id="download-section"]//h2'),
        register_section_header :() => cy.xpath('//*[@id="register-section"]//h2'),
        wallet_section_header   :() => cy.xpath('//*[@id="wallet-section"]//h2'),  
        session_section_header  :() => cy.xpath('//*[@id="session-section"]//h2'),
        download_button         :() => cy.get('#download-section > .row__info > .row__actions > .custom-dropdown > button'),
        download_dropdown       :() => cy.get('#download-section > .row__info > .row__actions > .custom-dropdown'),
        view_classes_button     :() => cy.get('#register-section > .row__info > .row__actions > .btn'),
        my_wallet_button        :() => cy.get('#wallet-section > .row__info > .row__actions > .btn'),

    }



    visit_get_started_page(){
        this.elements.get_started_url()
    }

    validate_welcome_page_url(country_name){
        let country = this.get_data_country(country_name)
        cy.url().should("include",`https://www.nagwa.com/${this.config.language()}/${country}/classes/welcome/`)
    }

    validate_banner_title(key){
        cy.verfiyTheDisplayedText(this.elements.how_to_banner_header(),super.get_value_by_key(key, this.config.language()))
    }

    validate_banner_paragraph(key){
        cy.verfiyTheDisplayedText(this.elements.how_to_banner_paragraph(), super.get_value_by_key(key, this.config.language()))
    }

    validate_how_to_steps(dataTable){
        let step_cards = dataTable.rawTable;
        let card;
        for(card of step_cards){
            console.log(card[0])
            console.log(card[1])
            //check_step_card(i); 

            const card_number = card[0];
            const card_text = card[1];
        
            cy.log(card_number)
            cy.log(card_text)
        
            cy.verfiyTheDisplayedText(cy.xpath(`//*[@class="card how-to__step"][${card_number}]//span`), card_number);
            cy.verfiyTheDisplayedText(cy.xpath(`//*[@class="card how-to__step"][${card_number}]//h4`), super.get_value_by_key(card_text, this.config.language()))
        }
    }

    validate_download_section_title(key){
        cy.verfiyTheDisplayedText(this.elements.download_section_header(), super.get_value_by_key(key, this.config.language()))
    }

    validate_register_section_title(key){
        cy.verfiyTheDisplayedText(this.elements.register_section_header(), super.get_value_by_key(key, this.config.language()))
    }

    validate_wallet_section_title(key){
        cy.verfiyTheDisplayedText(this.elements.wallet_section_header(), super.get_value_by_key(key, this.config.language()))
    }

    validate_session_section_title(key){
        cy.verfiyTheDisplayedText(this.elements.session_section_header(), super.get_value_by_key(key, this.config.language()))
    }

    validate_paragraph_text(key){
        cy.xpath('//p')
          .contains(super.get_value_by_key(key, this.config.language()))
          .should("exist");
    }

    validate_download_button_text(key){
        cy.verfiyTheDisplayedText(this.elements.download_button(), super.get_value_by_key(key, this.config.language()))
    }

    click_on_download_button(){
        this.elements.download_dropdown().click();
    }

    validate_download_options(dataTable){
        let options = dataTable.rawTable;
        let option;
        let i = 1;
        for(option of options){
            cy.verfiyTheDisplayedText(cy.xpath(`//*[@id='download-section']//ul//li[${i}]//a`), super.get_value_by_key(option[0], this.config.language()));
            i++;
        }
    }

    validate_button_text(key){
        cy.xpath('//*[contains(@class, "btn")]')
          .contains(super.get_value_by_key(key, this.config.language()))
          .should("exist");
    }

    click_on_my_wallet_button(){
        this.elements.my_wallet_button().click();
    }

    click_on_view_classes_button(){
        this.elements.view_classes_button().click();
    }

    validate_header_text(key){
        cy.xpath('//h1').then($el => $el.text().replace(/\s+/g, ' ').trim())
        .should("contain",super.get_value_by_key(key, this.config.language()))
        .should("exist");
    }
    
}


export default Nagwa_Welcome_PO;
