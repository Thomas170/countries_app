import React from 'react';
import Button from './Button';

describe('Button Component', () => {
    it('Button should have "Click Me" name and the main color', () => {
        cy.mount(<Button value='Click Me' color='main' />);

        cy.get('button').should('have.text', 'Click Me');
        cy.get('button').invoke('css', 'background-color').should('eq', 'rgb(225, 91, 214)');
    });

    it('should call action when button is clicked', () => {
        const onChangeSpy = cy.spy().as('onChangeSpy');

        cy.mount(<Button action={onChangeSpy} />);

        cy.get('button').click();
        cy.get('@onChangeSpy').should('have.been.calledWith');
    });
});
