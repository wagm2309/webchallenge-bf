import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const logoutPage = require("../../pages/demoblaze/logoutPage");

Given ('Usuario ingresa a Demoblaze Page',()=>{
    cy.visit('/')
})

And ('Hace click en botón LogIn',()=>{
    logoutPage.clickLogIn()
})

When ('Usuario ingresa nombre de usuario válido {string}',(username)=>{
    logoutPage.typeUserLogin(username)
})

And ('Ingresa password correcto {string}',(password)=>{
    logoutPage.typePasswordLogin(password)
})

And ('Hace click en botón Login',()=>{
    logoutPage.clickLog()
})

And('Se loguea de forma correcta {string}',(username)=>{
    logoutPage.logInOk(username)
})

And ('Hace click en botón Logout',()=>{
    logoutPage.clickLog()
})

Then ('Cierra sesión de forma exitosa {string}',(username)=>{
    logoutPage.logOutOk(username)
})



