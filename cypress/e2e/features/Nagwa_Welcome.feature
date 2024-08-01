Feature: Nagwa Welcome Page


    Scenario: Verify changing the country in Welcome page
        Given I open get started page
        When  The config language selected from dropDown list
        And   I set country to "<country>"
        Then  I should see "<country>" as selected country
        And   Welcome page url should contain "<country>"
        Examples:
            | country        |
            | Egypt          |
            | Saudi Arabia   |
            | United States  |
            | United Kingdom | 
            | India          |


    Scenario: Verify that all text displayed correctly on the page banner
        Given I open get started page
        When  The config language selected from dropDown list
        Then  I should see "GetStarted_BannerTitle" on the banner header
        And   I should see "GetStarted_BannerDesc" as the banner text
        And   I should see the below steps on the how-to-steps cards
            |  1  | DownloadSection_Title |
            |  2  | RegisterSection_Title |
            |  3  | WalletSection_Title   |
            |  4  | SessionSection_Title  |


    Scenario: Verify that all text displayed correctly in download section
        Given I open get started page
        When  The config language selected from dropDown list
        Then  I should see "DownloadSection_Title" as Download section title
        And   I should see "DownloadSection_FirstParagraph" as paragraph text        
        And   I should see "DownloadSection_SecondParagraph" as paragraph text
        And   I should see "Download" within the download button
        And   I click on download button
        And   I should see the below options in the download dropdown
            | Windows           |
            | macOSIntel        |
            | macOSAppleSilicon |
            | AppStore          |
            | GooglePlay        |


    Scenario: Verify that all text displayed correctly in register section
        Given I open get started page
        When  The config language selected from dropDown list
        Then  I should see "RegisterSection_Title" as Register section title
        And   I should see "RegisterSection_FirstParagraph" as paragraph text        
        And   I should see "RegisterSection_SecondParagraph" as paragraph text
        And   I should see "View_Classes" as button text


    Scenario: Verify that all text displayed correctly in wallet section
        Given I open get started page
        When  The config language selected from dropDown list
        Then  I should see "WalletSection_Title" as Wallet section title
        And   I should see "WalletSection_FirstParagraph" as paragraph text
        And   I should see "WalletSection_SecondParagraph" as paragraph text
        And   I should see "MyWallet" as button text


    Scenario: Verify that all text displayed correctly in session section
        Given I open get started page 
        When  The config language selected from dropDown list
        Then  I should see "SessionSection_Title" as Session section title
        And   I should see "SessionSection_FirstParagraph" as paragraph text
        And   I should see "SessionSection_SecondParagraph" as paragraph text
        And   I should see "SessionSection_ThirdParagraph" as paragraph text


    Scenario: Verify user can open Wallet page from Welcome page
        Given I open get started page 
        When  The config language selected from dropDown list
        And   I click on my wallet button
        Then  I should see "Wallet" as header text


    Scenario: Verify user can view Classes page from Welcome page
        Given I open get started page 
        When  The config language selected from dropDown list
        And   I click on view classes button
        Then  I should see "HomeLandingBannerTitle" as header text