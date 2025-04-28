# Ejercicio-automation-Mercap
Repositorio con la resolución del ejercicio de automatizacion del login de Abbaco para Mercap

Algunas aclaraciones de la resolución del ejercicio: 
- Se utilizó el patrón POM (Page Object Model) para resolverlo
- Como la consigna es hacer los tests automatizados para una sola pantalla, y además es 
sencilla, hay algunos puntos que no se realizaron para no modularizar demasiado para un
ejemplo tan sencillo. Poe ejemplo, las constantes del login.spec.ts pueden ir a un 
archivo .env y utilizarlas desde ahi , y además se podria crear un basePage dentro de la
carpeta de pages/ para encapsular instrucciones de playwright y lineas comunmente utilizadas
(Por ejemplo, el test.describe(), el expect(...).toBeVisible(), etc)
- Para el propósito de la consigna, se hizo un solo commit en main con la solución. Para 
una automatización más grande o en un trabajo en equipo, se debe crear una branch, trabajar
sobre ella haciendo commits sobre la misma, y luego mergear los cambios a la rama main.