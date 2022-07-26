import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
const registerPage = require("../../pages/demoblaze/registerPage");

Given ('Usuario ingresa a page demoblaze',()=>{
    cy.visit('/')
})

And ('Hace click en botón Sign up',()=>{
    registerPage.clickSignIn()
})

When ('Usuario ingresa nombre de usuario no registrado previamente {string}',(username)=>{
    registerPage.typeUsername(username)
    
})

And ('Ingresa password que cumpla con las policies {string}',(password)=>{
    registerPage.typePassword(password)
    
})

And ('Hace click en botón Sign Up',()=>{
    registerPage.clickRegister()
    
})

Then('Usuario se registra de forma exitosa',()=>{
    cy.on('window:alert', function(alertMessage1){
        expect(alertMessage1).to.contains('Sign up successful')
    })
})
