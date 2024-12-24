describe('Experience Section', () => {
  beforeEach(() => {
    cy.visit('/#experience')
  })

  it('should display the experience section', () => {
    cy.get('section#experience').should('be.visible')
    cy.get('section#experience h2').should('contain', 'Work Experience')
  })

  it('should display job experiences', () => {
    cy.get('section#experience').within(() => {
      cy.contains('Autonomous Front-end Developer').should('be.visible')
      cy.contains('Junior Front-end Developer').should('be.visible')
      cy.contains('Grafic Design Trainee').should('be.visible')
      cy.contains('IT Trainee and Project Leader').should('be.visible')
    })
  })

  it('should display job details', () => {
    cy.contains('Autonomous Front-end Developer').click()
    cy.contains('DevSehn - 03/2024 - now').should('be.visible')
    cy.contains('I created an open source web application called devsehn_saas').should('be.visible')
  })

  it('should be responsive', () => {
    cy.viewport('iphone-6')
    cy.get('section#experience').should('be.visible')
    cy.get('section#experience > div > div').should('have.css', 'flex-direction', 'column')
  })
})

