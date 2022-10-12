/// <reference types='cypress'/>
import {loginPage} from './pages/loginPage'
const  loginPageobj = new loginPage()

describe('testauite1',()=>{
    
    beforeEach( function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
    it('loginValid', ()=>{

        loginPageobj.enterusername('Admin')
        loginPageobj.enterpassword('admin123')
        loginPageobj.clickLogin()
    })

})
