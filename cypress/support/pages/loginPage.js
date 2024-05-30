export class LoginPage {

    constructor() {
        this.userInput = '#user'
        this.passInput = '#pass'
        this.iniciaSessionButton = '#submitForm'
        this.openLoginButton = '#registertoggle'
    }

    login(usuario, contraseña) {
        cy.visit('');
        cy.get(this.openLoginButton).dblclick();
        cy.get(this.userInput).type(usuario);
        cy.get(this.passInput).type(contraseña);
        cy.get(this.iniciaSessionButton).click();
    };
};  