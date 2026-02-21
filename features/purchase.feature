Feature: End-to-End Purchase Flow

  @smoke
  Scenario: Successful purchase of a single product
    Given I am on the login page
    When I login as a standard user
    And I add "Sauce Labs Backpack" to the cart
    And I checkout with valid customer details
    Then I should see the order confirmation page