import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly iconoAbaco: Locator; 
  readonly tituloBienvenida: Locator;

  readonly campoMail: Locator; 
  readonly campoContrasenia: Locator;

  readonly botonOjoContrasenia: Locator; 

  readonly linkOlvidasteTuContrasenia: Locator;

  readonly botonContinuar: Locator;

  readonly botonRegistrarse: Locator;

  constructor(page: Page) {
    this.page = page;

    this.iconoAbaco = this.page.getByRole('img', { name: 'Mercap' });
    this.tituloBienvenida = this.page.getByRole('heading', { name: 'Te damos la bienvenida' });

    this.campoMail = this.page.getByRole('textbox', { name: 'Dirección de correo electrónico' });
    this.campoContrasenia = this.page.getByRole('textbox', { name: 'Contraseña' });

    this.botonOjoContrasenia = this.page.getByRole('button', { name: 'Mostrar contraseña' });

    this.linkOlvidasteTuContrasenia = this.page.getByRole('link', { name: '¿Olvidaste tu contraseña?' });

    this.botonContinuar = this.page.getByRole('button', { name: 'Continuar', exact: true });

    this.botonRegistrarse = this.page.getByRole('link', { name: 'Registrarse' });
  }

  async loguearseAlPortal(usuario: string, contrasenia: string) {
    await this.campoMail.fill(usuario);
    await this.campoContrasenia.fill(contrasenia);
    await this.botonContinuar.click();
  }

  async irAOlvidasteTuContrasenia() {
    await this.linkOlvidasteTuContrasenia.click();
  }

  async irARegistrarseAlPortal() {
    await this.botonRegistrarse.click();
  }

  async clickBotonOjo() {
    await this.botonOjoContrasenia.click();
  }

  async escribirContrasenia(contrasenia: string) {
    await this.campoContrasenia.fill(contrasenia);
  }

  async assertIngresoExitosoAlLogin() {
    await expect(this.iconoAbaco).toBeVisible()
    await expect(this.tituloBienvenida).toHaveText('Te damos la bienvenida');
  }

  async assertContraseniaSeMuestra() {
    await expect(this.campoContrasenia).toHaveAttribute('type', 'text');
  }

  async assertContraseniaSeOculta() {
    await expect(this.campoContrasenia).toHaveAttribute('type', 'password');
  }
}