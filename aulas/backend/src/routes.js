const express = require('express');
// const crypto =  require('crypto');
const { celebrate, Joi, Segments} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
// routes.post('/ongs', OngController.create);
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), OngController.create);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}),IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete)

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

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