Feature: Weather Page

  Scenario: Validate weather page
    Given I am on home page 
    When I see "home" tab
    And I see "Mortgage Loan" tab
    When I click on tab "weather"
    And I see label "Weather Forcast"
    And I see label "City"
    And I see input for "City" 
    And I type city "Fremont"
    And I click button "Submit"
    And I should see link "Go Back"
    And I see label "Weather:"
	And I see label "City:"
    And I see label "Today' Date:" with value
    And I see label "Rite now:" with value 
    And I see label "Sun Rise:" with value
    And I see label "Sun Set:" with value
    Then I see about content