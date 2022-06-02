import '@testing-library/cypress/add-commands'

// this code hides our fetches from the cypress log
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
  if (opts.displayName === 'fetch') {
    return
  }
  return origLog(opts, ...other)
}

describe("Landing Page", () => {
  before(() => {
    cy.visit("/")
  })

  it("should display a container for the logo", () => {
    cy.get('.logo-container').should('exist')
  })

  it("should display img element with the Pokemon logo", () => {
    cy.get('.logo').should('exist')
  })

  it("should display text element with the words 'HUNT'", () => {
    cy.get('.logo-container').should('exist')
    cy.get('.logo-container').should('contain', 'HUNT')
  })

  it("should display an enter button", () => {
    cy.get('.enter-button').should('exist')
  })

  it("should not let you enter while still loading", () => {
    cy.get('.enter-button').click({force: true})
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it("should let you enter once the data is loaded", () => {
    cy.wait(500).get('.enter-button').click()
    cy.url().should('eq', 'http://localhost:3000/forest')
  })

})

// it("should display a container for the logo", () => {
//   cy.findByRole('heading').should('contain', 'GMDB')
// })

// it("should display a search input", () => {
//   cy.findByRole('textbox').should('exist')// cypress textbox === html input
// })
// it("should contain a search button",()=>{
//   cy.findByRole("button").should('exist')
// })
// //cy.findByRole('').should('', '')
// it("should contain a movie list component",()=>{
//   cy.get('.movie-list').should('exist')
//     //to find this compent add this line of code to it
//     //<input className="movie-list" />
// })

// it("can click on a movie component to go to the details page for that movie", () => {
//   cy.get('img[id="Guardians of the Galaxy Vol. 2"]').click()
//   cy.url().should('eq', 'http://localhost:3000/movie/1')
// })