Feature: Login Validation

  Scenario: Invalid login shows error
    Given I am on the login page
    When I attempt login with invalid credentials
    Then I should see an authentication error message