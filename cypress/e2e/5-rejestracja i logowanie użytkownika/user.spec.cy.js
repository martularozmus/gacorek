/// <reference types="cypress" />

describe('Rejestracja i logowanie użytkownika na Sephora', () => {
    it('Powinno rejestrować nowego użytkownika', () => {
        cy.visit('https://www.sephora.pl/zaloguj');
        cy.get('input[name="dwfrm_crmsephoracard_email"]').type('jan.kowalski@example.com');
        cy.get('button[type="submit"]').click();
        cy.get('.account-dashboard').should('be.visible');
    });

    it('Powinno logować użytkownika', () => {
        cy.visit('https://www.sephora.pl/login');
        cy.get('input[name="email"]').type('jan.kowalski@example.com');
        cy.get('input[name="password"]').type('Test1234!');
        cy.get('button[type="submit"]').click();
        cy.get('.account-dashboard').should('be.visible');
    });
});