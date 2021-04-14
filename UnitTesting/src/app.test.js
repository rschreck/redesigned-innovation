const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
const rewire = require("rewire");
const request = require("supertest");

var app = rewire("./app");

describe("app", () => {
  context("GET /", () => {
    it("should get /", (done) => {
      request(app)
        .get("/")
        .expect(200)
        .end((err, response) => {
          expect(response.body).to.have.property("name").to.equal("MyProject");
          done(err);
        });
    });
  });
});
