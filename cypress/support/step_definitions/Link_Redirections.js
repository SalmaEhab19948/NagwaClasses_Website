import { Then , Given} from "@badeball/cypress-cucumber-preprocessor";
//import {get_value_by_key} from "./Main_Base_PO";
//import {get_value_by_key} from "../page_objects/Main_Base_PO";
import Main_Base_PO from "../page_objects/Main_Base_PO";

let language = Cypress.env("language");
let baseUrl = Cypress.config().baseUrl;

const nagwa_main_Base = new Main_Base_PO();
Then(/^Check Navigation of "(Wallet|Nagwa)"$/,(Tab1) => {
    
switch(Tab1){

    case"Wallet":
    let LinkName = nagwa_main_Base.get_value_by_key("Wallet", language);
    cy.log(LinkName);
    cy.get('.right > ul > li > a > span').click()
    cy.xpath("(//h1)[1]").then((title) => {
    const tempTitle = title.text();
    cy.log(tempTitle);
    expect(tempTitle.trim()).to.contains(LinkName.trim());
    });
    
    cy.url().should("include",`${baseUrl}/${language}/wallet/`);
    cy.go("back")
    break;
    case"Nagwa":
    cy.get('.container > .logo > a > img').click()
    cy.url().should("include",`${baseUrl}/${language}/`);
    cy.go("back")
    break;

    

}

}),
Then(/^Check Navigation of "(AboutUs|ContactUs|PrivacyPolicy|TermsAndConditions|Courses|Lessons|LessonPlans|Presentations|Videos|Explainers|Playlists)"$/,(Tab) => {

    let LinkName = nagwa_main_Base.get_value_by_key(Tab, language);
    cy.log(LinkName);
    
    function verify_titles(){
    cy.get("a").contains(LinkName).click();
    cy.xpath("(//h1)[1]").then((title) => {
    const tempTitle = title.text();
    cy.log(tempTitle);
    expect(tempTitle.trim()).to.contains(LinkName.trim());
    });
    }
switch(Tab) {
case "AboutUs":
verify_titles();
cy.url().should("include",`${baseUrl}/${language}/about/`);
cy.go("back")
break;

case "ContactUs":
verify_titles();
cy.url().should("include",`${baseUrl}/${language}/contact/`);
cy.go("back")
break;``

case "PrivacyPolicy":
verify_titles();
cy.url().should("include",`${baseUrl}/${language}/privacy/`);
cy.go("back")
break;
case "TermsAndConditions":
verify_titles();
cy.url().should("include",`${baseUrl}/${language}/terms/`);
cy.go("back")
break;

case "Courses":
verify_titles();
cy.url().should("include", `${baseUrl}/${language}/courses/`);
cy.go("back")
break;

case "Lessons":
verify_titles();
cy.url().should("include", `${baseUrl}/${language}/lessons/`);
cy.go("back")
break; 
case "LessonPlans":
verify_titles();
cy.url().should("include",`${baseUrl}/${language}/plans/`);
cy.go("back")
break; 
case "Presentations":
verify_titles();
cy.url().should("include",`${baseUrl}/${language}/presentations/`);
cy.go("back")
break;
case "Videos":
verify_titles();
cy.url().should("include",`${baseUrl}/${language}/videos/`);
cy.go("back")
break;
case "Explainers":
verify_titles();
cy.url().should("include",`${baseUrl}/${language}/explainers/`);
cy.go("back")
break;
case "Playlists":
verify_titles();
cy.url().should("include",`${baseUrl}/${language}/playlists/`);
cy.go("back")
break;

// case "Careers":
// cy.get(':nth-child(1) > ul > :nth-child(5) > a');
// cy.wait(6000)
// cy.xpath("//a[normalize-space()='Careers']").exist("https://careers.nagwa.com/");
// cy.go("back") 
// break;
 
case"Nagwa":
cy.get('.left > .logo > a > img').click()
    cy.url().should("include",`${baseUrl}/${language}/`);
    cy.go("back")
    break;

}

});
 