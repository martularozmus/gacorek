/// <reference types="cypress" />

describe('Wyszukiwanie produktów na Sephora', () => {
    it('Powinno wyszukiwać produkty poprawnie', () => {
        cy.visit('https://www.sephora.pl/');
        cy.get('input[type="search"]').type('podkład{enter}');
        cy.get('.product-list').should('contain', 'podkład');
    });
});