import React from 'react'
import { Button } from '../../components/ui/button'
import { mount } from 'cypress/react'

describe('Button Component', () => {
  it('renders with default props', () => {
    mount(<Button>Click me</Button>)
    cy.get('button').should('have.text', 'Click me')
    cy.get('button').should('have.class', 'inline-flex')
  })

  it('renders with custom className', () => {
    mount(<Button className="custom-class">Custom Button</Button>)
    cy.get('button').should('have.class', 'custom-class')
  })

  it('handles click events', () => {
    const onClickSpy = cy.spy().as('onClickSpy')
    mount(<Button onClick={onClickSpy}>Click me</Button>)
    cy.get('button').click()
    cy.get('@onClickSpy').should('have.been.called')
  })

  it('renders different variants', () => {
    mount(<Button variant="outline">Outline Button</Button>)
    cy.get('button').should('have.class', 'border')
  })

  it('renders different sizes', () => {
    mount(<Button size="lg">Large Button</Button>)
    cy.get('button').should('have.class', 'px-6')
  })
})

