class loginDemoBlaze{

    elements = {
        logInElement: () => cy.get('#login2'),
        userLoginInput: () => cy.get('#loginusername'),
        passwordLoginInput: () => cy.get('#loginpassword'),
        logBtn: () => cy.get('.btn-primary'),
       
    }

    clickLogIn (){
        this.elements.logInElement().click()
    }

    typeUserLogin (username){
        this.elements.userLoginInput().clear().type(username)
    }

    typePasswordLogin (password){
        this.elements.passwordLoginInput().type(password)
    }

    clickLog (){
        this.elements.logBtn().contains('Log in').click().wait(1000)
    }

}

module.exports = new loginDemoBlaze();