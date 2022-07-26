import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const loginPage = require("../../pages/demoblaze/loginPage");

Given ('Usuario ingresa a demoblaze page',()=>{
    cy.visit('/')
})

And ('Hace click en botón Log In',()=>{
    loginPage.clickLogIn()
})

When ('Usuario ingresa nombre de usuario registrado previamente {string}',(username)=>{
    loginPage.typeUserLogin(username)
})

And ('Ingresa password válido {string}',(password)=>{
    loginPage.typePasswordLogin(password)
})

And ('Hace click en botón Log in',()=>{
    loginPage.clickLog()
})

Then('Usuario se loguea de forma exitosa {string}',(username)=>{
    cy.get('#nameofuser').contains('Welcome ' + username) 
})




