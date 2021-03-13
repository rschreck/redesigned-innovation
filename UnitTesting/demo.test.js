const chai = require("chai");
const expect = chai.expect;
const chailAsPromised = require("chai-as-promised");
chai.use(chailAsPromised);
const rewire = require("rewire");

var demo = rewire("./demo");

describe("demo", () => {
  before(() => {
    console.log("***********Before*******-" + process.env.NODE_ENV);
  });
  after(() => {
    console.log("***********After*******");
  });
  // beforeEach(() => {
  //   console.log("***********Before Each*******");
  // });
  // afterEach(() => {
  //   console.log("***********After Each*******");
  // });
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
    it("should test objects with same key/val", () => {
      expect({ name: "Renuka" }).to.be.deep.equal({ name: "Renuka" });
      expect({ name: "Renuka" }).to.have.property("name").to.equal("Renuka");
    });
    it("should test callback", (done) => {
      demo.addCallback(1, 2, (err, result) => {
        expect(err).to.not.exists;
        expect(result).to.equal(3);
        done();
      });
    });
    it("should test promise resolve", (done) => {
      demo
        .addPromise(1, 3)
        .then((result) => {
          expect(result).to.equal(4);
          done();
        })
        .catch((ex) => {
          console.log("caught error");
          done(ex);
        });
    });
    it("should test promise with async/await", async () => {
      let result = await demo.addPromise(1, 3);
      expect(result).to.equal(4);
    });
    it("should test add promise with chai-promised", async () => {
      let result = await demo.addPromise(1, 3);
      expect(result).to.eventually.equal(4);

      //  await expect(demo.addPromise(1, 2)).to.eventually.equal(3);
    });
    it("is a pending test");
  });
});
