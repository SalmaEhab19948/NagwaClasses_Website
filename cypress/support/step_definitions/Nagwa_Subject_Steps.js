import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";

import Nagwa_Grades_PO from "../page_objects/Nagwa_Grades_PO";
import Nagwa_Subjects_PO from "../page_objects/Nagwa_Subjects_PO";


const nagwa_grade_page = new Nagwa_Grades_PO();
const nagwa_subjects_page = new Nagwa_Subjects_PO();

When('The user should redirect to classes page',()=>{
    let subject_name = nagwa_grade_page.return_subject_name()
    nagwa_subjects_page.validate_subject_title(subject_name)
})

Then('I should see {string} and {string} within sub title',(grade_key,country_key )=>{
    nagwa_subjects_page.validate_subTitle(grade_key,country_key)

})





