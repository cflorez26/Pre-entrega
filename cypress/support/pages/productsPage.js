export class ProductPage {

    constructor() {
        this.buttonShoppingCart = '#goShoppingCart'
    }

    addProduct(name) {
        cy.contains('p', name).siblings().eq(2).find(`button[name="${name}"]`).click();
    }

    closeModal() {
        cy.get('#closeModal').click();
    }

    goShoppingCart() {
        cy.get(this.buttonShoppingCart).click();
    }

};