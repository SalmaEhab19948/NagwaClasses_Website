Feature: Search Page


Scenario: Verify user can search by text fro home screen
    Given I open the nagwa web site
    And   user click on search icon
    When  user search by existing text "lesson"
    And   user click on submit button
    Then  I validate navigating to valid url and "lesson" exist in result


Scenario: user search by existing text in search page
    Given user in the search page
    When  user search by existing text "lesson" in search page
    Then  I verify "SearchResults" and the "lesson" returned in all results

    
Scenario: user search by not existing text in search page
    Given user in the search page
    When  user search by notExisting text "notExist" in search page
    Then  I verify "SearchResults" title and "NoResult" no result found in results


Scenario: verify header links redirect succssfully
    Given user in the search page
    When The config language selected from dropDown list
    Then Check Navigation of "Wallet"
    And  Check Navigation of "Nagwa" 


Scenario: verify that footer links redirect successfully 
    Given user in the search page
    When The config language selected from dropDown list
    Then Check Navigation of "AboutUs"
    And  Check Navigation of "ContactUs" 
    And  Check Navigation of "PrivacyPolicy" 
    And  Check Navigation of "TermsAndConditions"
    And  Check Navigation of "Courses"
    And  Check Navigation of "Lessons"
    And  Check Navigation of "LessonPlans"
    And  Check Navigation of "Presentations"
    And  Check Navigation of "Videos"
    And  Check Navigation of "Explainers"
    And  Check Navigation of "Playlists"
    And  Check Navigation of "Nagwa" 
