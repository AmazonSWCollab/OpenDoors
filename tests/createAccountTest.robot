*** Settings ***
Documentation     Simple example using SeleniumLibrary.
Library           SeleniumLibrary

*** Variables ***
${LOGIN URL}      http://localhost:3000/OpenDoors
${BROWSER}        Chrome
${CHROMEDRIVER_PATH}        /opt/odoo15/chromedriver

*** Test Cases ***

My create an account test case
    I want to open the OpenDoors login page
    Sleep    3s
    I click Sign Up
    Sleep    5s
    I click Create a User Account
    Sleep    5s
    Input my firstName    Cesar
    Sleep    3s
    Input my lastName    Gutierrez
    Sleep    3s
    Input my email    fake@gmail.com
    Sleep    3s
    Input my zipcode    00000
    Sleep    3s
    Input my password    1234
    Sleep    3s
    Submit my credentials
    Sleep    3s
    I should see Account Created Successfully
    Sleep    5s
    [Teardown]    Close Browser

*** Keywords ***

I want to open the OpenDoors login page
    ${chrome_options}=  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys, selenium.webdriver
    Call Method    ${chrome_options}    add_argument    --no-sandbox
    Call Method    ${chrome_options}    add_argument    --disable-dev-shm-usage
    Call Method    ${chrome_options}    add_argument    --start-maximized
    Open Browser    ${LOGIN URl}    chrome    options=${chrome_options}      executable_path=${CHROMEDRIVER_PATH}
    Title Should Be    OpenDoors

I click Sign Up
    Click Element       //*[contains(text(),'Sign Up')]

I click Create a User Account
    Click Element       //*[contains(text(),'Create a User Account')]

Input my firstName
    [Arguments]    ${firstName}
    Input Text    First Name:    ${firstName}

Input my lastName
    [Arguments]    ${lastName}
    Input Text    Last Name:    ${lastName}

Input my email
    [Arguments]    ${email}
    Input Text    Email:    ${email}

Input my zipcode
    [Arguments]    ${zipcode}
    Input Text    Zipcode:    ${zipcode}

Input my password
    [Arguments]    ${password}
    Input Text    Password:    ${password}

Submit my credentials
    Click Element       //*[contains(text(),'Submit')]

I should see Account Created Successfully
    Page Should Contain Button       //*[contains(text(),'Account Created Successfully')]
