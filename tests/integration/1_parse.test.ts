import { expect, should } from 'chai';
import sinon from 'sinon';
import supertest from 'supertest';
import app from '../../src/app';

const baseUrl = '/api';
should();

describe('Routes', () => {
  let server;
  let request;

  before(async () => {
    server = app.listen();
    request = supertest.agent(server);
  });

  after(async () => {
    server.close();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('GET /_healthz', () => {
    it('should have a health check endpoint', async () => {
      await request
        .get('/_healthz')
        .expect(200);
    });
  });

  describe('POST /api/v1/parse', () => {
    it('should parse data', async () => {
      const response = await request
        .post('/api/v1/parse')
        .send({
          data: 'JOHN0000MICHAEL0009994567',
        })
        .expect(200);

      expect(response.body.statusCode).to.be.equal(200);
      expect(response.body.data.firstName).to.be.equal('JOHN0000');
      expect(response.body.data.lastName).to.be.equal('MICHAEL000');
      expect(response.body.data.clientId).to.be.equal('9994567');
    });
  });

  describe('POST /api/v2/parse', () => {
    it('should parse data', async () => {
      const response = await request
        .post('/api/v2/parse')
        .send({
          data: 'JOHN0000MICHAEL0009994567',
        })
        .expect(200);

      expect(response.body.statusCode).to.be.equal(200);
      expect(response.body.data.firstName).to.be.equal('JOHN');
      expect(response.body.data.lastName).to.be.equal('MICHAEL');
      expect(response.body.data.clientId).to.be.equal('9994567');
    });
  });
});
