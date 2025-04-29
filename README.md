# API REST para Curso de IoT

TEST README Este proyecto implementa una API REST para gestionar datos de sensores en el contexto de un curso de Internet de las Cosas (IoT). Permite registrar usuarios, autenticarse, gestionar sensores y registrar/consultar lecturas de sensores.

## Tecnologías Utilizadas

*   **Node.js:** Entorno de ejecución para JavaScript del lado del servidor.
*   **Express:** Framework web para Node.js, utilizado para construir la API REST.
*   **MongoDB:** Base de datos NoSQL utilizada para almacenar la información de usuarios, sensores y lecturas.
*   **Mongoose:** ODM (Object Data Modeling) para MongoDB y Node.js, facilita la interacción con la base de datos.
*   **bcryptjs:** Librería para el hashing seguro de contraseñas.
*   **jsonwebtoken:** Librería para la generación y verificación de JSON Web Tokens (JWT) para la autenticación.
*   **moment:** Librería para el manejo de fechas y horas.
*   **mongo-sanitize:** Librería para sanitizar datos y prevenir ataques de inyección NoSQL.
*   **cors:** Middleware para habilitar Cross-Origin Resource Sharing.
*   **dotenv:** Librería para cargar variables de entorno desde un archivo `.env`.

## Estructura del Proyecto

```
.
├── config/
│   └── db.js           # Configuración de la conexión a la base de datos MongoDB
├── controllers/
│   ├── auth.controller.js # Lógica para autenticación y registro de usuarios
│   ├── readings.controller.js # Lógica para operaciones CRUD de lecturas
│   └── sensor.controller.js # Lógica para operaciones CRUD de sensores
├── middlewares/
│   └── auth.Middleware.js # Middleware para verificar la autenticación JWT
├── models/
│   ├── reading.js      # Modelo Mongoose para las lecturas
│   ├── sensor.js       # Modelo Mongoose para los sensores
│   └── user.js         # Modelo Mongoose para los usuarios
├── resources/          # Archivos auxiliares (colección Postman, scripts, datos de ejemplo)
│   ├── API Datos.postman_collection.json
│   ├── export_data.sh
│   ├── import_data.sh
│   ├── readings_back.json
│   ├── readings.json
│   ├── sensors_back.json
│   └── sensors.json
├── routes/
│   ├── auth.routes.js  # Rutas para autenticación y registro
│   ├── readings.routes.js # Rutas para las lecturas
│   └── sensors.routes.js # Rutas para los sensores
├── .env.example        # Archivo de ejemplo para variables de entorno (deberías crearlo)
├── package.json        # Metadatos del proyecto y dependencias
├── server.js           # Punto de entrada principal de la aplicación
└── README.md           # Este archivo
```

## Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd API_IoT
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
3.  **Configura las variables de entorno:**
    *   Crea un archivo `.env` en la raíz del proyecto.
    *   Copia el contenido de `.env.example` (si existe) o añade las siguientes variables:
        ```
        PORT=3000 # O el puerto que prefieras
        MONGODB_URI=mongodb://localhost:27017/iot_database # Tu URI de conexión a MongoDB
        JWT_SECRET=tu_secreto_jwt_muy_seguro # Una cadena secreta segura para JWT
        ```
4.  **Inicia el servidor:**
    ```bash
    node server.js
    ```
    O si tienes `nodemon` instalado para desarrollo:
    ```bash
    nodemon server.js
    ```

## Uso (Endpoints de la API)

La API expone los siguientes endpoints:

### Autenticación (`/api/auth`)

*   `POST /register`: Registra un nuevo usuario.
*   `POST /login`: Inicia sesión y obtiene un token JWT.

### Sensores (`/api/sensors`)

*   `GET /`: Obtiene todos los sensores (requiere autenticación).
*   `GET /:id`: Obtiene un sensor por su ID (requiere autenticación).
*   `POST /`: Crea un nuevo sensor (requiere autenticación).
*   `PUT /:id`: Actualiza un sensor existente por su ID (requiere autenticación).
*   `DELETE /:id`: Elimina un sensor por su ID (requiere autenticación).

### Lecturas (`/api/readings`)

*   `GET /sensor/:sensorId`: Obtiene todas las lecturas de un sensor específico. Permite consultas complejas pasadas como JSON en `sensorId`.
*   `GET /sensor/:sensorId/timerange`: Obtiene lecturas de un sensor en un rango de fechas especificado por query params `start` y `end` (formato `DD-MM-YYYY`).
*   `POST /`: Crea una nueva lectura para un sensor.
*   `DELETE /sensor/:sensorId`: Elimina todas las lecturas de un sensor específico. Permite consultas complejas pasadas como JSON en `sensorId`.

*(Nota: Revisa los archivos en `routes/` para ver los detalles exactos y si se requiere autenticación para cada ruta específica).*

## Scripts

*   `npm test`: (Actualmente no definido) Ejecutaría las pruebas unitarias/integración.

*(Puedes añadir aquí la descripción de los scripts `.sh` si son relevantes para el uso general del proyecto).*

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir los cambios propuestos.

## Licencia

[ISC](LICENSE) *(Basado en `package.json`. Puedes crear un archivo LICENSE si lo deseas)*
