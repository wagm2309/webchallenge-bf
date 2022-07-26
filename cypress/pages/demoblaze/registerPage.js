class registerDemoBlaze{

    elements = {
        signInElement: () => cy.get('#signin2'),
        usernameInput: () => cy.get('#sign-username'),
        passwordInput: () => cy.get('#sign-password'),
        signUpBtn: () => cy.get('.btn-primary').contains('Sign up').click(),
       
    }

    clickSignIn (){
        this.elements.signInElement().click()
    }

    typeUsername (username){
        this.elements.usernameInput().clear().type(username)
    }

    typePassword (password){
        this.elements.passwordInput().type(password)
    }

    clickRegister (){
        this.elements.signUpBtn()
    }

}

module.exports = new registerDemoBlaze();