import '@testing-library/cypress/add-commands'
import "cypress-real-events/support"

// this code hides our fetches from the cypress log
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
  if (opts.displayName === 'fetch') {
    return
  }
  return origLog(opts, ...other)
}

describe("Pokedex Page", () => {
  before(() => {
    cy.visit("/")
    cy.wait(4000).get('.enter-button').click()
    cy.get('.pokedex-button').click()
  })

  it("should have a back to the pokemans button", ()=>{
    cy.get(".back-to-catching-those-pokemon").should("exist")
    cy.get(".back-to-catching-those-pokemon").should("contain", "Back to the Forest Region")
  })

  it ("should go back to region if go back button is clicked", ()=>{
    cy.get(".back-to-catching-those-pokemon").click()
    cy.url().should('eq', 'http://localhost:3000/forest')
  })

  it("should have have a debug button", ()=>{
    // navigate back to pokedex first
    cy.get('.pokedex-button').click()

    cy.get(".debug").should("exist")
    cy.get(".debug").should("contain", "Debug")
  })

  it("should have non-hidden pokemon once the debug button is clicked", ()=>{
    cy.get(".debug").click()
    cy.get(".pokemon-thumbnail-front").should("exist")
  })

  it("hovering over a pokemon should flip its card", ()=>{
    // initially the front should be visible, and the back should be hidden
    cy.get('.pokemon-thumbnail-front').first().should('be.visible')
    cy.get('.pokemon-thumbnail-back').first().should('not.be.visible')

    cy.wait(500).get('.pokemon-thumbnail-container').first().realHover('mouse')

    // after the hover event triggers, the front should be hidden and the back visible
    cy.get('.pokemon-thumbnail-front').first().should('not.be.visible')
    cy.get('.pokemon-thumbnail-back').first().should('be.visible')
  })
})