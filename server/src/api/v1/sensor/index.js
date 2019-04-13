import Sensor from "../../../models/sensor";
function CreateSensorsRoutes (server){

server.route([
    {
        method:"GET",
        path: "/api/v1/sensor",
        handler: function (request,reply){
            const {userName,password}= request.query;
            return Sensor.find()
        }

    },
    {
        method:"POST",
        path: "/api/v1/sensor",
        handler: function (request,reply){
            const {temperature,humidityPercent,waterLevel}= request.payload;
            const sensor =new Sensor ({
                temperature,humidityPercent,waterLevel
            })
            return sensor.save();
        }

    }
])

}
export default CreateSensorsRoutes

