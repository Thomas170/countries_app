import React from 'react';
import Input from './Input';

describe('Input Component', () => {
    it('should have the correct placeholder', () => {
        cy.mount(<Input placeholder="Type here" changeValue={() => {}} />);

        cy.get('input').should('have.attr', 'placeholder', 'Type here');
    });

    it('should call changeValue when input value changes', () => {
        const changeValueSpy = cy.spy();

        cy.mount(<Input placeholder="Type here" changeValue={changeValueSpy} />);

        cy.get('input').type('Cypress Test Text');
        cy.wrap(changeValueSpy).should('have.been.calledWith', 'Cypress Test Text');
    });
});
