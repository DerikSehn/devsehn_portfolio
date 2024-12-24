import React from 'react'
import { Input } from '../../components/ui/input'
import { mount } from 'cypress/react'

describe('Input Component', () => {
  it('renders with default props', () => {
    mount(<Input />)
    cy.get('input').should('have.class', 'flex')
  })

  it('renders with custom className', () => {
    mount(<Input className="custom-class" />)
    cy.get('input').should('have.class', 'custom-class')
  })

  it('handles input changes', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    mount(<Input onChange={onChangeSpy} />)
    cy.get('input').type('Hello')
    cy.get('@onChangeSpy').should('have.been.called')
  })

  it('renders with placeholder', () => {
    mount(<Input placeholder="Enter text" />)
    cy.get('input').should('have.attr', 'placeholder', 'Enter text')
  })

  it('renders as disabled', () => {
    mount(<Input disabled />)
    cy.get('input').should('be.disabled')
  })
})

