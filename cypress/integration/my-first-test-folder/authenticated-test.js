/// <reference types="cypress" />

const token = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhcnAiLCJfaWQiOiI2MTM3NTNkODAzNWRlZTAwMDhkZTAyNDQiLCJuYW1lIjoic2FycCIsImlhdCI6MTYzMTAyMzc1MSwiZXhwIjoxNjMzNjE1NzUxfQ.NdSfTSPwmRghSii0D7KSMWjYDl5VS8qffbcZRCrqVFA'

describe('Basic Authenticated Desktop Tests', () => {

     before(() => {
        cy.then(() => {
            window.localStorage.setItem('__auth__token', token)
        })
    })
    
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('https://codedamn.com/')
    })

    it('Should load playground correctly', () => {

        
        cy.visit('https://codedamn.com/playground/html')
        cy.contains('Setting up your environment', {timeout: 7 * 1000}).should('exist')
        
        cy.contains('Setting up your environment', {timeout: 7 * 1000}).should('not.exist')
        // cy.debug()

        cy.get('[data-testid=xterm]').type('{ctrl}{c}')
        cy.get('[data-testid=xterm]').type('touch testscript.js')
        
    })

    it.only('Rename file test', () => {
        
        cy.visit('https://codedamn.com/playground/html')
        cy.contains('Setting up your environment', {timeout: 7 * 1000}).should('exist')
        cy.contains('Setting up your environment', {timeout: 7 * 1000}).should('not.exist')

    })

})