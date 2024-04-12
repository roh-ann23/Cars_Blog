const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port = process.env.PORT || 4000;


require('dotenv').config();

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(expressLayouts)

app.use(cookieParser('CarSecure'));
app.use(session({
  secret: 'CarSecureSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());

app.set('view engine','ejs');
app.set('layout','./layouts/main');

const routes = require('./server/routes/carRoutes.js');
app.use('/',routes)

app.listen(port, ()=>{
    // console.log(`Server is listening to ${port}`);
   `Server is running ${process.env.DEV_MODE} mode on port ${PORT} `
})
