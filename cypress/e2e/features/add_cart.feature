Feature: Add Cart

    Feature Agregar laptop a Carrito / Verificar que se haya agregado   
    
    Scenario: Agregar laptop a carrito / Verificar que se haya ah¿gregado
    Given Ingresar a demoblaze 
    When Seleccionar categoría Laptops "Laptops"
    And Seleccionar una laptop para agregar al carrito "Sony vaio i5"
    And Hacer click en botón add cart
    Then Se agrega laptop de forma correcta al carrito
    And El producto agregado se encuentra en el carrito
   

   



    

    