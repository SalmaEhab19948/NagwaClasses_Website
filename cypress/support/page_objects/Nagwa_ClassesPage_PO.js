/// <reference types="cypress" />

import Main_Base_PO from "./Main_Base_PO";

let  language_name=''


class Nagwa_ClassesPage_PO extends Main_Base_PO {


   
    elements = {
        
        language_dropdown: () => cy.xpath('(//div[@class="user-actions"]//li[@class="dropdown"])[1]'),
        sign_up_link: () => cy.get('.user-actions > ul > :nth-child(1) > a > span'),
        sign_in_link: () => cy.get('.user-actions > ul > :nth-child(2) > a > span'),
        country: () => cy.xpath('//div[@class="user-actions"]//a[@class="toggle-countries dev-countries-classes"]//span'),
        languaga: () => cy.get(':nth-child(3) > [href="#"]'),
        wallet: () => cy.get('.right > ul > li > a > span'),
        grades_bar: () => cy.get('.main-nav > ul'),
        company_footer_pages: () => cy.get('.right > :nth-child(1) > ul'),
        content_footer_pages: () => cy.get('.right > :nth-child(2) > ul'),
        sub_title_page:() => cy.get('.title-header__sub-title'),
        sub_tutor_card: () => cy.get(':nth-child(1) > .class-card__data >') ,
        details_button: () => cy.xpath('(//*[@class="class-card__cta"])[1]/a'),
        enrollment_button: () => cy.xpath('(//*[@class="class-card__cta"])[1]/button'),
        sold_out: () => cy.xpath('//*[@class="class-card"][1]//span[@class="badge badge-grey"]'),
        page_title: () => cy.xpath('//*[@class="page-title"]'),
        enroll_inside_class_details: () => cy.xpath('//*[@class="btn btn-green btn-enroll"]')

        
       
       
    }

    click_on_language_dropdown(language) {
        this.elements.language_dropdown().click();

        var select_langauge = ''
        switch(language){
            case 'العربية':
                select_langauge = 'ar'
                break;
            case 'Français':
                select_langauge = 'fr'
                break;
            case 'English':
                    select_langauge = 'en'
                    break;

            default:
                select_langauge = 'en'
    }
    cy.xpath(`(//*[contains(@class,'dropdown-menu languages')])[1]//a[@data-val='${select_langauge}']`).click({force: true })

    cy.wait(10000)

}

validate_signUp_link_text(key) {

    cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem=>{
          language_name = $elem.text().trim()
       
       
        var language_iso = ''
        switch(language_name){
            case 'العربية':
                language_iso = 'ar'
                break;
            case 'Français':
                language_iso = 'fr'
                break;
            default:
                language_iso = 'en'
            }
           

    cy.verfiyTheDisplayedText(this.elements.sign_up_link(), this.get_value_by_key(key,  language_iso))
})
}

validate_signIn_link_text(key) {

    cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem=>{
          language_name = $elem.text().trim()
       
       
        var language_iso = ''
        switch(language_name){
            case 'العربية':
                language_iso = 'ar'
                break;
            case 'Français':
                language_iso = 'fr'
                break;
            default:
                language_iso = 'en'
            }
           

    cy.verfiyTheDisplayedText(this.elements.sign_in_link(), this.get_value_by_key(key,  language_iso))
})
}

validate_selected_Country(key) {

    cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem=>{
        language_name = $elem.text().trim()
     
     
      var language_iso = ''
      switch(language_name){
          case 'العربية':
              language_iso = 'ar'
              break;
          case 'Français':
              language_iso = 'fr'
              break;
          default:
              language_iso = 'en'
          }

    cy.verfiyTheDisplayedText(this.elements.country(), this.get_value_by_key(key, language_iso))
})

}

validate_Wallet_text(key) {

    cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem=>{
        language_name = $elem.text().trim()
     
     
      var language_iso = ''
      switch(language_name){
          case 'العربية':
              language_iso = 'ar'
              break;
          case 'Français':
              language_iso = 'fr'
              break;
          default:
              language_iso = 'en'
          }

    cy.verfiyTheDisplayedText(this.elements.wallet(), this.get_value_by_key(key, language_iso))
})
}

validate_theDispayed_Grades(dataTable) {

    cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem=>{
        language_name = $elem.text().trim()
     
     
      var language_iso = ''
      switch(language_name){
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
    let grades_title = []
    dataTable.hashes().forEach($elem => {
        grades_title.push(this.get_value_by_key($elem.grade_name, language_iso))
    });
    this.elements.grades_bar().children().each($elem => {
        expect($elem.text().trim()).to.equal(grades_title[index])
        index += 1
    })
})
}


validate_theDispayed_Campany_Pages(dataTable) {
   
   
    cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem=>{
        language_name = $elem.text().trim()
     
     
      var language_iso = ''
      switch(language_name){
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
    let pages_title = []
    dataTable.hashes().forEach($elem => {
        pages_title.push(this.get_value_by_key($elem.page_name, language_iso))
    });
    this.elements.company_footer_pages().children().each($elem => {
        expect($elem.text().trim()).to.equal(pages_title[index])
        index += 1
    })

})
}


