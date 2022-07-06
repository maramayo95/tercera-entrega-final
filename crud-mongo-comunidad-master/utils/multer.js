const multer = require('multer')

const uploadFile = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname+ 'public/uploads')
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now())
        }
    })
    const upload = multer({storage})
    return upload
}

module.exports = uploadFile