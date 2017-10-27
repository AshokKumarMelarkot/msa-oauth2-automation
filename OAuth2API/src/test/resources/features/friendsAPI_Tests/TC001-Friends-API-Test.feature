@AshokTest
Feature: API test to test OAuth2


  Scenario Outline:  Basic test to read the resources with OAuth2 request

    Given  Call resources end point and it should contain <name> name
    Examples:
      | name |
      | john |

