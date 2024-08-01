Feature: Class Details

Background:
Given I open the nagwa web site
And   The config language selected from dropDown list
And   I open subject's classes page


Scenario: Verify class details
When  I open any class details page
Then  Class title and description are displayed properly
And   Class details are correct
And   I verify appearance of get started card


Scenario: Verify educator data and feedback
When  I open any class details page
Then  Educator data are displayed properly
And   educator feedback


Scenario: Verify class sessions
When  I open any class details page
Then  Class sessions data is correct


Scenario: Verify opening Nagwa Welcome page from Class Details page
When  I open any class details page
And   I click on Get Started link
Then  User is redirected to Nagwa Welcome page


Scenario: Verify clicking "Enroll" button in guest mode
When  I open any class details page
And   I click on "enroll_for_free" button
Then  User is redirected to Nagwa Accounts page


Scenario: Verify opening Tutor Profile page
When  I open any class details page
And   I click on "tutor_profile_label" link
Then  User is redirected to Tutor page
