 const request = require('supertest');
 const app = require('../../src/app');
const connection = require('../../src/database/connection');

 describe('ONG', () => {
  beforeEach(async () => {
    // await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll( async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
  const response = await request(app)
    .post('/ongs')
    // .set('Authorization', 'ads') -> HEADER -> PROFILE
    .send({
      name     : "Ong Name para o teste",
      email    : "OngParaOTeste@email.com",
      whatsapp : "1234567890",
      city     : "Cidade para o Teste",
      uf       : "MA"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});