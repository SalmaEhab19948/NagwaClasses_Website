import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";

import Nagwa_Grades_PO from "../page_objects/Nagwa_Grades_PO";

const nagwa_grade_page = new Nagwa_Grades_PO();


When('The url shoudl be conatins {string} and {string} with right formate', (grade_name, stage_num) => {
    nagwa_grade_page.validate_grade_url(grade_name,stage_num)
    
})

When('I should see {string} within the page card title',(grade_name) =>{

nagwa_grade_page.validate_grade_title(grade_name)
})


When('I click on one of the subject',()=>{
       nagwa_grade_page.click_on_subject()  
})






