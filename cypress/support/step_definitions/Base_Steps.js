
import { When, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import { delete_user }  from "../step_definitions/apis_helper"


Before(() => {
     resource_file = require("./resource_files/SharedResource.json");   
})

Before({ tags: '@new_user_e2e_follow' }, () => {
  
    delete_user()
})

    
   



When("I wait for {int} seconds", (seconds) => {
    cy.wait(seconds * 1000);
})







