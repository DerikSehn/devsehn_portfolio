describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('/#contact')
  })

  it('should display the contact form', () => {
    cy.get('form').within(() => {
      cy.get('input[name="name"]').should('be.visible')
      cy.get('input[name="email"]').should('be.visible')
      cy.get('textarea[name="message"]').should('be.visible')
      cy.get('button[type="submit"]').should('contain', 'Send Message')
    })
  })

  it('should display error messages for invalid inputs', () => {
    cy.get('form').within(() => {
      cy.get('button[type="submit"]').click()
      cy.get('input[name="name"]').should('have.attr', 'aria-invalid', 'true')
      cy.get('input[name="email"]').should('have.attr', 'aria-invalid', 'true')
      cy.get('textarea[name="message"]').should('have.attr', 'aria-invalid', 'true')
    })
  })

  it('should submit the form with valid inputs', () => {
    cy.get('form').within(() => {
      cy.get('input[name="name"]').type('John Doe')
      cy.get('input[name="email"]').type('john@example.com')
      cy.get('textarea[name="message"]').type('This is a test message')
      cy.get('button[type="submit"]').click()
      cy.contains('Message sent successfully!').should('be.visible')
    })
  })

  it('should display contact information', () => {
    cy.contains('Contact Information').should('be.visible')
    cy.contains('derikbosing@gmail.com').should('be.visible')
    cy.contains('+55 51 999300707').should('be.visible')
    cy.contains('LinkedIn Profile').should('have.attr', 'href', 'https://www.linkedin.com/in/derik-sehn/')
    cy.contains('GitHub Profile').should('have.attr', 'href', 'https://github.com/DerikSehn')
  })

  it('should be responsive', () => {
    cy.viewport('iphone-6')
    cy.get('section#contact').should('be.visible')
    cy.get('section#contact > div > div').should('have.css', 'flex-direction', 'column')
  })
})

