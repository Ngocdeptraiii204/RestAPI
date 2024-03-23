const multer = require('multer')
const _storage = multer.diskStorage({
    destination: function(reg ,file,cb){
        cb(null,'public/uploads')
    },
    filename: function(reg, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({
    storage : _storage,
    limits:{
        fieldSize:5*1024*1024
    }
})
module.exports = upload