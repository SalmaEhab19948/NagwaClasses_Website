Feature: Subject Page

Background: navigate to nagwa web site
        When I open the nagwa web site



Scenario: Verify click on Details button redirect to the class details
 Given I click on "<stage_page>" stage
        And   I click on "<garde_key>" grade
        When   I click on one of the subject 
        And     I click on Details
        Then I should see "سجل مجانًا" button
        Examples:
                | garde_key                   | stage_page  |  
                | FirstYearSecondarySchool    | Secondary   | 


Scenario: Verify enrollment in a class as a new user display a welcome message and localized according to the selected language
        Given I click on "<stage_page>" stage
        And   I click on "<garde_key>" grade
        When   I click on one of the subject 
        And  I set language to "<language>"
        And   I click on the Enrollment link 
        Then  The message "WelcometoNagwaClasses!" will be localized within page title with selected "<language>"
        Examples:
            | garde_key                   | stage_page  |  language|
            | FirstYearSecondarySchool    | Secondary   | English  |
            | FirstYearSecondarySchool    | Secondary   | العربية  |
            | FirstYearSecondarySchool    | Secondary   | Français |


Scenario: Verify changing the language changes the class card elements language
        Given I click on "<stage_page>" stage
        And   I click on "<garde_key>" grade
        And   I click on one of the subject    
        When  I set language to "<language>"
        And   I should see "<garde_key>" and "Egypt" localized within sub title
        And   I should see the below localized under the tutor card
         | card_data              |
         |    NumberofSessions    |
         |     RemainingSeats     |
        And   I should see "Details" within the details link for the selected language
         And   I should see "Enrollment" or "SoldOut" within the enrollment link for the selected language

        Examples:
            | garde_key                   | stage_page  | language |
            | FourthYearPrimarySchool     | Primary     | العربية  |
            | FourthYearPrimarySchool     | Primary     | Français |


Scenario: Verify changing the language changes all header elements language
        Given I click on "<stage_page>" stage
        And   I click on "<garde_key>" grade
        And   I click on one of the subject    
        When  I set language to "<language>"
        Then  I should see "SignUp" within the sign up link for the selected language
        And   I should see "SignIn" within the sign in link for the selected language
        And   I should see "Egypt" as selected country for the selected language
        And   I should see "Wallet" within the wallet link for the selected language
        And    I should see the below grades on the grades bar for the selected language:
            | grade_name  |
            | Primary     |
            | Preparatory |
            | Secondary   |
         Examples:
            | garde_key                   | stage_page  | language |
            | FirstYearPrimarySchool      | Primary     | العربية  |
             | FirstYearSecondarySchool   | Secondary   | Français  |


Scenario: Verify changing the language changes all footer elements language
        Given I click on "<stage_page>" stage
        And   I click on "<garde_key>" grade
        And   I click on one of the subject    
        When  I set language to "<language>"
        And   I should see the below localized under the campany section:
            | page_name          |
            | AboutUs            |
            | ContactUs          |
            | PrivacyPolicy      |
            | TermsAndConditions |
            | Careers            |
        And  I should see the below localized under the content section:
            | page_name     |
            | Courses       |
            | Lessons       |
            | LessonPlans   |
            | Presentations |
            | Videos        |
            | Explainers    |
            | Playlists     |
         Examples:
            | garde_key                   | stage_page  | language |
            | FirstYearPrimarySchool      | Primary     | العربية  |
             | FirstYearSecondarySchool   | Secondary   | Français |


 Scenario Outline:   Verfiy that the user can redirct to subject page
        When  The config language selected from dropDown list
        And   I click on "<stage_page>" stage
        And   I click on "<garde_key>" grade
        And   I click on one of the subject 
        Then  The user should redirect to classes page
        And   I should see "<garde_key>" and "Egypt" within sub title
        Examples:
            | garde_key                   | stage_page  |
            | FirstYearPrimarySchool      | Primary     |
            | SecondYearPrimarySchool     | Primary     |
            | ThirdYearPrimarySchool      | Primary     |
            | FourthYearPrimarySchool     | Primary     |
            | FifthYearPrimarySchool      | Primary     |
            | SixthYearPrimarySchool      | Primary     |
            | FirstYearPreparatorySchool  | Preparatory |
            | SecondYearPreparatorySchool | Preparatory |
            | ThirdYearPreparatorySchool  | Preparatory |
            | FirstYearSecondarySchool    | Secondary   |
            | SecondYearSecondarySchool   | Secondary   |
            | ThirdYearSecondarySchool    | Secondary   |


Scenario: verify header links redirect succssfully
When The config language selected from dropDown list
 And    I click on "<stage_page>" stage
 And    I click on "<garde_key>" grade
 And    I click on one of the subject 
 Then Check Navigation of "Wallet"
 And Check Navigation of "Nagwa" 
 Examples:
            | garde_key                    | stage_page  |
            | FirstYearPrimarySchool       | Primary     |

            
Scenario: verify that footer links redirect successfully 
When The config language selected from dropDown list
 And    I click on "<stage_page>" stage
 And    I click on "<garde_key>" grade
 And    I click on one of the subject 
Then Check Navigation of "AboutUs"
And Check Navigation of "ContactUs" 
And Check Navigation of "PrivacyPolicy" 
And Check Navigation of "TermsAndConditions"
And Check Navigation of "Courses"
And Check Navigation of "Lessons"
And Check Navigation of "LessonPlans"
And Check Navigation of "Presentations"
And Check Navigation of "Videos"
And Check Navigation of "Explainers"
And Check Navigation of "Playlists"
And Check Navigation of "Nagwa" 
 Examples:
            | garde_key                    | stage_page  |
            | FirstYearPrimarySchool       | Primary     |
