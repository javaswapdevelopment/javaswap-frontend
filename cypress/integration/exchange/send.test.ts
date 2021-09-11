describe('Send', () => {
  it('should redirect', () => {
    cy.visit('/send')
    cy.url().should('include', '/swap')
  })

  it('should redirect with url params', () => {
    cy.visit(
      '/send?inputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&outputCurrency=0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5',
    )
    cy.url().should(
      'contain',
      '/swap?inputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&outputCurrency=0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5',
    )
  })
})
