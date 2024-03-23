var express = require('express');
var router = express.Router();
const Upload = require('../config/upload')

router.post('/test', function(reg, res, next) {
    res.send('respond with a resource upload file');
});

router.post('/mulUpload', Upload.array('images', 5), async(reg, res) => {
   try {
    const{files}= reg
    const urlImages = files.map((file)=>`${reg.protocol}://${reg.get('host')}/uploads/${file.filename}`)
    console.log(urlImages);
   } catch (error) {
    console.log(error);
   }
});
module.exports = router;