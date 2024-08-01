import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";

import Nagwa_Stages_PO from "../page_objects/Nagwa_Stage_PO";

const nagwa_stage_page = new Nagwa_Stages_PO();

When('I should see {string} within the grade card title',(grade_name)=>{
    nagwa_stage_page.validate_stage_grade_card_title(grade_name)

})
When('The stage page url shoudl be conatins {string} with right formate', (grade_name) => {
    nagwa_stage_page.validate_stage_url(grade_name)
    
})

When('I click on {string} grade', (grade_name)=>{
    nagwa_stage_page.click_on_grade_name(grade_name)
})







