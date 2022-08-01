/// <reference types="cypress" />
// https://on.cypress.io/introduction-to-cypress

const specTitle = require("cypress-sonarqube-reporter/specTitle");

describe(specTitle('In order to use the analysis features; as a User; I should be able to find the options and see analysis progress'), () => {
    beforeEach(() => {
        cy.clearCookies()
    })

    it('Coding Cloud servers requires login', () => {
        cy.visit('/');
        cy.get('a').contains('Coding Cloud').click()
        cy.get('button')
            .should('not.contain', 'Launch notebook server', {
                timeout: 2000
            })
    })

    it('Coding Cloud server "Notebook" can be started', () => {
        cy.login()
        cy.get('a')
            .contains('Coding Cloud')
            .click()
        cy.get('button', {
                timeout: 120000
            })
            .should('contain', 'Launch notebook server')
        cy.get('button').filter(':contains("Launch notebook server")').click()

        // Modal popup to choose type
        cy.get('label > input[value="ecocommons-scipy-environment"]')
            .parent()
            .click()
        // NOTE: The label doesn't contain the label, this is not accessible
        cy.get('.bp3-dialog-footer button')
            .filter(':contains("Launch")')
            .click()

        // Pending machine start
        cy.get('td', {timeout: 10000})
            .should('contain', 'PENDING')
        cy.get('td')
            .should('contain', 'EcoCommons SciPy environment')

        cy.get('td', {
                timeout: 120000
            })
            .should('not.contain', 'PENDING')

        // Machine running, check launch works
        cy.get('td')
            .should('contain', 'RUNNING')
        cy.window()
            .then((win) => {
                cy.stub(win, 'open').as('redirect');
            });
        cy.get('td button').filter(':contains("Open")').click()

        cy.get('@redirect')
            .should('be.calledWith', 'https://jupyterhub.dev.ecocommons.org.au/hub/oauth_login?next=%2Fhub%2F');

        // Shutdown the machine
        cy.get('td button[title="Shutdown server instance"]').click()

        cy.get('td', {
                timeout: 120000
            })
            .should('not.contain', 'RUNNING')
    })

    it('Coding Cloud server "Datascience" can be started', () => {
        cy.login()
        cy.get('a')
            .contains('Coding Cloud')
            .click()
        cy.get('button', {
                timeout: 120000
            })
            .should('contain', 'Launch notebook server')
        cy.get('button').filter(':contains("Launch notebook server")').click()

        // Modal popup to choose type
        cy.get('label > input[value="datascience-environment"]')
            .parent()
            .click()
        // NOTE: The label doesn't contain the label, this is not accessible
        cy.get('.bp3-dialog-footer button')
            .filter(':contains("Launch")')
            .click()

        // Pending machine start
        cy.get('td', {timeout: 10000})
            .should('contain', 'PENDING')
        cy.get('td')
            .should('contain', 'Datascience environment')

        cy.get('td', {
                timeout: 120000
            })
            .should('not.contain', 'PENDING')

        // Machine running, check launch works
        cy.get('td')
            .should('contain', 'RUNNING')
        cy.window()
            .then((win) => {
                cy.stub(win, 'open').as('redirect');
            });
        cy.get('td button').filter(':contains("Open")').click()

        cy.get('@redirect')
            .should('be.calledWith', 'https://jupyterhub.dev.ecocommons.org.au/hub/oauth_login?next=%2Fhub%2F');

        // Shutdown the machine
        cy.get('td button[title="Shutdown server instance"]').click()

        cy.get('td', {
                timeout: 120000
            })
            .should('not.contain', 'RUNNING')
    })

    it('Coding Cloud server "EcoCommons R" can be started', () => {
        cy.login()
        cy.get('a')
            .contains('Coding Cloud')
            .click()
        cy.get('button', {
                timeout: 120000
            })
            .should('contain', 'Launch notebook server')
        cy.get('button').filter(':contains("Launch notebook server")').click()

        // Modal popup to choose type
        cy.get('label > input[value="ecocommons-r-environment"]')
            .parent()
            .click()
        // NOTE: The label doesn't contain the label, this is not accessible
        cy.get('.bp3-dialog-footer button')
            .filter(':contains("Launch")')
            .click()

        // Pending machine start
        cy.get('td', {timeout: 10000})
            .should('contain', 'PENDING')
        cy.get('td')
            .should('contain', 'EcoCommons R environment')

        cy.get('td', {
                timeout: 120000
            })
            .should('not.contain', 'PENDING')

        // Machine running, check launch works
        cy.get('td')
            .should('contain', 'RUNNING')
        cy.window()
            .then((win) => {
                cy.stub(win, 'open').as('redirect');
            });
        cy.get('td button').filter(':contains("Open")').click()

        cy.get('@redirect')
            .should('be.calledWith', 'https://jupyterhub.dev.ecocommons.org.au/hub/oauth_login?next=%2Fhub%2F');

        // Shutdown the machine
        cy.get('td button[title="Shutdown server instance"]').click()

        cy.get('td', {
                timeout: 120000
            })
            .should('not.contain', 'RUNNING')
    })
})