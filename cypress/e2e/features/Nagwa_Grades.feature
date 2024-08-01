Feature: Nagwa Homepage

    Background: navigate to nagwa web site
        When I open the nagwa web site

    Scenario Outline: Verfiy that all text dispalyed correctly on the page header
        Given  The config language selected from dropDown list
        And    I click on "<stage_page>" stage
        And    I click on "<garde_key>" grade
        Then   The url shoudl be conatins "<stage_page>" and "<grade_number>" with right formate
        And    I should see "<garde_key>" within the page card title
        Then   I should see "SignUp" within the sign up link
        And    I should see "SignIn" within the sign in link
        And    I should see the right language
        And    I should see "Egypt" as selected country
        And    I should see the below grades on the grades bar:
            | grade_name  |
            | Primary     |
            | Preparatory |
            | Secondary   |
        And    I should see "Wallet" within the wallet link
        Examples:
            | garde_key                   | grade_number | stage_page  |
            | FirstYearPrimarySchool      | 1            | Primary     |
            | SecondYearPrimarySchool     | 2            | Primary     |
            | ThirdYearPrimarySchool      | 3            | Primary     |
            | FourthYearPrimarySchool     | 4            | Primary     |
            | FifthYearPrimarySchool      | 5            | Primary     |
            | SixthYearPrimarySchool      | 6            | Primary     |
            | FirstYearPreparatorySchool  | 7            | Preparatory |
            | SecondYearPreparatorySchool | 8            | Preparatory |
            | ThirdYearPreparatorySchool  | 9            | Preparatory |
            | FirstYearSecondarySchool    | 10           | Secondary   |
            | SecondYearSecondarySchool   | 11           | Secondary   |
            | ThirdYearSecondarySchool    | 12           | Secondary   |


    Scenario Outline:   Verfiy that all text dispalyed correctly on the page footer
        When  The config language selected from dropDown list
        And   I click on "<stage_page>" stage
        And   I click on "<garde_key>" grade
        Then  I should see "NagwaClassesApp" on the app banner title
        And   I should see "NagwaClassesAppDetails" on the app banner details
        And   I should see "DownloadDesktop" on the download options desktop
        And   I should see "NagwaMission" within the nagwa mission
        And   I should see "FooterCompany" within the footer campany
        And   I should see the below under the campany section:
            | page_name          |
            | AboutUs            |
            | ContactUs          |
            | PrivacyPolicy      |
            | TermsAndConditions |
            | Careers            |
        And  I should see "Content" within the footer Content
        And  I should see the below under the content section:
            | page_name     |
            | Courses       |
            | Lessons       |
            | LessonPlans         |
            | Presentations |
            | Videos        |
            | Explainers    |
            | Playlists     |
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

    Scenario Outline:   Verfiy that user back to home page when clcik on the logo nagwa
        When  The config language selected from dropDown list
        And   I click on "<stage_page>" stage
        And   I click on "<garde_key>" grade
        And   I click on nagwa logo
        Then  I should redirect to the home page 
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
Then Check Navigation of "Wallet"
And Check Navigation of "Nagwa" 

Scenario: verify that footer links redirect successfully 
When The config language selected from dropDown list
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








