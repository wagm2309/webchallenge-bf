Feature: Cierre de sesión

    Feature  Cerrar sesión de usuario previamente logueado    
    
    Scenario: Cerrar sesion con usuario previamente logueado
    Given Usuario ingresa a Demoblaze Page
    And Hace click en botón Log In
    When Usuario ingresa nombre de usuario válido "Gonza01"
    And Ingresa password correcto "Abraham.01"
    And Hace click en botón Log in
    And Se loguea de forma correcta "Gonza01"
    And Hace click en botón Logout
    Then Cierra sesión de forma exitosa "Gonza01"

   

   



    

    