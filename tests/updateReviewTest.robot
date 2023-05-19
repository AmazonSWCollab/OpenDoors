*** Settings ***
Documentation     Simple example using SeleniumLibrary.
Library           SeleniumLibrary

*** Variables ***
${LOGIN URL}      http://localhost:3000/OpenDoors
${BROWSER}        Chrome
${CHROMEDRIVER_PATH}        /opt/odoo15/chromedriver

*** Test Cases ***

My update a review test case
    I want to open the OpenDoors login page
    Sleep    3s
    I click Review
    Sleep    5s
    I click a restaurant to review
    Sleep    5s
    I click edit a review
    Sleep    5s
    Input my updated review    Place is not very safe.
    Sleep    3s
    Submit
    Sleep    3s
    I should see You submitted successfully!
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

I click Review
    Click Element       //*[contains(text(),'Review')]

I click restaurant to review
    Click Element       //*[contains(text(),'View Reviews')]

I click edit a review
    Click Element       //*[contains(text(),'Edit')]

Input my updated review
    [Arguments]    ${review}
    Input Text    Create Review    ${review}

Submit
    Click Element       //*[contains(text(),'Submit')]

I should see You submitted successfully!
    Page Should Contain Button       //*[contains(text(),'You submitted successfully!')]
