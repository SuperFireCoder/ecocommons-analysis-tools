Cypress.Commands.add('login', (username, password) => {
    cy.visit('/');
    cy.wait(2000)
    cy.get('body').then(($body) => {
        if ($body.find('button[data-cy=root-signin]').length) {
            cy.log('Attempting to login');
            cy.get('[data-cy="root-signin"]', { timeout: 5000 }).click();
            cy.get('#zocial-keycloak-local-account', { timeout: 5000 }).click();
            cy.get('#username').type(username ?? Cypress.env('EC_USER'));
            cy.get('#password').type(password ?? Cypress.env('EC_PASS'));
            cy.get('#kc-form-login').submit();
        } else {
            cy.log('Login skipped');
        }
    });
});

Cypress.Commands.add('getResponse', (request) => {
    cy.wait(request)
        .its('response')
        .then((r) => {
            expect(r.statusCode).to.be.oneOf([200, 201]);
            cy.wrap(r.body).as(`response${request}`)
        });
});