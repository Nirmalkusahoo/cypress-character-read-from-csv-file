// File Path: here inside require the path should your fixtures directory path
const testData = require('../fixtures/testData.json');

describe('CSV Data read tests', () => {
  before(() => {
    // cy.run();
    cy.visit('https://www.google.com/');
  });
  testData.forEach((data) => {
    context(`Test for ${data.key}: ${data.value}`, () => {
      it('should be able to search', () => {
        cy.get('.gLFyf').type(data.value).type('{enter}');
        cy.url().should('include', 'search');
      });
    });
  });
});
