const express = require('express')

const Patient = require('../Patient')
const approute = express.Router()

approute.post('/patients', (req, res) => {
    const {fullname, dob, gender, bpjs_no, address, address2, phone, region, province} = req.body
    console.log(fullname);
    Patient.create({fullname, dob, gender, bpjs_no, address, address2, phone, region, province})
      .then((result) => {
        res.status(201).json({
          msg: 'success',
          data: result,
        })
      })
      .catch((err) => {
        res.status(500).json({
          msg: 'Failed creating new Patient',
          details: err,
        })
      })
})

approute.get('/patients', (req, res) => {
    Patient.find()
    .then(results => {
        res.status(200).json({
            msg:'success',
            data: results
        })
    })
    .catch(err => {
        res.status(500).json({
            msg: 'error get data',
            details: err,
        })
    })
})

module.exports = approute