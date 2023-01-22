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
    Si los hemos probado en local, nos saldrá un error de endpoint el cual, el nombre esta mal escrito, se realiza
    el cambio y al vorverlos a pasar estará todo correcto.
        
   ![image](https://user-images.githubusercontent.com/75679146/213924954-fc2faef2-6a8a-4091-ae68-a1b552b1afa0.png)

    Especificaremos que la salida del resultado de los test se muestre en el archivo result.txt
    Si los test se pasan correctamente se mostrará de esta forma:
    
   ![image](https://user-images.githubusercontent.com/75679146/213925192-64e02da3-c4fa-4690-a727-d6ed13b96e83.png)
    
### Badge

    Este job el cual se ejecutará después que el anterior se encargará de poner un badge dentro del README, el cual
    cambiará dependiendo del resultado de los test.
    Si el test es correcto mostrará un check y en el caso contrario un error:
    
![image](https://user-images.githubusercontent.com/75679146/213925440-b7f1d7a6-e05e-4271-befc-ecce68f791bd.png)

![image](https://user-images.githubusercontent.com/75679146/213925314-03bafdcc-031b-4e42-a4c7-88252239a7a6.png)

    Necesitaremos crear una actión la cual deberemos de compilar para poder actualizar el README:

![image](https://user-images.githubusercontent.com/75679146/213925716-85f75871-57bd-4019-ac54-ce9ac69119a0.png)

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

### Deploy

    Nos crearemos una cuenta de vercel en la cual deberemos de importar nuestro repositorio de github con el proyecto
    de Next.js, una vez importado vamos a ajustes y realizamos un cambio en la configuración del repositorio importado.
    Cambiamos en Build Command dejando el campo en blanco y con el check de Override activado.
    
![image](https://user-images.githubusercontent.com/75679146/213925885-9f967845-c606-47bb-b69e-d2a08318a85d.png)

    En este job nos harán falta 3 secrets:
- Token Vercel
- Token Project ID
- Token User ID

![image](https://user-images.githubusercontent.com/75679146/213925936-eee2f4d9-a195-4848-9791-9ebb1197ca83.png)

![image](https://user-images.githubusercontent.com/75679146/213925961-d112a379-8f0a-432f-8ed8-1ae24f1c8363.png)

### Mail

    En este job haremos que envie un mensaje a los usuarios del repositorio, para ello creamos un nuevo job en el workflow llamado
    email_execution, el cual esperará a todos los jobs anteriores para recuperar el resultado de cada uno de ellos y enviar un email
    a la persona la cuál ha sido configurada.
    
    Para ello creamos un action donde le pasaremos todos los inputs necesarios para realizar el job:
    
![image](https://user-images.githubusercontent.com/75679146/213926087-da93d58b-997a-443e-9511-b18a80c78737.png)
    
    Y al igual que con la acción de Badge, tendremos que compilar el action con @vercel/ncc.
    
![image](https://user-images.githubusercontent.com/75679146/213926150-2204be87-ae20-4b4b-a004-2aa00839feec.png)
    
    Para este job será necesario instalar las dependencias necesarias:
- npm i @actions/core
- npm i nodemailer

![image](https://user-images.githubusercontent.com/75679146/213926189-3e66d3f3-acae-45cc-a8f6-1d10f717d4c4.png)

Para finalizar , deberemos configurar nuestras contraseñas de aplicación en google

![image](https://user-images.githubusercontent.com/75679146/213926292-e7c61d51-e141-41a7-9b2c-fe83491c7746.png)


### 





