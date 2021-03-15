const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
const rewire = require("rewire");
var stubfile = require("./stub");
describe("Stub", () => {
  context("test stubs", () => {
    it("should spy on console.warn", () => {
      let stub = sinon.stub(console, "warn");
      stubfile.writeLog();
      expect(stub.calledOnce).to.be.true;
      expect(stub).to.have.calledOnce;
      stub.restore();
    });
  });
});
