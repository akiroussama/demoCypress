
/// <reference types="Cypress" />    
describe('Click an element, and test if it exist before', () => {
    before(function () {
        // runs once before the first test in this block
        cy.visit(Cypress.env('baseUrl'));
    });

    it('debug !', () => {
       // Debugger is hit after the cy.visit
      // and cy.get command have completed
      debugger
      cy.getByTestId('add-todo-button').debug()
    })

      it('pause !', () => {
       // Debugger is hit after the cy.visit
    // and cy.get command have completed
      cy.getByTestId('add-todo-button').pause()
    })
})