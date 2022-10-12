export class loginPage{

    usernameTxt = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    passwordTxt = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
    loginBtn = '.oxd-button';
    enterusername(username)
    {
        cy.get(this.usernameTxt).type(username)
    }

    enterpassword(password)
    {
        cy.get(this.passwordTxt).type(password)
    }

    clickLogin()
    {
        cy.get(this.loginBtn).click()
    }
}