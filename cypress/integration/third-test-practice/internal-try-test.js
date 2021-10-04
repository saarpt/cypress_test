/// <reference types="cypress" />

beforeEach( () => {

cy.viewport(1280, 720)
cy.visit('https://dashboard.grid.gg/')

})

describe('First internal tryout', () => {

it('trying to acces to login page', () => {

    cy.log('double checking the link extension')
    cy.url('https://dashboard.grid.gg/login?requestUrl=/')

})

it('checking the layout', () => {
    cy.get('input[name="loginId"]').should('exist')
    cy.get('input[name="password"]').should('exist')

})

it('login check with correct credentials', () => {

    cy.get('input[name="loginId"]').type('Sarper').should('have.value', 'Sarper')
    cy.get('input[name="password"]').type('passWord')
    cy.get('button').click()

})

it('login check with incorrect credentials', () => {

    cy.get('input[name="loginId"]').type('Sarper').should('have.value', 'Sarper')
    cy.get('input[name="password"]').type('passWord')
    cy.get('button').click()
    cy.get('.css-g0rjxl').should('contain', 'Invalid username or password')
    
})

it('login check with typing inputs with delay', () => {
    cy.get('input[name="loginId"]').type('Sarper', {delay: 100}).should('have.value', 'Sarper')
    cy.get('input[name="password"]').type('Sarp123321', {delay: 100})
    cy.get('button').click()
}) 

})