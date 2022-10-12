/// <reference types = 'cypress'/>
require('cypress-xpath');
describe('customer test suite' , function(){

    before(function(){
        cy.fixture("mydata").as('testData')
    })
it.only('create cutomer' , function(){
    cy.visit(this.testData.url)
    cy.get("a[href *= 'login']").click()
    cy.get('#login_email').type(this.testData.username)
    cy.get('#login_password').type(this.testData.password)
    cy.get('.for-login > .login-content > .form-signin > .btn').click()
    cy.wait(4000)
    cy.get('a[class="module-box-link"]').parents('[data-module-name="Selling"]')
            .find('h4').click()
    cy.wait(4000)
   
    cy.contains("a[class='link-content']", 'Customer').click()  

    cy.get('span[data-label="New"]').parents('button[class *= "btn-primary"]').click()


    cy.get('.modal.in > .modal-dialog > .modal-content').should('be.visible')

    cy.contains('h4','New Customer').parents('div[class ="modal-dialog"]')
        .find('input[type="text"][data-fieldname="customer_name"]').type('testCustomer2')

    cy.get('select[type="text"]').select('Individual')
   
    cy.contains('h4','New Customer').parents('div[class ="modal-dialog"]')
         .find('input[type="text"][data-target="Customer Group"]').clear()

    cy.wait(5000)

    cy.contains('h4','New Customer').parents('div[class ="modal-dialog"]')
    .find('ul li a').each(($item,index,$list)=>{

        cy.log(index)
        cy.log($item.text())
    })
   
    cy.contains('ul li a', 'PUNE-CUSTOMERS').click()

    cy.wait(4000)
    cy.xpath("//button[normalize-space()='Save']").click()
    cy.wait(4000)

    cy.xpath("//input[@placeholder='Customer Group']").clear()
    cy.xpath("//input[@placeholder='Full Name']").clear()
    cy.xpath("//input[@placeholder='Full Name']").type('testCustomer2{enter}')
    cy.wait(4000)

    cy.contains('.list-row-col span a','testCustomer2').should('be.visible')
})


it('create cutomer' , function(){
    cy.visit('https://test.techlift.in/')
    cy.get("a[href *= 'login']").click()
    cy.get('#login_email').type('testology.qa.learning@gmail.com')
    cy.get('#login_password').type('Testology@123')
    cy.get('.for-login > .login-content > .form-signin > .btn').click()
    cy.wait(4000)
    cy.get('a[class="module-box-link"]').parents('[data-module-name="Selling"]')
            .find('h4').click()
    cy.wait(4000)
   
    cy.contains("a[class='link-content']", 'Customer').click()  
    cy.wait(4000)

    cy.go('back')

})



})