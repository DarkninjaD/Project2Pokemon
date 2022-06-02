import '@testing-library/cypress/add-commands'

// this code hides our fetches from the cypress log
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
  if (opts.displayName === 'fetch') {
    return
  }
  return origLog(opts, ...other)
}

describe("Region Page", () => {
  before(() => {
    cy.visit("/")
    cy.wait(4000).get('.enter-button').click()
  })

  it("should display buttons for the regions", () => {
    cy.get('.btn-forest').should('exist')
    cy.get('.btn-forest').should('contain', 'Forest Region')

    cy.get('.btn-town').should('exist')
    cy.get('.btn-town').should('contain', 'Town Region')

    cy.get('.btn-water').should('exist')
    cy.get('.btn-water').should('contain', 'Water Region')

    cy.get('.btn-rock').should('exist')
    cy.get('.btn-rock').should('contain', 'Rock Region')

    cy.get('.btn-gym').should('exist')
    cy.get('.btn-gym').should('contain', 'The Gym')

    cy.get('.btn-spooky').should('exist')
    cy.get('.btn-spooky').should('contain', 'Spooky Region')

    cy.get('.btn-volcano').should('exist')
    cy.get('.btn-volcano').should('contain', 'Volcano Region')
  })

  it("should navigate to a region when the button is clicked", () => {
    cy.get('.btn-town').click()
    cy.url().should('eq', 'http://localhost:3000/town')

    cy.get('.btn-water').click()
    cy.url().should('eq', 'http://localhost:3000/water')

    cy.get('.btn-rock').click()
    cy.url().should('eq', 'http://localhost:3000/rock')

    cy.get('.btn-gym').click()
    cy.url().should('eq', 'http://localhost:3000/gym')

    cy.get('.btn-spooky').click()
    cy.url().should('eq', 'http://localhost:3000/spooky')

    cy.get('.btn-volcano').click()
    cy.url().should('eq', 'http://localhost:3000/volcano')
  })

  it("should display a button for the pokedex", () => {
    cy.get('.pokedex-button').should('exist')
    cy.get('.pokedex-button').should('contain', 'Pokedex')
  })

  it("should send you to the pokedex when pokedex button is clicked", () => {
    cy.get('.pokedex-button').click()
    cy.url().should('eq', 'http://localhost:3000/pokedex')
  })

  it("should be able to click on a pokemon", () => {
    cy.get('.back-to-catching-those-pokemon').click()
    cy.get('.animations').first().then(($span) => {
      return $span[0].id
    }).then(id => {
      cy.get('.animations').first().click()
      cy.get('.pokedex-button').click()
      cy.get('.pokemon-thumbnail-front').first().invoke('attr', 'id').should('contain', id)
    })
    // cy.get('.animations').first().click()
    // console.log(test.id);
  })

})