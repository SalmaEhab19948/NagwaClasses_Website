Feature: The Banner

Background: navigate to nagwa web site
                When I open the nagwa web site



Scenario: Verify changing the language changes the banner elements language
        Given I set language to "<language>"
        Then  I should see "NagwaClassesApp" as the banner header
        And   I should see "NagwaClassesAppDetails" as the banner details
        And   I should see the below localized under the app features
                | card_data              |
                | InteractiveSessions    |
                | Chat&Messaging         |
                | RealisticExamQuestions |                
        And  I should see "DownloadDesktop" button in the banner
        And  I should see "ViewAllClasses" link in the banner
        Examples:
                | language |
                | العربية  |
                | Français |
                | English  |


Scenario: Verify that each element in the download dropdown include the correct link to download a desktop version for each operating system
        Given I click on Download for desktop button in the banner
        Then I should validate there are links for each operating system to download the application


Scenario: Verify click on view all classes will redirect to
        Given I set language to "<language>"
        And I click on View All Classes
        Then I should be redirected to the Nagwa Classes homepage with the selected  "<language>" in the URL
        Examples:
                | language |
                | العربية  |
                | Français |
                | English |

                
Scenario: Verify that the icons of each store will redirect to the desktop application link on this store
        Then I should validate the redirection to the following storlink
                | store_link   |
                | app_store    |
                | google_store |
                | app_gallery  |
                       
