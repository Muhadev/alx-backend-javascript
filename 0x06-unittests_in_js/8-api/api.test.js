// 8-api/api.test.js
const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the app
const port = 7865;
let server;

describe('Index page', () => {
  before((done) => {
    // Start the server
    server = app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      done();
    });
  });

  after((done) => {
    // Close the server
    if (server) {
      server.close(done);
    }
  });

  it('should return the correct status code and result', (done) => {
    request(`http://localhost:${port}`, (error, response, body) => {
      if (error) return done(error);

      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
