# Práctica Github Actions
### Rafa Ferri 2 DAW

## Github Actions 

    Las GitHub Actions son una característica de GitHub que permite automatizar procesos de trabajo en un repositorio de GitHub.
    Estos procesos pueden incluir cosas como la compilación de código, el despliegue de una aplicación, la ejecución de 
    pruebas y mucho más. Las acciones se pueden configurar mediante archivos de configuración en el repositorio y se pueden 
    desencadenar mediante eventos como una nueva confirmación o un problema abierto. Con las GitHub Actions, puedes crear 
    flujos de trabajo automatizados que ayudan a mejorar la eficiencia y la velocidad de tu equipo de desarrollo.

Empezamos la tarea realizando un git clone al repositorio que se nos ha facilitado, una vez
realizado creamos una carpeta .github/workflows y empezamos a realizar las actividades:

El [repositorio](https://github.com/dawEstacio/nextjs-blog-practica)

### Linter

    Ejecutamos el primer job llamado linter que es encargado de comprobar
    que la sintaxis utilizada es correcta en todos los dicheros javascript

![image](https://user-images.githubusercontent.com/75679146/213924671-535be171-69f8-4fb9-a587-48cd4d2816c2.png)

    Una vez realizamos el push, el linter nos dara error ya que hay que realziar cambios en el código:
    
+ El uso de comillas simples y no comillas dobles.
+ El default del case de dentro del archivo ./pages/api/users/[id].js no es la última opción.
+ Una variable, en el arvhivo ./pages/api/users/[id].js usa var y no const o let.

    Una vez hayamos realizado los cambios, realizamos el push y el job saldrá tal que asi:
    
![image](https://user-images.githubusercontent.com/75679146/213924874-0fce63ca-de8f-4ee3-a88d-7197bb0edfc0.png)

### Cypress

    Cypress será el encargado de ejecutar los test cypress que están en nuestro proyecto, para comprobar
    que los test se cargan se pueden ejecutar en local para probarlo:
        npm install cypress
        npm run cypress
        
   ![image](https://user-images.githubusercontent.com/75679146/213924954-fc2faef2-6a8a-4091-ae68-a1b552b1afa0.png)

    Especificaremos que la salida del resultado de los test se muestre en el archivo result.txt, el cúal lo mostrará en el readme.
    Si los test se pasan correctamente se mostrará de esta forma:
    
    
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)





