describe('Header', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the logo', () => {
    cy.get('header').find('h1').should('contain', 'DS')
  })

  it('should have working navigation links', () => {
    cy.get('header nav').find('a').should('have.length', 5)
    cy.get('header nav a').each(($el) => {
      cy.wrap($el).click()
      cy.url().should('include', $el.attr('href'))
    })
  })

  it('should have a working theme toggle', () => {
    cy.get('html').should('not.have.class', 'dark')
    cy.get('header button[aria-label="Toggle theme"]').click()
    cy.get('html').should('have.class', 'dark')
    cy.get('header button[aria-label="Toggle theme"]').click()
    cy.get('html').should('not.have.class', 'dark')
  })

  it('should be responsive', () => {
    cy.viewport('iphone-6')
    cy.get('header nav').should('not.be.visible')
    cy.get('header button[aria-label="Open menu"]').should('be.visible').click()
    cy.get('[role="dialog"]').should('be.visible')
    cy.get('[role="dialog"] a').should('have.length', 5)
  })
})

