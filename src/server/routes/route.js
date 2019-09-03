//todas las rutas de gmail...
const express = require('express');
const router = express.Router();
//para subir imagenes
const path = require('path');
const multer = require('multer');
const fs = require('fs');

router.get('/', (req, res)=>{
    res.render('login', {title: 'Servidor de chat'})
})

//subir la imagen 
let storage = multer.diskStorage({
    destination: (req, file, cb)=>{ 
        cb(null, '../../public/img/')},
    filename: (req, file, cb)=>{ 
        cb(null,file.fieldname+'-'+file.filename+'-'+Date.now()+path.extname(file.originalname))
    }
});

const upload = multer({storage});
const multipart = require('connect-multiparty');
const md_upload = multipart({uploadDir: './'});
router.post('/sign-in', carga);


async function carga(req, res){
    const imageTempPath = req.file.path;
    const targetPath = path.resolve(`${req.file.destination}/${req.file.originalname}`)
    //console.log(targetPath);
    try{
        await fs.rename(imageTempPath, targetPath, err=>{
            if (err) console.log('Error:'+err);
            
        });
    }catch(err){
        console.log('El error capturado es: '+err);
    }
    res.render('inbox', {user: req.body.nick, avatar: req.file.originalname});
}


module.exports = router;