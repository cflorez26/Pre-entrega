import { LoginPage } from '../support/pages/loginPage';
import { HomePage } from '../support/pages/homePage';
import { ProductPage } from '../support/pages/productsPage';
import { ShoppingCartPage } from '../support/pages/shoppingCartPage';

describe('Pre entrega', () => {
    let data;
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const shoppingCartPage = new ShoppingCartPage();



    before(() => {
        cy.fixture('data').then(datos => {
            data = datos;
        });
    });

    it('TC_01', () => {
        const purchaseTotal = (data.products.firstProduct.unitPrice * data.products.firstProduct.quantity) +
            (data.products.secondProduct.unitPrice * data.products.secondProduct.quantity);


        loginPage.login(Cypress.env().usuario, Cypress.env().contraseña);

        homePage.goOnlineShop();

        productPage.addProduct(data.products.firstProduct.name);
        productPage.closeModal();
        productPage.addProduct(data.products.firstProduct.name);
        productPage.closeModal();

        productPage.addProduct(data.products.secondProduct.name);
        productPage.closeModal();

        productPage.goShoppingCart();

        shoppingCartPage.checkProductName(data.products.firstProduct.name);
        shoppingCartPage.checkUnitPrice(data.products.firstProduct.name, data.products.firstProduct.unitPrice);
        shoppingCartPage.checkAmount(data.products.firstProduct.name, data.products.firstProduct.quantity);
        shoppingCartPage.checkTotalPrice(data.products.firstProduct.name, data.products.firstProduct.unitPrice, data.products.firstProduct.quantity);

        shoppingCartPage.checkProductName(data.products.secondProduct.name);
        shoppingCartPage.checkUnitPrice(data.products.secondProduct.name, data.products.secondProduct.unitPrice);
        shoppingCartPage.checkAmount(data.products.secondProduct.name, data.products.secondProduct.quantity);
        shoppingCartPage.checkTotalPrice(data.products.secondProduct.name, data.products.secondProduct.unitPrice, data.products.secondProduct.quantity);

        shoppingCartPage.showTotalPrice();

        shoppingCartPage.checkPurchaseTotal(purchaseTotal);

    })
});


