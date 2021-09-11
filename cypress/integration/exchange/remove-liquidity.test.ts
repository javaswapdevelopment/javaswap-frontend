describe('Remove Liquidity', () => {
  it('redirects from address-address to address/address', () => {
    cy.visit('/remove/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5-0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174')
    cy.url().should(
      'contain',
      '/remove/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    )
  })

  it('matic-java remove', () => {
    cy.visit('/remove/MATIC/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MATIC')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'JAVA')
  })

  it('java-matic remove', () => {
    cy.visit('/remove/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5/MATIC')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'JAVA')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MATIC')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'JAVA')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BUSD')
  })

  it('does not crash if MATIC is duplicated', () => {
    cy.visit('/remove/MATIC/MATIC')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MATIC')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MATIC')
  })

  it('does not crash if token is duplicated', () => {
    cy.visit('/remove/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'JAVA')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'JAVA')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'QUACK')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'JAVA')
  })
})
