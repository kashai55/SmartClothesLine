import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
    userName: String,
    password: String,
    email: String
})

export default mongoose.model('User', UserSchema)
