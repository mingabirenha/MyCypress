/// <reference types='cypress'/>
describe('HelloWorld Test',()=>{

   it('visits Google',()=>{
    cy.visit('https://mozzingabire.000webhostapp.com/')
    cy.title().should('contain','Moise')
    cy.get('.btn').should('contain','HIRE ME')
    cy.get('body').should('contain','Moise Ingabire')
    cy.get('.container > h1').should('contain','LOOKING FOR DEVELOPER?')
   });
})