describe('Skills Section', () => {
  beforeEach(() => {
    cy.visit('/#skills')
  })

  it('should display the skills section', () => {
    cy.get('section#skills').should('be.visible')
    cy.get('section#skills h2').should('contain', 'Skills')
  })

  it('should display technical skills', () => {
    cy.get('section#skills').contains('h3', 'Technical Skills').should('be.visible')
    cy.get('section#skills').contains('NextJS').should('be.visible')
    cy.get('section#skills').contains('React').should('be.visible')
  })

  it('should display soft skills', () => {
    cy.get('section#skills').contains('h3', 'Soft Skills').should('be.visible')
    cy.get('section#skills').contains('Committed').should('be.visible')
    cy.get('section#skills').contains('Adaptability').should('be.visible')
  })

  it('should be responsive', () => {
    cy.viewport('iphone-6')
    cy.get('section#skills').should('be.visible')
    cy.get('section#skills > div > div').should('have.css', 'flex-direction', 'column')
  })
})

