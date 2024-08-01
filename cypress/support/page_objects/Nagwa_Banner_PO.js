/// <reference types="cypress" />

import Nagwa_ClassesPage_PO from "./Nagwa_ClassesPage_PO";

let language_name = ''

class Nagwa_Banner_PO extends Nagwa_ClassesPage_PO {


    elements = {

        banner_header: () => cy.xpath('//*[@class="app-banner__details"]/h2'),
        banner_details: () => cy.xpath('//*[@class="app-banner__details"]//p'),
        app_feature: () => cy.xpath('//*[@class="app-feature"]'),
        download_text: () => cy.xpath('//*[@class="download-options hide-on-mobile"]'),
        view_all_classes: () => cy.xpath('//*[@class="btn btn-primary"]'),
        download_button: () => cy.xpath('//*[@class="custom-dropdown"]/button'),
        windows_link: () => cy.xpath('//*[@id="connect-windows"]'),
        macOS_Apple_Silicon_link: () => cy.xpath('//*[@id="connect-macOS-apple-silicon"]'),
        macOS_Intel_link: () => cy.xpath('//*[@id="connect-macOS-intel"]'),
        download_drop_down: () => cy.xpath('//*[@class="dropdown-menu"]/li/a'),
        store_links: () => cy.xpath('//*[@class="download-options__mobile-icons"]/li/a')
      
        
      




    }


    validate_banner_header_text(key) {

        cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem => {
            language_name = $elem.text().trim()


            var language_iso = ''
            switch (language_name) {
                case 'العربية':
                    language_iso = 'ar'
                    break;
                case 'Français':
                    language_iso = 'fr'
                    break;
                default:
                    language_iso = 'en'
            }



            cy.verfiyTheDisplayedText(this.elements.banner_header(), this.get_value_by_key(key, language_iso))
        })
    }



    validate_banner_details_text(key) {

        cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem => {
            language_name = $elem.text().trim()


            var language_iso = ''
            switch (language_name) {
                case 'العربية':
                    language_iso = 'ar'
                    break;
                case 'Français':
                    language_iso = 'fr'
                    break;
                default:
                    language_iso = 'en'
            }

            cy.verfiyTheDisplayedText(this.elements.banner_details(), this.get_value_by_key(key, language_iso))
        })
    }


    validate_theDispayed_app_feature(dataTable) {

        cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem => {
            language_name = $elem.text().trim()


            var language_iso = ''
            switch (language_name) {
                case 'العربية':
                    language_iso = 'ar'
                    break;
                case 'Français':
                    language_iso = 'fr'
                    break;
                default:
                    language_iso = 'en'
            }
            let index = 0;
            let card_details = []
            dataTable.hashes().forEach($elem => {
                card_details.push(this.get_value_by_key($elem.card_data, language_iso))
            });
            this.elements.app_feature().children().each($elem => {
                expect($elem.text().trim()).to.contain(card_details[index])
                index += 1
            })
        })
    }

    validate_download_button_text(key) {

        cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem => {
            language_name = $elem.text().trim()


            var language_iso = ''
            switch (language_name) {
                case 'العربية':
                    language_iso = 'ar'
                    break;
                case 'Français':
                    language_iso = 'fr'
                    break;
                default:
                    language_iso = 'en'
            }


            this.elements.download_text().then($elem2 => {
                expect($elem2.text().trim()).to.contain(this.get_value_by_key(key, language_iso))
            })

        })
    }



    validate_view_all_classes_text(key) {
        cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem => {
            language_name = $elem.text().trim()


            var language_iso = ''
            switch (language_name) {
                case 'العربية':
                    language_iso = 'ar'
                    break;
                case 'Français':
                    language_iso = 'fr'
                    break;
                default:
                    language_iso = 'en'
            }

            cy.verfiyTheDisplayedText(this.elements.view_all_classes(), this.get_value_by_key(key, language_iso))
        })

    }

    click_on_download() {

        this.elements.download_button().click()
    }

    validate_download_the_app_for_all_operating_systems() {

        let download_links = ['https://apps.nagwa.com/apps/classes/live/latest/Classes-windows.exe', 'https://apps.nagwa.com/apps/classes/live/latest/Classes-macOS-apple-silicon.dmg', 'https://apps.nagwa.com/apps/classes/live/latest/Classes-macOS-intel.dmg']

        let index = 0;
       this.elements.download_drop_down().each($elem => {
            expect($elem.attr('href')).to.contain(download_links[index])
            index += 1
        })



    }


    click_on_view_all_classes() {

        this.elements.view_all_classes().click

    }

    validate_home_url(key) {

        cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem => {
            language_name = $elem.text().trim()

            var language_iso = ''

            switch (language_name) {
                case 'العربية':
                    language_iso = 'ar'
                    break;
                case 'Français':
                    language_iso = 'fr'
                    break;
                default:
                    language_iso = 'en'
            }

            cy.url().should('eq', `${Cypress.config().baseUrl}/${language_iso}/eg/`)
        })

    }



    validate_store_links_exists(dataTable) {

        let index = 0;
        let store_links = []
        dataTable.hashes().forEach($elem => {
            store_links.push('https://apps.apple.com/eg/app/nagwa-classes/id6446116250', 'https://play.google.com/store/apps/details?id=com.nagwa.classes&hl=en_US', 'https://appgallery.huawei.com/app/C108906719')

        });
        this.elements.store_links().each($elem => {
            expect($elem.attr('href')).to.contain(store_links[index])

            index += 1
        })


    }

}


export default Nagwa_Banner_PO;