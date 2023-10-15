import React from 'react';
import Card from './Card';

describe('Card Component', () => {
    it('should have the correct CSS styles', () => {
        cy.mount(<Card color="gray"><p>Test Content</p></Card>);

        cy.get('[data-testid="test-card"]').invoke('css', 'border-radius').should('eq', '16px');
        cy.get('[data-testid="test-card"]').trigger('mouseover');
        cy.get('[data-testid="test-card"]').should('have.css', 'background-color', 'rgb(250, 250, 250)'); // RGB value of #fafafa
    });
});
