
describe('Click an element, and test if it exist before', () => {
     // setup these constants to match what TodoMVC does
  let TODO_ITEM_ONE = 'buy some cheese'
  let TODO_ITEM_TWO = 'feed the cat'
  let TODO_ITEM_THREE = 'book a doctors appointment'
    before(function () {
        // runs once before the first test in this block
        cy.visit(Cypress.env('baseUrl'));
    });

    it('type value, check and add it', () => {
        // Add 3 todos
        cy.getByTestId('add-todo-input').type(TODO_ITEM_ONE).should('have.value', TODO_ITEM_ONE);
        cy.getByTestId('add-todo-button').click();
        cy.getByTestId('add-todo-input').type('Write tests').should('have.value', 'Write tests');
        cy.getByTestId('add-todo-button').click();
        cy.getByTestId('add-todo-input').type('Be happy').should('have.value', 'Be happy');
        cy.getByTestId('add-todo-button').click();

        // Should have 3 todos
        cy.getByTestId('todo').should('have.length', 3);
    })
})