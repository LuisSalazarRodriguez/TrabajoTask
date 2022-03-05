const express = require('express');
const {config} = require('./config');

const app = express();
app.set('port',config.port);

//middlewares
app.use(express.json());

//importamos routes
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');

//rutas
app.get('/',(req,res)=>res.json({status:true,content:'api activa'}));
app.use('/projects',projectRoutes);
app.use('/tasks',taskRoutes);

module.exports = app
