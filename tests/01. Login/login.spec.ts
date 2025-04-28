import test from '@playwright/test';

import { LoginPage } from '../../pages/01. Login/loginPage';

// Solo datos de ejemplo para el archivo
const URL_LOGIN_ABBACO = 'https://loginabbaco.com';
const USUARIO_PRUEBA = 'prueba';
const CONTRASENIA_PRUEBA = 'prueba123';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    await page.goto(URL_LOGIN_ABBACO);

    loginPage = new LoginPage(page);
});

test.describe('PANTALLA DE LOGIN DEL PORTAL DE ABBACO', () => {
    test('Ingresar a pantalla de login del portal de Abbaco', async () => {
        // La acción de ir a la pantalla de login se hace en la precondición (test.beforeEach)

        await test.step('Se debe ingresar a la pantalla de login', async () => {
            await loginPage.assertIngresoExitosoAlLogin();
        });
    });
    
    test('Loguearse exitosamente al portal', async () => {
        await test.step('Completar usuario y contraseña', async () => {
            await loginPage.loguearseAlPortal(USUARIO_PRUEBA, CONTRASENIA_PRUEBA);
        });
  
        await test.step('Se debe loguear al portal', async () => {
            /*
            En el caso de poder loguearme, crearía un page de la home del portal, y dentro 
            de esta crearia la funcion para validar que se ingresó a la home del poral
            */
            // await homePage.assertLoginExitosoAlPortal();
        });
    });

    test("Ir a '¿Olvidaste tu contraseña?'", async () => {
        await test.step("Clickear en el link de '¿Olvidaste tu contraseña?'", async () => {
            await loginPage.irAOlvidasteTuContrasenia();
        });

        await test.step("Se debe ingresar a la pantalla de '¿Olvidaste tu contraseña?'", async () => {
            // Puedo validarlo dentro del mismo page, si se cómo es la pantalla de olvidaste tu contraseña
            // await loginPage.assertIngresoExitosoAOlvidasteTuContrasenia();
        });
    });

    test("Ir a la pantalla de registración", async () => {
        await test.step("Clickear en el link de 'Registrarse'", async () => {
            await loginPage.irARegistrarseAlPortal();
        });

        await test.step("Se debe ingresar a la pantalla de 'Registrarse'", async () => {
            // Puedo validarlo dentro del mismo page, si se cómo es la pantalla de registración
            // await loginPage.assertIngresoExitosoAPantallaDeRegistracion();
        });
    });

    test("Mostrar contraseña", async () => {
        await test.step("Llenar el campo de contraseña", async () => {
            await loginPage.escribirContrasenia(CONTRASENIA_PRUEBA);
        });

        await test.step("Clickear en el ícono del ojo para mostrar contraseña", async () => {
            await loginPage.clickBotonOjo();
        });
        
        await test.step("Se debe mostrar la contraseña, mostrando sus caracteres", async() => {
            await loginPage.assertContraseniaSeMuestra();
        });
    });

    test("Ocultar contraseña", async () => {
        await test.step("Llenar el campo de contraseña", async () => {
            await loginPage.escribirContrasenia(CONTRASENIA_PRUEBA);
        });

        await test.step("Clickear en el ícono del ojo para mostrar contraseña", async () => {
            await loginPage.clickBotonOjo();
        });

        await test.step("Volver a clickear en el ícono del ojo para ocultar la contraseña", async () => {
            await loginPage.clickBotonOjo();
        });

        await test.step("Se debe ocultar la contraseña, reemplazando sus caracteres por puntos", async() => {
            await loginPage.assertContraseniaSeOculta();
        });
    });
});