/// <reference types="cypress" />
// https://on.cypress.io/introduction-to-cypress

const specTitle = require("cypress-sonarqube-reporter/specTitle");

const MODELLING_WIZARDS_BCCVL_URL = Cypress.env('NEXT_PUBLIC_ANALYSIS_TOOLS_MODELLING_WIZARDS_BCCVL_URL');
const MODELLING_WIZARDS_BSRMAP_URL = Cypress.env('NEXT_PUBLIC_ANALYSIS_TOOLS_MODELLING_WIZARDS_BSRMAP_URL');
const CODING_CLOUD_URL = Cypress.env('NEXT_PUBLIC_ANALYSIS_TOOLS_CODING_CLOUD');
const COESRA_URL = Cypress.env('NEXT_PUBLIC_ANALYSIS_TOOLS_COESRA')


describe(specTitle('In order to use the analysis features; as a User; I should be able to find the options and see analysis progress'), () => {
    beforeEach(() => {
        cy.clearCookies()
    })

    it('The page prompts me with options', () => {
        // Given I am on the home page
        cy.visit('/')
        // Then the Analysis Hub should be active
        cy.get('div[data-active-tab="analysis-hub"]')
    })

    it('I can sign in', () => {
        cy.visit('/')
        cy.get('button')
            .should('contain', 'Sign in / Register')
        cy.login()
    })

    it('Analysis Hub Index Page should shows bccvl, risk mapping and coding cloud', () => {
        cy.visit('/');
        cy.get(`a[href^="${MODELLING_WIZARDS_BCCVL_URL}"]`)
            .should('contain', 'BCCVL')
        cy.get(`a[href^="${MODELLING_WIZARDS_BSRMAP_URL}"]`)
            .should('contain', 'Risk Mapping')
        cy.get(`a[href^="${CODING_CLOUD_URL}"]`)
            .should('contain', 'Coding Cloud')
        cy.get(`a[href^="${COESRA_URL}"]`)
            .should('contain', 'CoESRA')
    })

})