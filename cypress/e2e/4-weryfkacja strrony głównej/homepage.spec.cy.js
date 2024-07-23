/// <reference types="cypress" />

describe('Weryfikacja strony głównej Sephora', () => {
    it('Powinno załadować stronę główną poprawnie', () => {
        cy.visit('https://www.sephora.pl/');
        cy.get('header').should('be.visible');
        cy.get('footer').should('be.visible');
        cy.get('.main-navigation').should('be.visible');
    });
});