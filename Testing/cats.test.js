
const rewire = require('rewire');
const expect = require('chai').expect; // not using assert and should, only expect
const sinon = require('sinon');

const cats = require('./cats');
const rewired = rewire('./cats.js');

describe('Tests for Cats File:', () => {

  describe('Public createCat function', () => {
    beforeEach(() => {
      
    });
    afterEach(() => {
      
    });

    it('should return an object', () => {
      let result = cats.createCat('Junny');
      expect(result).to.be.an('object');
    });
  });

  describe('Private createFunnyName function', () => {
    function replace(nickname) {
      return `<<${nickname}>>`;
    }

    let privateFunc = rewired.__get__('createFunnyName');
    sinon.stub(rewired, 'createFunnyName').returns('555');
    // let result = privateFunc('kit');
    let prv = rewired.__set__('createFunnyName', replace);

    let result = privateFunc('kit');
    console.log('privateFunc', privateFunc(5));

    it('should return a string', () => {
      expect(result).to.be.string;
    });

    it('should return an expected string', () => {
      expect(result).to.be.equal('^^kit^^');
    });
  });
});




// Hooks in Mocha:
describe('collection of individual test spec', function () {
  before(function () {
    // runs before all tests in this block
  });
  after(function () {
    // runs after all tests in this block
  });
  beforeEach(function () {
    // runs before each test in this block
  });
  afterEach(function () {
    // runs after each test in this block
  });
  // test cases
});
