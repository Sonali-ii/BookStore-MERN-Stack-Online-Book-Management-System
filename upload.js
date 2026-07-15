const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname);
    }
});

module.exports = multer({ storage });
