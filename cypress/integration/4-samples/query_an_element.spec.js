describe('Sanity check test', () => {
  it('finds the content "Daily"', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Daily')
  })
})