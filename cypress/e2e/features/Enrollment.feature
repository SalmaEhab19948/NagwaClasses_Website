Feature: Class Enrollment


Background:
    Given I open the nagwa web site
    And   The config language selected from dropDown list


Scenario: Verify enrollment in guest mode
    When I open subject's classes page
    And  I open any class details page
    And  I click on "enroll_for_free" button
    And  I click on Continue with Email link
    And  I sign up to Nagwa using random email
    Then I should see successful enrollment pop-up
    And  validate successful enrollment pop-up text
    And  I close pop-up
    And  I open My Account page
    And  I delete the account
