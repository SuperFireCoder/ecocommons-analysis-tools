/// <reference types="cypress" />
// https://on.cypress.io/introduction-to-cypress

const specTitle = require("cypress-sonarqube-reporter/specTitle");

describe(specTitle('In order to use the analysis features; as a User; I should be able to find the options and see analysis progress'), () => {
    beforeEach(() => {
        cy.clearCookies()
    })

    it('The page prompts me with options', () => {
        // Given I am on the home page
        cy.visit('/')
        // Then the Analysis Hub should be active
        cy.get('div[data-active-tab="analysis-hub"]')
        // And I should see "Modelling Wizards"
        cy.get('div').should('contain', 'Modelling Wizards')
        // And I should see "Coding Cloud"
        cy.get('div').should('contain', 'Coding Cloud')
    })

    it('I can sign in', () => {
        cy.visit('/')
        cy.get('button')
            .should('contain', 'Sign in / Register')
        cy.login()
    })

    it('Modelling Wizards shows bccvl and risk mapping', () => {
        cy.visit('/');
        cy.get('a').contains('Modelling Wizards').click()
        cy.get('a[href^="https://bccvl-job-composer.dev.ecocommons.org.au"]')
            .should('contain', 'Biodiversity and Climate Change Virtual Laboratory')
        cy.get('a[href^="https://workflow.dev.ecocommons.org.au/template?create=bsrmap"]')
            .should('contain', 'Risk Mapping')
    })

})