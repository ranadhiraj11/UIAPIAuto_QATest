import { pageElements } from '../fixtures/pageElements'

describe('Service NSW Automation', function () {

  before(function () {
    cy.fixture('testData.json').as('testData') 
  })

  beforeEach(function () {
    cy.visit("/")
  })

  context("UI Test Scenarios", function () {
    it('Search service', function () {

      // clear the search text box
      cy.get(pageElements.homePage.servicesearchbox).clear()
        // enter the search service
        .get(pageElements.homePage.servicesearchbox).type(this.testData.TC_Searchservice.searchservice)
        // click search
        .get(pageElements.homePage.servicesearchbtn).click()
      // validate hyperlink
      cy.get('a').contains(this.testData.TC_Searchservice.searchservice).should('have.attr', 'href')

    })
    it('Search Suburb', function () {
      // click the link 
      cy.contains(this.testData.TC_Searchlocation.searchlink).click({ force: true })
        // clear the search text box     
        .get(pageElements.findlocationPage.locationsearchbox).clear()
        // enter the suburb
        .get(pageElements.findlocationPage.locationsearchbox).type(this.testData.TC_Searchlocation.suburb)
        // click search
        .get(pageElements.findlocationPage.searchbtn).click()
      // validate desired suburb exists
      cy.contains(this.testData.TC_Searchlocation.searchtxt).should('exist')

    })
  })
})