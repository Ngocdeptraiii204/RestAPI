var express = require('express');
var router = express.Router();
const Transporter = require('../config/mail')


/*-------------Get test----------- */
router.post('/test', function(req, res, next){
    const mailOptions = {
        from: "nguyenphamtuanngoc1003@gmail.com",
        to: "ngocnptpd09488@fpt.edu.vn",
        subject: 'Text Email',
        text:'This is a test email sent from Node.js with Nodemaoler.'
    };
    //Send the email
    Transporter.sendMail(mailOptions, function(error, info){
        if(error){
         res.status(500).json({error:'Send mail fail: '+ error});
        }else{
            res.status(200).json({message: 'Send email sent: ' + info.response});
        }
    });
});

module.exports = router;