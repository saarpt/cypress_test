/// <reference types="cypress" />

// const token = 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhcnAiLCJfaWQiOiI2MTM3NTNkODAzNWRlZTAwMDhkZTAyNDQiLCJuYW1lIjoic2FycCIsImlhdCI6MTYzMTAxNTk2OCwiZXhwIjoxNjMzNjA3OTY4fQ.g1VRMXLvUFF7yfccCJ60HFJNahQDufPoIYyl6kwaboE'

describe('Basic Unauthenticated Desktop Tests', () => {

    /* before( () => {

        cy.then( () => {

            cy.viewport(1280, 720)
            window.localStorage.setItem('__auth__token', token)

        })

    })
    
    beforeEach(() => {

        cy.viewport(1280, 720)
        cy.visit('https://codedamn.com/')

    })

    */

    it('The webpage is loading succesfully', () => {
        cy.viewport(1280, 720)
        cy.visit('https://codedamn.com/')
    })

    it('The login page is loading successfuly', () => {

        cy.viewport(1280, 720)
        cy.visit('https://codedamn.com/')
        cy.contains('Sign In').click()
        cy.contains('Remember me').should('exist')
        cy.contains('Forgot your password?').should('exist').click()
        cy.url().should('include', '/password-reset')
        cy.url().then((value) => {
            cy.log('The current URL is:', value)
        })
        cy.go('back')
        cy.url().should('include', '/login')
    })

    it.only('login page fills successfuly and access to dashboard', () => {

        cy.viewport(1280, 720)
        cy.visit('https://codedamn.com/')
        cy.contains('Sign In').click()      
        cy.get('[data-testid=username]').type('sarp')
        cy.get('[data-testid=password]').type('sarp123321')
        cy.get('[data-testid=login]').click()
       

    })
})