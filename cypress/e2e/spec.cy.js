describe('header', () => {
  it('displays service name', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('UKHSA Temperature Alerts')
  })
})