import { Given, When, And } from 'cypress-cucumber-preprocessor/steps';

Given('I open the website', () => {

  cy.visit('https://github.com/login'); // Replace with your website URL

});

When('I enter my username {string} and password {string}', (username, password) => {

  cy.get('input[name="login"]').type(username);

  cy.get('input[name="password"]').type(password);

});

And('I click the login button', () => {

  cy.get('input[name="commit"]').click();

});