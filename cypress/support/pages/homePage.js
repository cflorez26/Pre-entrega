export class HomePage {

    constructor() {
        this.onlineShopButton = "//a[text()='Online Shop']"
    }

    goOnlineShop() {
        cy.xpath(this.onlineShopButton).click();
    }
}