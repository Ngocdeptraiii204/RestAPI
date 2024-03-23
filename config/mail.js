const nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
    service:"gmail",
    auth:{
        user: "nguyenphamtuanngoc1003@gmail.com",
        pass:"qscs wejt fkau wroc"
    }
})
module.exports = transporter