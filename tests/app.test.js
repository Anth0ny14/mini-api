const request = require('supertest');
const app = require('../src/app');

describe('Prueba unidad /suma', () => {
  test('Suma 2 + 3 = 5', async () => {
    const res = await request(app).get('/suma?a=2&b=3');
    expect(res.statusCode).toBe(200);
    expect(res.body.resultado).toBe(5);
  });

  test('Manejo de parámetros inválidos', async () => {
    const res = await request(app).get('/suma?a=x&b=3');
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});