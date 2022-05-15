describe('Click an element, and test if it exist before', () => {
    before(function () {
        // runs once before the first test in this block
        cy.visit(Cypress.env('baseUrl'));
    });

    it('clicks the link "type"', () => {
        cy.getByTestId('add-todo-button').should('exist').click();
    })
})