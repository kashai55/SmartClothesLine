import mongoose from 'mongoose'
const Schema = mongoose.Schema

const SensorSchema = new Schema({
    temperature: String,
    humidityPercent: String,
    waterLevel: String
})

export default mongoose.model('Sensor', SensorSchema)
