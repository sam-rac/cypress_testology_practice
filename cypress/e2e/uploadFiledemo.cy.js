/// <reference types="cypress"/>

it('upload file test', function(){
    cy.visit('http://the-internet.herokuapp.com/')

    cy.contains('File Upload').click();

    cy.get('#file-upload').attachFile('mydata.json')
})