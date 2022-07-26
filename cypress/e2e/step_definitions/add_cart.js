import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const addPage = require("../../pages/demoblaze/addCartPage");

Given ('Ingresar a demoblaze',()=>{
    cy.visit('/')
})

When ('Seleccionar categoría Laptops {string}',(tipo)=>{
    addPage.selectCategory(tipo)
    
}) 

And ('Seleccionar una laptop para agregar al carrito {string}',(producto)=>{
    addPage.selectProducto(producto)
    
})

And ('Hacer click en botón add cart',()=>{
    addPage.clickBtnCart()
   
})

Then('Se agrega laptop de forma correcta al carrito',()=>{
    cy.on('window:alert', function(alertMessage){
        expect(alertMessage).to.contains('Product added')
    }) 
})

And ('El producto agregado se encuentra en el carrito',()=>{
    addPage.clickAddOk()
})
    




