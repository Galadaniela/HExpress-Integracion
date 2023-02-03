# HW 05: Express | Integración

## **Duración estimada 🕒**

x minutos

<br />

---

## **Rick & Morty App**

### **INTRO**

En base a lo practicado en la homework Exercises, vamos a crear rutas con sus respectivas solicitudes HTTP que se van a ir guardando en un array que simulará nuestra base de datos. En esta homework consumiremos la información de la API de Rick & Morty que luego enviaremos a nuestro frontend.

<br />

---

### **👩‍💻 EJERCICIO 1**

### **Instalar Express**

1. Debes instalar express con `npm install express`.

2. Corrobora que se ha instalado abriendo tu archivo package.json dentro de `dependencies`, sección que se ha creado automáticamente cuando instalaste express o también puedes verla dentro de la carpeta node_modules.

<br />

---

### **👩‍💻 EJERCICIO 2**

### **Crear servidor con Express**

1. Anteriormente habías creado tu servidor con node puro en el archivo server.js, ahora lo cambiaremos para utilizar directamente el framework Express.

2. Define una constante que llamada `express` y en ella guarda la función `require` que incluya el módulo **express**, de esta forma podemos usar el paquete **Express** que instalamos.

3. Define una segunda constante llamada `app` en la que guardes la ejecución de express, ello se encarga de manejar las solicitudes y respuestas cliente-servidor.

```javascript
const express = require("express");
const app = express();
```

😎 Acabas de crear tu servidor con Express!!

<br />

---

### **👩‍💻 EJERCICIO 3**

### **Iniciar servidor**

1. Crea un archivo llamado **start.js** en el que importes el servidor que se encuentra configurado en el archivo **server.js**, desde este archivo levantaremos el servidor.

2. En el archivo **package.json** debes cambiar el script `start` donde su valor sea `"nodemon ./src/routes/start.js"`

```javascript
    "start": "nodemon ./src/routes/start.js",
```

3. Es hora de iniciar el servidor, con el método listen de express, coloca a escuchar el servidor en el puerto 3001.

<br />

---

### **👩‍💻 EJERCICIO 4**

### **Crear Rutas**

En la constante **app** ahora tenemos acceso a los métodos HTTP, vamos a necesitar para este ejercicio el método `get` y traer información, este método recibe dos argumentos: el endpoint (path) y una función callback.
Esta función callback recibe dos parámetros: el objeto `request`, por convención conocido como `req` y el objeto `response` por convención conocido como `res`. 

🔹 Lo que hay que hacer:

1. Anteriormente, en la homework de **Web Server** habíamos creado una ruta get que obtiene el personaje de Rick & Morty por **id** mediante un archivo que tenemos llamado `data.js`, ahora traeremos esa información directamente de la API de Rick & Morty con la url `https://rickandmortyapi.com/api/character`. Para ello, hagamos los siguientes cambios:
    
    a. Borremos o comentemos la ruta get anteriormente creada en la homework **Web server**.

    b. Crea la ruta **get/`rickandmorty`/character/:id**, dentro de la ruta aplica la lógica y trae la información de la API de Rick & Morty: https://rickandmortyapi.com/api/character/{id}  para traer solo los datos que precisa el componente **Card.jsx** en el front, envía estos datos como respuesta:

    - id
    - name
    - species
    - gender
    - image

2. Crea una segunda ruta **get/`rickandmorty`/detail/:detailId**, 
dentro de la ruta aplica la lógica y trae la información de la API de Rick & Morty: https://rickandmortyapi.com/api/character/{detailId} para traer los datos que precisa el componente **Detail.jsx** en el front, envía estos datos como respuesta:

    - name
    - status
    - species
    - gender
    - origin
    - image

> Hint: Recuerda que los llamados a la API son asíncronos.

3. Define una constante llamada `fav` que sea un arreglo vacío y luego crea las siguientes rutas:

    a. **GET/`rickandmorty`/fav**, que obtenga los personajes guardados en el arreglo **fav**.

    b. **POST/`rickandmorty`/fav**, que guarde los personajes en el arreglo **fav**.

    c. **DELETE/`rickandmorty`/fav/:id**, que elimine el personaje en el arreglo **fav** a partir del **id** que recibe por parámetro.

> Hint: Recuerda modularizar en tu carpeta controllers como lo aprendiste en la homework 03-Promises con los archivos **getCharById.js** y **getCharDetail.js**


<br />

---

### **👩‍💻 EJERCICIO 5**

### **Conectar rutas con frontend**

Por último, recordemos que en el front habíamos configurado la ruta para que consuma los datos desde nuestro servidor.

Ahora dirígete a la carpeta **front** y haz los siguientes cambios:

1. En el componente Detail donde llamamos a la API de Rick & Morty en la ruta **https://rickandmortyapi.com/api/character/** cámbiala por la ruta que creamos en el back: **http://localhost:3001/rickandmorty/detail**

2. En la action para agregar favorito, ahora debes enviar los personajes al endpoint **http://localhost:3001/rickandmorty/fav** con el método `post`.

3. En la action para eliminar favorito, ahora debes enviar el personaje a eliminar al endpoint **http://localhost:3001/rickandmorty/fav** con el método `delete`.

✨✨Llegamos al final de esta homework creamos nuestro servidor y tres rutas para nuestro front!! 🚀🚀
