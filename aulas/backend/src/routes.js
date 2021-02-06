const express = require('express');
// const crypto =  require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index);

// routes.post('/ongs', async (request, response) => {
  // const { name, email, whatsapp, city, uf } = request.body;
  
  // const id = crypto.randomBytes(4).toString('HEX');

  // await connection('ongs').insert({
  //   id,
  //   name,
  //   email,
  //   whatsapp,
  //   city,
  //   uf,
  // })

  // return response.json({id});
  
/*   const body = request.body;
  console.log(body);
  
  request Body
  app.post('/users/:id', (request, response) => {
  const params = request.params;

request params
app.get('/users', (request, response) => {
  const params = request.query;

app.post('/users', (request, response) => {
return response.send('Hello World');

  return response.json({ //object
    evento: 'Semana OmniStack 11.0 2020',
    aluno: 'Outro nome'
  }); */
// });

// export variable from that file

module.exports = routes;