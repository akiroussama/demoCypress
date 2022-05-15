describe('Bookstore Application', () => {
  beforeEach('Login', () => {
    cy.authenticate(user);
  });
  
  specify('As a user, I should be able to add a book to my profile', () => {
    cy.intercept('https://www.demoqa.com/BookStore/v1/Books').as('booksRequest');
    
    cy.visit('https://www.demoqa.com/books');
  });
});