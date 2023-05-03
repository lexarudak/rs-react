/// <reference types="cypress" />

describe('Home page', () => {
  it('should visit', () => {
    cy.visit('/');
    cy.get('h1').contains('React Components.');
  });

  it('should have an search input value', () => {
    cy.visit('/');

    cy.get('input').should('have.value', '');
    cy.get('input').type('Rick');
    cy.get('input').should('have.value', 'Rick');
  });

  // it('should have a cart - Doofus ', () => {
  //   cy.visit('/');
  //   cy.get('input').should('have.value', '');
  //   cy.get('input').type('Rick');
  //   cy.get('input').should('have.value', 'Rick');
  //   cy.get('[data-testid="search-form"]').submit();
  //   cy.get('[data-testid="card-title"]').contains('Doofus');
  // });
});
