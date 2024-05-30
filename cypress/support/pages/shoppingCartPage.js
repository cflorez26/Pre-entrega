export class ShoppingCartPage {

    constructor() {
        this.showTotalPriceButton = "//button[text()='Show total price']"

    };
    checkProductName(name) {
        cy.contains('p', name).should('have.text', name)
    };

    checkUnitPrice(name, price) {
        cy.contains('p', name).siblings('#unitPrice').should('have.text', `$${price}`);
    };

    checkAmount(name, amount) {
        cy.contains('p', name).siblings('#productAmount').should('have.text', amount);
    };

    checkTotalPrice(name, price, quantity) {
        cy.contains('p', name).siblings('#totalPrice').should('have.text', `$${price * quantity}`)

    };

    showTotalPrice() {
        cy.xpath(this.showTotalPriceButton).click();
    };

    checkPurchaseTotal(total) {
        cy.get('#price > b').should('have.text', total.toString());

    };



};





