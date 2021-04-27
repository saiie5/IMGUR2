const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');
const Image = require('./models/images');
const router = express.Router();
var path = require('path');
var fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

mongoose.connect('mongodb+srv://mcontoor:mcontoor123@healme-bwqpu.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
.then(() => console.log('DB Connected'))
.catch(err => console.log(err));


const multerConf = {
    storage: multer.diskStorage({
        destination: function(req, file, next) {
            next(null, './public/uploads');
        },
        filename: function(req, file, next) {
            const ext = file.mimetype.split('/')[1];
            const ogname = file.originalname.split('.')[0]
            next(null, file.fieldname + ogname +'-' + Date.now() + '.' + ext);
        }
    }),
    fileFilter : function(req, file, next) {
        if (!file) {
            next();
        }
        const image = file.mimetype.startsWith('image/');
        if(image) {
            next(null,true)
        } else {
            console.log('file type nor suported')
            // next({message: "File type not supported"}, false);
        }
    }
};

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

router.post('/upload', multer(multerConf).single('photo'), (req, res) => {
    var image = new Image()
        image.title = req.body.name,
        image.filename = req.file.filename,
        image.data = fs.readFileSync(req.file.path),
        image.contentType = req.file.mimetype
    
    image.save()
    .then(image => console.log('new image uploaded ', image))
    .catch(err => console.log(err));
    res.send('Upload successful')
})
 
app.use('/', router);

app.listen(5001, () => console.log("Server is running in  the port ", 5001));
