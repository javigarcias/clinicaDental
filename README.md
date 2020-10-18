<p align="center">
    <img src="/img/img1.png" >	
</p>

# Clinica Dental Database

_Este proyecto consiste en la creación de una base de datos para la gestión de citas de una clinica dental. Se ha realizado con una base de datos no realicional en MongoDB con encriptación de password en el caso de registro de usuarios. También he utilizado REGEX para introducir un mail valido y un password mas robusto._

## Comenzando 🚀

_Para poder poner en funcionamiento el proyecto en tu maquina local para propositos de desarrollo y pruebas necesitaras instalar las siguiente dependencias:_

```
npm init -y
npm i express mongoose bcryptjs
```
### Endpoints 📌
- /clientes:
    - POST /registro (Registro de cliente nuevo)
    - POST /login (Login cliente ya registrado)
    - PUT /logout (logout cliente logeado)
- /citas:
    - POST /nuevacita (Creación de nueva cita)
    - DELETE /cancelar/:id (Cancelación de una cita)
    - GET /ver/:token (Ver citas pendientes de un usuario mediante su id)

### REGEX 📋

 - PASSWORD: 
    -8/10 caracteres
    -Uso de mayúsculas y minúsculas
    -Uso de al menos un carácter especial

## Ejecutando las pruebas ⚙️

* [HEROKU TEST](https://clinica-dental-db.herokuapp.com/)

## Construido con 🛠️

_Tecnologías utilizadas en el proyecto_

- Javascript
- NodeJS
- Express
- Mongoose
- MongoDB
- Atlas
- Postman
- Heroki
- Git
- GitHub

## Autor ✒️

* **Javier García**  - [javigarcias](https://github.com/javigarcias)

---
⌨️ con ❤️ por [JaviGarcia](https://www.linkedin.com/in/javigarciasanchez/) 😊