const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')
const dotenv = require('dotenv')
const router = require('./routes/nodemailerRoutes')
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.status(200).send({message: 'Endpoint works'})
})

app.use('/api/', router)

app.listen(port, () => console.log(`Server has been started on port ${port}...`))