const express = require('express')
const path = require('path')
const multer = require('multer');

const app = express();

//importing routes
const indexRoutes = require('./routes/route');

//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, '../public/views'))
app.set('view engine', 'ejs')

//middlewares
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(multer({dest: path.join(__dirname, '../public/img')}).single('avatar')) //para la subida de archivos


app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})
