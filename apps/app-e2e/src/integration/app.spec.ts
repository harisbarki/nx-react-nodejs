import {
  getHeaderText,
  getSearchBarInput,
  getForm,
  getResult,
  getErrorMessage,
} from '../support/app.po';

describe('app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display header text', () => {
    getHeaderText().contains('Boilerplate');
  });

  it('should submit form and show results', () => {
    cy.intercept('GET', '**', { fixture: 'prime.json' }).as('getPrimeMedian');
    getSearchBarInput().clear().type('10000', { delay: 100 });

    getForm().submit().next();
    cy.wait('@getPrimeMedian');

    getResult().contains('4523');
  });

  it('should submit form and show error div', () => {
    cy.intercept('GET', '**', {
      statusCode: 400,
      fixture: 'errorMessage.json',
    }).as('getPrimeMedian');

    getSearchBarInput().clear().type('1', { delay: 200 });

    getForm().submit().next();
    cy.wait('@getPrimeMedian');

    getErrorMessage().contains('Please enter an integer greater than two.');
  });
});
