/// <reference types='cypress'/>
describe('HelloWorld Test',()=>{

   it('visits Google',()=>{
    cy.visit('https://mozzingabire.000webhostapp.com/')
    cy.title().should('contain','Moise')
   })
})