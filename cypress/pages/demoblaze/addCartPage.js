class addCartDemoBlaze{

    elements = {
        category: () => cy.get('.list-group-item'),
        product: () => cy.get('.h-100'),
        btnCart: () => cy.get('.btn-lg'),
        addOk: () =>  cy.get(':nth-child(4) > .nav-link')
            
    }

    selectCategory (tipo){
        this.elements.category().contains(tipo).wait(1000).click({force:true})
    }

    selectProducto (producto){
        this.elements.product().contains(producto).click()
    }

    clickBtnCart (){
        this.elements.btnCart().contains('Add to cart').click()
    }

    clickAddOk (){
        this.elements.addOk().click()
        cy.get('.table-responsive').contains('Sony vaio i5').then((e)=>{
            let modelo = e.text()
            cy.log('Se agrego laptop modelo: ' + modelo +  ', de forma correcta')
         })
    }

}

module.exports = new addCartDemoBlaze();