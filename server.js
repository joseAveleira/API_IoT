const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const sensorRoutes = require('./routes/sensors.routes');
const readingRoutes = require('./routes/readings.routes');
const authRoutes = require('./routes/auth.routes');
const broker = require('./services/broker');

const app = express();
const port = 3000;

// Conectar a la base de Mongo
connectDB();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Rutas dos git commit -m "actualizer readme"
//senosres y lecturas
app.use('/sensors', sensorRoutes);
app.use('/readings', readingRoutes);
app.use('/auth', authRoutes);

// Ruta de prueba
app.get('/test', (req, res) => res.json({ msg: 'El API REST funciona!' }));

// Arrancar servicios
broker.startBroker(); // Iniciar el broker MQTT

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
