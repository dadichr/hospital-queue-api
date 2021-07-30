const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientSchema = new Schema ({
    fullname: String,
    dob: String,
    gender: String,
    bpjs_no: String,
    address: String,
    address2: String,
    phone: String,
    region: String,
    province: String,
})

const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient