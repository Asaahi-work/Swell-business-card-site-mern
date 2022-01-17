const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

router.post('/send/message', async (req, res) => {

    const {email, name, message} = req.body

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure:false,
        service: 'gmail',
        auth: {
            user: 'tpt.testhdhd@gmail.com',
            pass: 'olegthebest'
        }
    })

    const mailOptions = {
        from: email,
        to: 'tpt.testhdhd@gmail.com',
        subject: `Message from ${email}`,
        text: `User with email ${email} sent a request.`
    }


    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error)
            res.status(500).send('error')

            if(email.length < 1) {
                return res.status(500).send('Email is required.')
            }

        } else {
            console.log(info.response)
            res.status(200).send('success')
        }
    })
})

module.exports = router