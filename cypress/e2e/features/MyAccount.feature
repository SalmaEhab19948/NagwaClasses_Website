Feature: My Account Page

    Background: navigate to nagwa web site
        When I open the nagwa web site
        And  The config language selected from dropDown list


    Scenario: Verify that all text displayed correctly on Account Info section
        Given I click on sign up link
        And   I click on Continue with Email link
        And   I sign in to Nagwa
        When  I open My Account page
        Then  I should see "my_account" as page title
        And   I should see "delete_account" text as link text
        And   I should see "full_name" text as label text
        And   I should see "mobile_number" text as label text
        And   I should see "email_address" text as label text


    Scenario: Verify student data retrieved successfully from database
        Given I click on sign up link
        And   I click on Continue with Email link
        And   I sign in to Nagwa
        When  I open My Account page
        Then  User info is retrieved successfully from database


    Scenario: Verify Change Name popup
        Given I click on sign up link
        And   I click on Continue with Email link
        And   I sign in to Nagwa
        When  I open My Account page
        And   I click change "Full Name" link
        Then  I should see "change_name" as popup title
        And   I should see "first_name" as field placeholder
        And   I should see "last_name" as field placeholder
        And   I should see "save" as button text
        And   I should see "cancel" as button text


    Scenario: Verify updating student Full Name
        Given I click on sign up link
        And   I click on Continue with Email link
        And   I sign in to Nagwa
        When  I open My Account page
        And   I click change "Full Name" link
        And   I update user info with the following
            | field      | value      |
            | First Name | Tester     |
            | Last Name  | automation |
        Then  I should see "your_info_updated_successfully" success message
        And   User full name is updated successfully


    Scenario: Verify that First Name and Last Name can't exceed allowed character length
            Given I click on sign up link
            And   I click on Continue with Email link
            And   I sign in to Nagwa
            When  I open My Account page
            And   I click change "Full Name" link
            And   I update user info with the following
                | field      | value      |
                | First Name | Andrew Gabrial Jim Watson Harry Jackson Haroer Edward Michael Wilson |
                | Last Name  | Andrew Gabrial Jim Watson Harry Jackson Haroer Edward Michael Wilson |
            Then  I should see "your_info_updated_successfully" success message
            And   I should see "character_limit_exceeded" full name validation error 


    Scenario: Verify that First Name and Last Name can't be less than allowed character length
            Given I click on sign up link
            And   I click on Continue with Email link
            And   I sign in to Nagwa
            When  I open My Account page
            And   I click change "Full Name" link
            And   I update user info with the following
                | First Name |      T     |
                | Last Name  |      T     |
            Then  I should see "character_limit_exceeded" full name validation error 


    Scenario: Verify that First Name and Last Name doesn't accept numbers
            Given I click on sign up link
            And   I click on Continue with Email link
            And   I sign in to Nagwa
            When  I open My Account page
            And   I click change "Full Name" link
            And   I update user info with the following
                | First Name   | Test1      |
                | Last Name    |    123     |
            Then  I should see "numbers_special_characters_error" full name validation error 


    Scenario: Verify that First Name and Last Name doesn't accept special characters
            Given I click on sign up link
            And   I click on Continue with Email link
            And   I sign in to Nagwa
            When  I open My Account page
            And   I click change "Full Name" link
            And   I update user info with the following
                | First Name |   Te$t     |
                | Last Name  | @utomtion  |
            Then  I should see "numbers_special_characters_error" full name validation error 


    Scenario: Verify that First Name and Last Name accept '.', '-', '_', ''' characters
        Given I click on sign up link
        And   I click on Continue with Email link
        And   I sign in to Nagwa
        When  I open My Account page
        And   I click change "Full Name" link
        And   I update user info with the following
            | field      | value              |
            | First Name | Tester.First-name  |
            | Last Name  | Tester's last_name |
        Then  I should see "your_info_updated_successfully" success message
        And   User full name is updated successfully


    Scenario: Verify that First Name and Last Name can't be empty
        Given I click on sign up link
        And   I click on Continue with Email link
        And   I sign in to Nagwa
        When  I open My Account page
        And   I click change "Full Name" link
        And   I clear "First Name" field
        And   I clear "Last Name" field
        Then  "save" button should be disabled



    Scenario: Verify Delete Account popup
        Given I click on sign up link
        And   I click on Continue with Email link
        And   I sign in to Nagwa
        When  I open My Account page
        And   I click on Delete Account link
        Then  I should see "delete_account" as popup title
        And   I should see "delete_account_confirm_message" text as label text
        And   I should see "confirm" as button text
        And   I should see "cancel" as button text


    Scenario: Verify Change Mobile popup
        Given I click on sign up link
        And   I click on Continue with Email link
        And   I sign in to Nagwa
        When  I open My Account page
        And   I click change "Mobile Number" link
        Then  I should see "change_mobile_number" as popup title
        And   I should see "continue" as button text
        And   I should see "cancel" as button text


    Scenario: Verify that mobile can't be empty
        Given I click on sign up link
        And   I click on Continue with Email link
        And   I sign in to Nagwa
        When  I open My Account page
        And   I click change "Mobile Number" link
        And   I clear "Mobile Number" field
        Then  "continue" button should be disabled


    Scenario: Verify entering invalid mobile number
        Given I click on sign up link
        And   I click on Continue with Email link
        And   I sign in to Nagwa
        When  I open My Account page
        And   I click change "Mobile Number" link
        And   I update user info with the following
            | Mobile Number  | 0101234567890 |
        Then  I should see "invalid_phone" mobile validation error 


    Scenario: Verify updating mobile number
        Given I click on sign up link
        And   I click on Continue with Email link
        And   I sign up to Nagwa using random email
        When  I open My Account page
        And   I click change "Mobile Number" link
        And   I update user info with the following
            | Mobile Number  | 1199988989 |
        And   I enter valid mobile OTP
        Then  I should see "mobile_added_successfully" mobile success message
        And   Mobile is updated successfully



    Scenario: Verify entering invalid mobile OTP
        Given I click on sign up link
        And   I click on Continue with Email link
        And   I sign in to Nagwa
        When  I open My Account page
        And   I click change "Mobile Number" link
        And   I update user info with the following
            | Mobile Number  | 1100000009 |
        And   I enter invalid mobile OTP
        Then  I should see "otp_code_incorrect_error" mobile otp validation error


    Scenario: Verify entering mobile number already exists
        Given I click on sign up link
        And   I click on Continue with Email link
        And   I sign in to Nagwa
        When  I open My Account page
        And   I click change "Mobile Number" link
        And   I update user info with existing mobile number
        Then  I should see "phone_number_already_exist" mobile validation error


    Scenario: Verify that student can delete his account
        Given I click on sign up link
        And   I click on Continue with Email link
        And  I sign up to Nagwa using random email
        When  I open My Account page
        And   I delete the account
        Then  I should see "SignUp" within the sign up button
        And   I should see "SignIn" within the sign in button


