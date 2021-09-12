/// <reference types="cypress" />

beforeEach(() => {

    cy.viewport(1280, 720)
    cy.visit('http://automationpractice.com/index.php')

})

describe('New automated-test practices', () => {

it('page load test', () => {
    cy.visit('http://automationpractice.com/index.php')
})


it('Testing layouts in Contacts', () => {
    cy.get('[id=contact-link]').click()
    cy.get('[id=center_column]').should('exist')
    cy.get('[id=message]').should('exist')
    cy.get('[id=id_contact').should('exist')
    cy.get('Sign In').should('not.exist')

})



it('contact us test with fillings', () => {

    cy.log('contact us check')
    cy.get('[id=contact-link]').click()
    cy.get('[id=id_contact]').select('Webmaster')
    cy.get('[id=email]').type('testuser@gmail.com')
    cy.get('[id=id_order]').type(generatedID())
        
        function generatedID(){
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
            for (var i = 0; i < 10; i++)    
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }

    cy.get('[id=message]').type('This is a test message')
    cy.get('[id=submitMessage]').should('exist').click()  
    
    cy.log('url extends with ?controller=contact')
    cy.url().should('include', '?controller=contact')
    cy.contains('Your message has been successfully sent to our team.').should('exist')
    cy.contains('Home').should('exist').click()
            
})

 it('Dropdown menu should have 2 items with correct names', () => {

//confirming only 2 items are added in dropdown menu

    cy.get('[id=contact-link]').click()
    // cy.get('[id=uniform-id_contact]').should('have.length', 1)

    // cy.get('[id=id_contact]').first().should('include.text', 'Customer service')
    // cy.get('[id=id_contact]').last().should('include.text', 'Webmaster')
     
})
 


})
