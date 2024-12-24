describe('Education Section', () => {
  beforeEach(() => {
    cy.visit('/#education')
  })

  it('should display the education section', () => {
    cy.get('section#education').should('be.visible')
    cy.get('section#education h2').should('contain', 'Education')
  })

  it('should display education details', () => {
    cy.get('section#education').within(() => {
      cy.contains("Bachelor's degree, Computer Science").should('be.visible')
      cy.contains('UniRitter').should('be.visible')
      cy.contains('2023 - 2025').should('be.visible')
    })
  })

  it('should display courses and certifications', () => {
    cy.get('section#education').within(() => {
      cy.contains('Courses and Certifications').should('be.visible')
      cy.contains('Rocketseat, React Advanced Concepts, 2023').should('be.visible')
      cy.contains('Next.js ORG, Best Practices Course, 2024').should('be.visible')
    })
  })

  it('should be responsive', () => {
    cy.viewport('iphone-6')
    cy.get('section#education').should('be.visible')
    cy.get('section#education > div > div').should('have.css', 'flex-direction', 'column')
  })
})

