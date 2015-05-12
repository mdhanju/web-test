Feature: Currency Convertor

  Given I am on home page 
    When I see "home" tab
    And I see "Currency Converter" tab
    When I click on tab "Currency Converter"
    And I see label "Currency Converter"
    And I see label "From:"
    And I see select with placeholder "Select Country : "
    And I see label "To:"
    And I see select with placeholder "Select Country : "
    And I select "US Dollar" in from select
    And I select "Indian Rupee" in to select
    And I see conversion rate