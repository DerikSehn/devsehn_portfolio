describe('About Section', () => {
  beforeEach(() => {
    cy.visit('/#about')
  })

  it('should display the about section', () => {
    cy.get('section#about').should('be.visible')
    cy.get('section#about h2').should('contain', 'About Me')
  })

  it('should contain the correct information', () => {
    cy.get('section#about p').should('contain', 'Software engineer with 3 years of experience')
  })

  it('should be responsive', () => {
    cy.viewport('iphone-6')
    cy.get('section#about').should('be.visible')
    cy.get('section#about p').should('have.css', 'font-size').and('be.lt', '20px')
  })
})

