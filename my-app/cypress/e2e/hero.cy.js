describe('Hero Section', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the correct name and title', () => {
    cy.get('section').first().within(() => {
      cy.get('h1').should('contain', 'Dérik Bosing Sehn')
      cy.get('p').should('contain', 'Software Engineer | NextJS Specialist | Cloud Enthusiast')
    })
  })

  it('should have a working CTA button', () => {
    cy.get('section').first().find('button').contains('View My Work').click()
    cy.url().should('include', '#about')
  })

  it('should render the animated waves', () => {
    cy.get('canvas').should('be.visible')
  })

  it('should be responsive', () => {
    cy.viewport('iphone-6')
    cy.get('section').first().should('be.visible')
    cy.get('h1').should('have.css', 'font-size').and('be.lt', '40px')
  })
})

