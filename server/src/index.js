'use strict';

import Hapi from 'hapi';
import mongoose from 'mongoose';
import CreateLoginsRoutes from "./api/v1/login";
import CreateSensorsRoutes from "./api/v1/sensor";
//Connect to mongo instance

mongoose.connect('mongodb+srv://prueba:prueba123@clustertendedero-qbev4.mongodb.net/test?retryWrites=true')
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

// Create a server with a host and port
const server=Hapi.server({
    host:'192.168.1.5',
    port:8000
});
CreateLoginsRoutes(server);
CreateSensorsRoutes(server);
// Start the server
const start =  async function() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
