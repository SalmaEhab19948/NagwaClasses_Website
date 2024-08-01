
class Main_Base_PO
 {
    constructor(){
        this.student_country;
        this.updated_firstname;
        this.updated_lastname;
        this.updated_mobile;
        this.has_mobile;
    }

    config =
        {
            language: () => Cypress.env('language')
        }
    elements = {
        
        sign_up_link: () => cy.get('.user-actions > ul > :nth-child(1) > a > span'),
        sign_in_link: () => cy.get('.user-actions > ul > :nth-child(2) > a > span'),
        user_name: () => cy.get('.user-actions > :nth-child(1) > :nth-child(1) > [href="#"] > span'),
        languaga: () => cy.get(':nth-child(3) > [href="#"]'),
        country: () => cy.xpath('//div[@class="user-actions"]//a[@class="toggle-countries dev-countries-classes"]//span'),
        search_icon: () => cy.get('#btn_global_search > .f-icon'),
        wallet: () => cy.get('.right > ul > li > a > span'),
        user_dropdown : () => cy.get('.user-actions > ul > :nth-child(1)'),
        my_account : () => cy.xpath('//div[@class="user-actions"]//ul[@class="dropdown-menu user"]//li[1]//a'),
        nagwa_logo: () => cy.get('.container > .logo > a > img'),
        grades_bar: () => cy.get('.main-nav > ul'),
        app_banner_title: () => cy.get('.app-banner__details > h2'),
        app_banner_desc: () => cy.get('.app-banner__details > p'),
        download_desktop: () => cy.get('.custom-dropdown > .btn'),
        nagwa_mission: () => cy.get('.mission > p'),
        company_footer_title: () => cy.get(':nth-child(1) > h3'),
        company_footer_pages: () => cy.get('.right > :nth-child(1) > ul'),
        content_footer_title: () => cy.get(':nth-child(2) > h3'),
        content_footer_pages: () => cy.get('.right > :nth-child(2) > ul'),
        nagwa_copyright: () => cy.get('.bottom > .container > p'),
        nagwa_cookies_alert: () => cy.get('.cookies-alert > .container > p'),
        nagwa_cookies_btn: () => cy.get('#btn_cookie_accept')

    }

    navigate() {
        cy.visit(Cypress.config().baseUrl);
    }

    click_on_grade_name(key){
        this.elements.grades_bar().contains(this.get_value_by_key(key, this.config.language())).click()
    }

    click_on_signIn_link() {
        this.elements.sign_in_link().click();
    }

    click_on_signUp_link() {
        this.elements.sign_up_link().click();
    }

    click_on_wallet() {
        this.elements.wallet().click();
    }

    click_on_my_account(){
        this.elements.user_dropdown().click()
        this.elements.my_account().click()
    }

    click_on_search_icon() {
        this.elements.search_icon().click();
    }

    click_on_nagwa_logo() {
        this.elements.nagwa_logo().click();
    }

    update_language_dropdown() {
        this.elements.languaga().click()
        cy.contains(this.get_language_full_name(this.config.language())).click()
        cy.wait(2000)
    }

    validate_signIn_link_text(key) {
        cy.verfiyTheDisplayedText(this.elements.sign_in_link(), this.get_value_by_key(key, this.config.language()))
    }

    validate_user_name_text(user_name) {
        cy.verfiyTheDisplayedText(this.elements.user_name(), user_name)
    }

    validate_wallet_text(key) {
        cy.verfiyTheDisplayedText(this.elements.wallet(), this.get_value_by_key(key, this.config.language()))
    }

    validate_signUp_link_text(key) {
        cy.verfiyTheDisplayedText(this.elements.sign_up_link(), this.get_value_by_key(key, this.config.language()))
    }

    validate_selected_country(key) {
        cy.verfiyTheDisplayedText(this.elements.country(), this.get_value_by_key(key, this.config.language()))
    }

    validate_dispalyed_language(languaga) {
        cy.verfiyTheDisplayedText(this.elements.languaga(), this.get_language_full_name(this.config.language()))
    }

    validate_theDispayed_grades(dataTable) {
        let index = 0;
        let grades_title = []
        dataTable.hashes().forEach($elem => {
            grades_title.push(this.get_value_by_key($elem.grade_name, this.config.language()))
        });
        this.elements.grades_bar().children().each($elem => {
            expect($elem.text().trim()).to.equal(grades_title[index])
            index += 1
        })
    }

    validate_theDispayed_campany_pages(dataTable) {
        let index = 0;
        let pages_title = []
        dataTable.hashes().forEach($elem => {
            pages_title.push(this.get_value_by_key($elem.page_name, this.config.language()))
        });
        this.elements.company_footer_pages().children().each($elem => {
            expect($elem.text().trim()).to.equal(pages_title[index])
            index += 1
        })
    }

    validate_footer_campany_title(key) {
        cy.verfiyTheDisplayedText(this.elements.company_footer_title(), this.get_value_by_key(key, this.config.language()))
    }

    validate_nagwa_mission(key) {
        cy.verfiyTheDisplayedText(this.elements.nagwa_mission(), this.get_value_by_key(key, this.config.language()))
    }

    validate_footer_app_banner_desc(key) {
        cy.verfiyTheDisplayedText(this.elements.app_banner_desc(), this.get_value_by_key(key, this.config.language()))
    }

    validate_footer_app_banner_title(key) {
        cy.verfiyTheDisplayedText(this.elements.app_banner_title(), this.get_value_by_key(key, this.config.language()))
    }

    validate_footer_download_desktop(key) {
        cy.verfiyTheDisplayedText(this.elements.download_desktop(), this.get_value_by_key(key, this.config.language()))
    }

    validate_theDispayed_content_pages(dataTable) {
        let index = 0;
        let pages_title = []
        dataTable.hashes().forEach($elem => {
            pages_title.push(this.get_value_by_key($elem.page_name, this.config.language()))
        });
        this.elements.content_footer_pages().children().each($elem => {
            expect($elem.text().trim()).to.equal(pages_title[index])
            index += 1
        })
    }

    validate_footer_content_title(key) {
        cy.verfiyTheDisplayedText(this.elements.content_footer_title(), this.get_value_by_key(key, this.config.language()))
    }

    validate_the_home_page_title(){
        cy.title().should('eq',this.get_value_by_key('Nagwa', this.config.language()))
    }

    validate_home_url(){

        let current_lan = this.config.language()
        let baseUrl = (Cypress.config().baseUrl).toString().split("/en");
        cy.url().should('eq', `${baseUrl[0]}/${current_lan}/eg/`)

    }

    get_value_by_key(text_key, languaga) {

        var value = "";
        try {
            value = resource_file.data.find((e) => e.ResourceKey === text_key && e.Lang === languaga).ResourceValue;
        } catch (err) {
            value = text_key;
        }
        return value;

    }

    get_language_full_name(lan){
       var full_language_name = ''
        switch (lan) {
            case 'ar':
                full_language_name = 'العربية'
                break;
            case 'fr':
                full_language_name = 'Français'
                break;
            default:
                full_language_name = 'English'
        }
        return full_language_name;

    }


    update_country_dropdown(country_name) {
        this.elements.country().click()

        var data_country = ''
        switch(country_name){
            case 'Saudi Arabia':
                data_country = 'sa'
                break;
            case 'United States':
                data_country = 'us'
                break;
            case 'United Kingdom':
                data_country = 'uk'
                break;
            case 'India':
                data_country = 'in'
                break;
            default:
                data_country = 'eg'
        }

        cy.xpath(`(//*[contains(@class,'countries-list')])[1]//a[@data-country='${data_country}']`).click({force: true })
        cy.wait(10000)
    }


    get_data_country(country_name) {

        var data_country = ''
        switch(country_name){
            case 'Saudi Arabia':
                data_country = 'sa'
                break;
            case 'United States':
                data_country = 'us'
                break;
            case 'United Kingdom':
                data_country = 'uk'
                break;
            case 'India':
                data_country = 'in'
                break;
            default:
                data_country = 'eg'
        }
        return data_country;
    }



    get_user_info(){
        // select  student_id, student_first_name, student_last_name, student_email, student_mobile_number, st.grade_id, g.grade_url_text , g.stage_id, s.stage_url_text, c.country_iso_code 
        // from students st 
        // left join grades g on st.grade_id = g.grade_id
        // left join stages s on s.stage_id = g.stage_id 
        // left join countries c on s.country_id = c.country_id 
        // where student_email = 'salma.ehab@nagwa.com'
    }

    get_student_country(){
        cy.task('NagwaClassesDB', 
        `select c.country_iso_code 
        from students st 
        left join grades g on st.grade_id = g.grade_id
        left join stages s on s.stage_id = g.stage_id 
        left join countries c on s.country_id = c.country_id 
        where student_email = 'salmaehab.19948@gmail.com'`).then((res)=>{
            return res[0].country_iso_code;
        })
    }


    validate_page_url(page, country_name){
        let country = this.get_data_country(country_name)

        switch(page){
            case 'Welcome':
                cy.url().should("include",`https://www.nagwa.com/${this.config.language()}/${country}/classes/welcome/`)
                break

            case'My Account':
                cy.url().should("include",`https://www.nagwa.com/${this.config.language()}/myinfo/`)
                break

        }
    }


}
export default Main_Base_PO;