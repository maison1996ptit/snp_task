const express = require('express');
const app = express();
const http = require('http');
require('dotenv').config();
const expressLayout = require('express-ejs-layouts');
const homeRouter = require('./router/homeRouter')

app.set('view engine','ejs');
app.set('views','./views');

let PORT = process.env.PORT;
let HOSTNAME = process.env.HOSTNAME;

app.use(expressLayout);
app.use('/public', express.static('public'))


app.get('/',homeRouter.router);


app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});