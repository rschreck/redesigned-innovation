const chai = require("chai");
const expect = chai.expect;

const rewire = require("rewire");

var demo = rewire("./demo");

describe("demo", () => {
  before(() => {
    console.log("***********Before*******");
  });
  after(() => {
    console.log("***********After*******");
  });
  beforeEach(() => {
    console.log("***********Before Each*******");
  });
  afterEach(() => {
    console.log("***********After Each*******");
  });
  context("add", () => {
    it("should add two numbers", () => {
      expect(demo.add(1, 2)).to.equal(3);
    });
  });
  context("subtract", () => {
    it("should subtract two numbers", () => {
      expect(demo.subtract(3, 1)).to.equal(2);
    });
    context("multiply two numbers", () => {
      it("should multiply two numbers", () => {
        expect(demo.multiply(5, 2)).to.equal(10);
      });
    });
  });
  context("null test", () => {
    it("should test null", () => {
      expect(null).to.be.null; // Recommended
    });
    it("should test undefined", () => {
      expect(undefined).to.be.undefined;
    });
    it("should test true", () => {
      expect(true).to.equal(true);
    });
    it("should test callback", (done) => {
      demo.addCallback(1, 2, (err, result) => {
        expect(err).to.not.exists;
        expect(result).to.equal(3);
        done();
      });
    });
    it("is a pending test");
  });
});
