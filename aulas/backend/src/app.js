// importing anything
// isn't a file, it's a package, so we DON'T have to use the './'
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
// is a file, so we have to use the './'
const routes = require('./routes');

// My app
const app = express();

app.use(cors());
// productions
/* app.user(cors({
  origin: 'http://meuapp.com'
}));
*/

// requisições em json, o body
app.use(express.json());
app.use(routes)

app.use(errors());
// root router
// Request Body


// app.listen(3333); 
module.exports = app;