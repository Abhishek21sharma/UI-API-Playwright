@cart_bdd
Feature: Add to Cart
 
Scenario: Add to cart 'zara coat 3' and logout after verifying the cart
Given User logged in to application
When I click on "zara coat 3" to the cart
Then the cart details should be updated