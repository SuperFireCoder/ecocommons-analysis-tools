/// <reference types="cypress" />
// https://on.cypress.io/introduction-to-cypress

const specTitle = require("cypress-sonarqube-reporter/specTitle");

const MODELLING_WIZARDS_BCCVL_URL = Cypress.env('NEXT_PUBLIC_ANALYSIS_TOOLS_MODELLING_WIZARDS_BCCVL_URL');
const MODELLING_WIZARDS_BSRMAP_URL = Cypress.env('NEXT_PUBLIC_ANALYSIS_TOOLS_MODELLING_WIZARDS_BSRMAP_URL');

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
        cy.get(`a[href^="${MODELLING_WIZARDS_BCCVL_URL}"]`)
            .should('contain', 'Biodiversity and Climate Change Virtual Laboratory')
        cy.get(`a[href^="${MODELLING_WIZARDS_BSRMAP_URL}"]`)
            .should('contain', 'Risk Mapping')
    })

})