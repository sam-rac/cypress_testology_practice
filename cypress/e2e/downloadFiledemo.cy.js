/// <reference types="cypress"/>
/// <reference types= "cypress-downloadfile"/>
it('download file test', function(){
    cy.visit('http://the-internet.herokuapp.com/')

    cy.contains('File Download').click();
    cy.wait(4000)
    cy.downloadFile('http://the-internet.herokuapp.com/download/sample.pdf','mydownloads','sample.pdf')
})