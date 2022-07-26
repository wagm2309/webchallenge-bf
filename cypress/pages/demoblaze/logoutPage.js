class logoutDemoBlaze{

    elements = {
        logInElement: () => cy.get('#login2'),
        userLoginInput: () => cy.get('#loginusername'),
        passwordLoginInput: () => cy.get('#loginpassword'),
        logBtn: () => cy.get('.btn-primary'),
        logOk: () => cy.get('#nameofuser'),
        clickLogOut: () => cy.get('#logout2'),
        OutOk: () => cy.get('#nameofuser')
       
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

    logInOk (username){
        this.elements.logOk().contains('Welcome ' + username)
    }

   clickLog (){
        this.elements.clickLogOut().click()
    }

    logOutOk (username){
        this.elements.OutOk().should('not.have.text', 'Welcome ' + username) 
    }

}

module.exports = new logoutDemoBlaze();