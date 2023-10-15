import React from "react";

describe('Home Page', () => {
    it('should search for a country and display details', () => {
        cy.visit('/');

        cy.get('h1').should('have.text', 'Countries App');

        cy.get('input').type('France');
        cy.get('input').should('have.value', 'France');

        cy.get('button').click();

        cy.get('[data-testid="test-country-details"]').should('exist');
        cy.get('[data-testid="test-country-name"]').should('have.text', 'France');
    });
});
