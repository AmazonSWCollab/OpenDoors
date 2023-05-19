*** Settings ***
Documentation     Simple example using SeleniumLibrary.
Library           SeleniumLibrary

*** Variables ***
${LOGIN URL}      http://localhost:3000/OpenDoors
${BROWSER}        Chrome
${CHROMEDRIVER_PATH}        /opt/odoo15/chromedriver

*** Test Cases ***

My log into account test case
    I want to open the OpenDoors login page
    Sleep    3s
    I click Log In
    Sleep    5s
    Input my username    Cesar
    Sleep    3s
    Input my password    1234
    Sleep    3s
    Submit my credentials
    Sleep    3s
    I should be redirected to Home Page
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

I click Log In
    Click Element       //*[contains(text(),'Log In')]

Input my username
    [Arguments]    ${username}
    Input Text    Username:    ${username}

Input my password
    [Arguments]    ${password}
    Input Text    Password:    ${password}

Submit my credentials
    Click Element       //*[contains(text(),'Log In')]

I should be redirected to Home Page
    Page Should Contain Button       //*[contains(text(),'Opening Doors for Equal Accessibility')]
