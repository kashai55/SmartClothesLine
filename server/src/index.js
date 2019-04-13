'use strict';
const Hapi = require("hapi");
const mongoose = require ('mongoose');
import CreateLoginsRoutes from "./api/v1/login";


var lineUp = false;
var tentUp = false;
var sensorState = true;

//Connect to mongo instance
mongoose.connect('mongodb+srv://prueba:prueba123@clustertendedero-qbev4.mongodb.net/test?retryWrites=true')
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

// Create a server with a host and port
const server = Hapi.server({
  host: '192.168.1.27',
  port: 8080
});

CreateLoginsRoutes(server);

// Add the route
server.route({
  method: 'GET',
  path: '/clothesline/updown',
  handler: function(request, h) {
    return lineUp;
  }
});

server.route({
    method: 'GET',
    path: '/clothesline/openclosed',
    handler: function(request, h) {
      return tentUp;
    }
  });

server.route({
  method: 'GET',
  path: '/clothesline/sensor',
  handler: function(request, h) {
    return sensorState;
  }
});

server.route({
    method: 'POST',
    path: '/clothesline/updown',
    handler: function (request, h) {
        const payload = request.payload;
        console.log("este s mi payload UPDOWN:" + payload.line_Up);  //quitar luego
        lineUp = payload.line_Up;
        return `Recibed in server ${encodeURIComponent(payload.line_Up)}!`;
    }
});

server.route({
    method: 'POST',
    path: '/clothesline/openclosed',
    handler: function (request, h) {
        const payload = request.payload;
        console.log("este s mi payload OPENCLOSE:" + payload.tent_Up);  //quitar luego
        tentUp = payload.tent_Up;
        return `Recibed ${encodeURIComponent(payload.tent_Up)}!`;
    }
});

server.route({
  method: 'POST',
  path: '/clothesline/sensor',
  handler: function (request, h) {
      const payload = request.payload;
      console.log("este s mi payload SENSOR:" + payload.sensor_State);  //quitar luego
      sensorState = payload.sensor_State;
      return `Recibed ${encodeURIComponent(payload.sensor_State)}!`;
  }
});

// Start the server
const start = async function() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
};

start();
