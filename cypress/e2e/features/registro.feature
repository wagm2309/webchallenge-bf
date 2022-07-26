Feature: Registro de nuevo usuario

    Feature Registro de nuevo usuario en page dmoblaze

    Scenario: Registro de nuevo usuario de forma existosa
    Given Usuario ingresa a page demoblaze 
    And Hace click en botón Sign up
    When Usuario ingresa nombre de usuario no registrado previamente "Gonza50"
    And Ingresa password que cumpla con las policies "Abraham.01"
    And Hace click en botón Sign Up
    Then Usuario se registra de forma exitosa

    

    