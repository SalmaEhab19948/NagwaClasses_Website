Feature: Nagwa Homepage

    Background: navigate to nagwa web site
        When I open the nagwa web site

    Scenario:   Verfiy that all text dispalyed correctly on the page header
        Given  The config language selected from dropDown list
        Then   I should see "SignUp" within the sign up link
        And    I should see "SignIn" within the sign in link
        And    I should see the right language
        And    I should see "Egypt" as selected country
        And    I should see the below grades on the grades bar:
            | grade_name  |
            | Primary     |
            | Preparatory |
            | Secondary   |
        And   I should see "Wallet" within the wallet link



    Scenario:  Verfiy that all text dispalyed correctly on the page banner
        When   The config language selected from dropDown list
         Then I should see "HomeLandingBannerTitle" on the banner title
        And I should see "HomeLandingBannerDesc" on the banner descrbtion
        And I should see "SignUp" within the sign up button
        And I should see "SignIn" within the sign in button

      

    Scenario:  Verfiy that all text dispalyed correctly on the page footer
        When  The config language selected from dropDown list
        Then I should see "NagwaClassesApp" on the app banner title
        And I should see "NagwaClassesAppDetails" on the app banner details
        And I should see "DownloadDesktop" on the download options desktop
        And I should see "NagwaMission" within the nagwa mission
        And I should see "FooterCompany" within the footer campany
        And  I should see the below under the campany section:
            | page_name          |
            | AboutUs            |
            | ContactUs          |
            | PrivacyPolicy      |
            | TermsAndConditions |
            | Careers            |
        And I should see "Content" within the footer Content
        And  I should see the below under the content section:
            | page_name     |
            | Courses       |
            | Lessons       |
            | LessonPlans         |
            | Presentations |
            | Videos        |
            | Explainers    |
            | Playlists     |


Scenario Outline: Verfiy that the system rediect to the stage page when open it from grade cards
        Given  The config language selected from dropDown list
        And   click on "<stage_name>" from grade cards
        Then  The stage page url shoudl be conatins "<stage_name>" with right formate
        And I should see "<stage_name>" within the grade card title
        Examples:
            | stage_name  |
            | Primary     |
            | Preparatory |
            | Secondary   |

     Scenario Outline: Verfiy that the system rediect to the grades page when open it from grade cards
        Given The config language selected from dropDown list
        And I click on "<garde_key>" grade
        Then  The url shoudl be conatins "<stage_page>" and "<grade_number>" with right formate
        And I should see "<garde_key>" within the page card title
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














