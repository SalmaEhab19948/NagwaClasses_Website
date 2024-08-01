Feature: Nagwa Homepage

  Background: navigate to nagwa web site
    When I open the nagwa web site
  
  
  # @new_user_e2e_follow
  Scenario: Verfiy that the new user can sign up successfully
    Given The config language selected from dropDown list
    When  I click on sign up link
    And   I click on Continue with Email link
    And   I sign up with new user with the following data:
          | fristName | lastName   |  country  | grade                  |
          | Tester    | automation |  Egypt    | FifthYearPrimarySchool |
    Then  I should see "Tester" within the user name
 

  Scenario: Verify that user  an login successfully 
    Given  I click on sign in link
    When   I click on Continue with Email link
    And    I sign in to Nagwa
    Then   I should see "Tester" within the user name