validate_theDispayed_Content_Pages(dataTable) {

    cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem=>{
        language_name = $elem.text().trim()
     
     
      var language_iso = ''
      switch(language_name){
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
    let pages_title = []
    dataTable.hashes().forEach($elem => {
        pages_title.push(this.get_value_by_key($elem.page_name, language_iso))
    });
    this.elements.content_footer_pages().children().each($elem => {
        expect($elem.text().trim()).to.equal(pages_title[index])
        index += 1
    })
})
}

validate_SubTitle(grade_key, country_key){

    cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem=>{
        language_name = $elem.text().trim()
     
     
      var language_iso = ''
      switch(language_name){
          case 'العربية':
              language_iso = 'ar'
              break;
          case 'Français':
              language_iso = 'fr'
              break;
          default:
              language_iso = 'en'
          }
         
    let sub_title =   `${super.get_value_by_key(country_key, language_iso)} • ${super.get_value_by_key(grade_key, language_iso)}`
    cy.verfiyTheDisplayedText(this.elements.sub_title_page(),sub_title)
})
}

validate_theDispayed_tutor_card(dataTable) {

    cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem=>{
        language_name = $elem.text().trim()
     
     
      var language_iso = ''
      switch(language_name){
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
    this.elements.sub_tutor_card().children().each($elem => {
        expect($elem.text().trim()).to.contain(card_details[index])
        index += 1
    })
})
}

validate_details_text(key) {

    cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem=>{
        language_name = $elem.text().trim()
     
     
      var language_iso = ''
      switch(language_name){
          case 'العربية':
              language_iso = 'ar'
              break;
          case 'Français':
              language_iso = 'fr'
              break;
          default:
              language_iso = 'en'
          }

    cy.verfiyTheDisplayedText(this.elements.details_button(), this.get_value_by_key(key, language_iso))
})
}

validate_enrollmet_text_or_soldout_text(text_key1, text_key2) {

    cy.xpath(`(//*[@class="user-actions"]//li[@class="dropdown"])[1]//span`).then($elem=>{
        language_name = $elem.text().trim()
     
     
      var language_iso = ''
      switch(language_name){
          case 'العربية':
              language_iso = 'ar'
              break;
          case 'Français':
              language_iso = 'fr'
              break;
          default:
              language_iso = 'en'
          }

          cy.xpath('(//*[@class="class-card__cta"])[1]/button').then(($element) => {
            if ($element.length > 0) {
                {cy.verfiyTheDisplayedText(this.elements.enrollment_button(), this.get_value_by_key(text_key1, language_iso));}

            } else {
                {cy.verfiyTheDisplayedText(this.elements.sold_out(), this.get_value_by_key(text_key2, language_iso));}
            }
          });

        //   if((this.elements.sold_out()).should('not.exist'))
        //     {cy.verfiyTheDisplayedText(this.elements.enrollment_button(), this.get_value_by_key(text_key1, language_iso));}
        //   else 
        //   {cy.verfiyTheDisplayedText(this.elements.sold_out(), this.get_value_by_key(text_key2, language_iso));}

          // try {
        //     this.elements.sold_out().then($sold_out => {
        //         if ( $sold_out.is(':visible')) {
        //             cy.log("visible");
        //         } else {
        //             cy.log("element is not visible");
        //         }
        //     }).catch(() => {
        //         cy.log("element does not exist");
        //     });
        // } catch (err) {
        //     cy.log("error occurred:", err);
        // }

          // cy.get('.class-card__cta:first button', { failOnStatusCode: false }).then($button => {
        //     if ($button.length > 0) {
        //         cy.log("Button exists");
        //     } else {
        //         cy.log("Button does not exist");
        //     }
        // });



        // try {
        //     this.elements.sold_out().then($sold_out =>
        //         {
        //            $sold_out.is(':visible')
        //                     cy.log("visible")
        
        //         })
                 
        // } catch (err) {
        //     cy.log("element is not visible")
        // }

         //   cy.xpath('(//*[@class="class-card__cta"])[1]/button').should(($element) => {
        //     if ($element.has()) {
             
        //         {cy.verfiyTheDisplayedText(this.elements.enrollment_button(), this.get_value_by_key(text_key1, language_iso));}
        //     } else {
        //         {cy.verfiyTheDisplayedText(this.elements.sold_out(), this.get_value_by_key(text_key2, language_iso));}
              
        //     }
        //   });




        // this.elements.sold_out().then($sold_out =>
        //     {
        //         if ($sold_out.is(':visible'))
        //             {
        //                 cy.log("visible")
        //             }
                
        //         else {
        //             cy.log("not visible")
        //         }
        //     }
        // )


    
})
}

click_on_enrollment(){

    this.elements.enrollment_button().then($elem=>{

    if ($elem.length>0)
        {
        $elem.click();

} else if ($elem.length=0) {
    cy.log("element is not exist")
    } }
    )
    
    
}



validate_welcome_message_is_localized(text_key,languaga ){

    var language_iso = ''
      switch(languaga){
          case 'العربية':
              language_iso = 'ar'
              break;
          case 'Français':
              language_iso = 'fr'
              break;
          default:
              language_iso = 'en'
          }

    cy.verfiyTheDisplayedText(this.elements.page_title(),this.get_value_by_key(text_key,language_iso ));
}

click_on_details(){
    this.elements.details_button().click();
}

validate_enroll_button_exist(){
    var enroll_element=this.elements.enroll_inside_class_details();
    expect(enroll_element).to.exist;
}

}


export default Nagwa_ClassesPage_PO;