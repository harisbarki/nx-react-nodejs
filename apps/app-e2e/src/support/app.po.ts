export const getHeaderText = () => cy.get('header');
export const getForm = () => cy.get('#search-bar-form');
export const getSearchBarInput = () => getForm().get('#search-bar-input');
export const getResult = () => cy.get('.result');
export const getErrorMessage = () => cy.get('.errorMessage');
