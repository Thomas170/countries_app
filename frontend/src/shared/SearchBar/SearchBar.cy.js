import React from 'react';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
    it('should render Input and Button components with the correct props', () => {
        const placeholder = 'Search something';
        let searchClicked = false;

        cy.mount(
            <SearchBar
                placeholder={placeholder}
                changeValue={() => {}}
                search={() => {
                    searchClicked = true;
                }}
            />
        );

        cy.get('input').should('have.attr', 'placeholder', placeholder);

        cy.get('button').should('have.text', 'Search');

        cy.get('input').type('Cypress Test Text');
        cy.get('button').click().should(() => {
            expect(searchClicked).to.be.true;
        });

        cy.get('input').should('have.value', 'Cypress Test Text');
    });
});
