const express = require("express");
const bodyParser=require('body-parser');
const path =require("path");
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer =require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const app = express();



app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set("view engine", "ejs");

//mongo uri
const mongoURI= 'mongodb://localhost:8080/dereks';

//create mongo connection

const conn = mongoose.createConnection(mongoURI)
mongoose.connect('mongodb://localhost:27017/dereks', (err, db)=>{

        if(err) console.log(err);
    console.log("Connected to MongoDB")
});
// initialize grid stream
let gfs;
conn.once('open',() =>{
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("uploads");
} )
//create storage object
const storage = new GridFsStorage({
    url: mongoURI,
    file:(req, file) =>{
        return new Promise((resolve, reject)=>{
            crypto.randomBytes(16, (err, buf)=>{
            if(err){
                return reject(err);
            }
            const filename = buf.toString('hex')+ path.extname(file.originalname);
            const fileInfo ={
                filename: filename,
                bucketName : 'uploads'
            };
            resolve(fileInfo);
        });
        });
    }

});
//pass in storage engine
//upload variable acts as middleware to upload images
const upload = multer({ storage });

//@route GET 
//@desc loads form
app.get('/', (req, res) =>{
    res.render('index');

});
//@route POST/upload
//@desc Uploads file to DB
app.post('/upload',  upload.single("file"), (req, res)=>{
    res.redirect('/');
    });

    //@route GET  /files
    //this should display all files in json
    app.get('/files', (req, res)=>{
gfs.files.find().toArray( (err, files)=>{
    if(!files|| files.length === 0){
        return res.status(404).json({
            err:"No files exist"
    });
}
return res.json(files);
    })
});

const port = 8080;

app.listen(port, () => console.log("Server started on port " + port));