Feature: Inicio de sesión

    Feature Iniciar sesión con usuario registrado   
    
    Scenario: Iniciar sesion con usuario previamente registrado
    Given Usuario ingresa a demoblaze page
    And Hace click en botón Log In
    When Usuario ingresa nombre de usuario registrado previamente "Gonza01"
    And Ingresa password válido "Abraham.01"
    And Hace click en botón Log in
    Then Usuario se loguea de forma exitosa "Gonza01"

   

   



    

    