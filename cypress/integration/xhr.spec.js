describe('Weather', function () {

  before(function () {
    cy.fixture('testData.json').as('testData')
  })

  context("API Test Scenarios", function () {
    it('GET Current Weather update', function () {

      var apiBaseUrl = Cypress.env('apiURL') + '/current?lat=' + this.testData.api.lat + '&lon=' + this.testData.api.lon + '&key=' + Cypress.env('apiKey')
      cy.log(apiBaseUrl)

      cy.request({
        method: 'GET',
        url: apiBaseUrl
      }).as('apiResponse')

      cy.get('@apiResponse').its('body.data').then(user => {

      })

      cy.get('@apiResponse').then(function (response) {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('data')

        const target = (response.body)

        cy.wrap(target.data[0]).its('state_code').then(stateCode => {
          cy.log('State code is ' + stateCode)


        })
      })
    })

    it('GET Weather forecast by hour and postal code', function () {

      var apiBaseUrl = Cypress.env('apiURL') + '/forecast/hourly?postal_code=' + this.testData.api.postal_code + '&key=' + Cypress.env('apiKey') + '&hours=3'
      cy.log(apiBaseUrl)

      cy.request({
        method: 'GET',
        url: apiBaseUrl
      }).as('apiResponse')


      cy.get('@apiResponse').then(function (response) {
        expect(response.status).to.eq(200)

        const target = (response.body)
        var dataLoopCounter = parseInt('0')
        var weatherLoopCounter = parseInt('0')
        Object.keys(target.data).forEach(function (outerloop) {
          cy.log('**timestamp_utc = ' + target.data[outerloop].timestamp_utc + '**')
          cy.log('**_' + (dataLoopCounter + 1) + ' occurance of weather object in response_**')
          Object.keys(target.data[dataLoopCounter].weather).forEach(function (innerloop) {

            cy.log(Object.keys(target.data[dataLoopCounter].weather)[weatherLoopCounter] + ' = ' + Object.values(target.data[dataLoopCounter].weather)[weatherLoopCounter])
            weatherLoopCounter++
          })
          dataLoopCounter++
          weatherLoopCounter = 0
        })

      })
    })


  })
})