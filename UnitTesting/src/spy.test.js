const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
const rewire = require("rewire");
var fake = require("./spy");
//const { expect } = require("chai");
describe("fake", () => {
  context("test doubles", () => {
    it("should spy on console.log", () => {
      let spy = sinon.spy(console, "log");
      fake.writeLog();
      expect(spy.calledOnce).to.be.true;
      expect(spy).to.have.calledOnce;
      spy.restore();
    });
  });
});
