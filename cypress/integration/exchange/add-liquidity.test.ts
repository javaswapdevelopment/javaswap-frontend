describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'JAVA')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'USDC')
  })

  it('loads the MATIC and tokens', () => {
    cy.visit('/add/MATIC/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'MATIC')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'JAVA')
  })

  it('loads the WMATIC and tokens', () => {
    cy.visit('/add/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'WMATIC')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'JAVA')
  })

  it('does not crash if MATIC is duplicated', () => {
    cy.visit('/add/MATIC/MATIC')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'MATIC')
    cy.get('#add-liquidity-input-tokenb').should('not.contain.text', 'MATIC')
  })

  it('does not crash if address is duplicated', () => {
    cy.visit('/add/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'JAVA')
    cy.get('#add-liquidity-input-tokenb').should('not.contain.text', 'JAVA')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'QUACK')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'JAVA')
  })

  it('single token can be selected', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'QUACK')
    cy.visit('/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'USDC')
    cy.visit('/add/MATIC')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'MATIC')
  })

  it('redirects /add/token-token to add/token/token', () => {
    cy.visit('/add/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5-0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174')
    cy.url().should(
      'contain',
      '/add/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    )
  })

  it('redirects /add/MATIC-token to /add/MATIC/token', () => {
    cy.visit('/add/MATIC-0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5')
    cy.url().should('contain', '/add/MATIC/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5')
  })

  it('redirects /add/token-MATIC to /add/token/MATIC', () => {
    cy.visit('/add/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5-MATIC')
    cy.url().should('contain', '/add/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5/MATIC')
  })

  it('redirects /add/WMATIC to /add/WMATIC/token', () => {
    cy.visit('/add/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270-0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5')
    cy.url().should(
      'contain',
      '/add/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5',
    )
  })

  it('redirects /add/token-WMATIC to /add/token/WMATIC', () => {
    cy.visit('/add/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5-0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270')
    cy.url().should(
      'contain',
      '/add/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    )
  })
})
