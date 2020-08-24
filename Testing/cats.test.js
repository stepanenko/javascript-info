
const rewire = require('rewire');
const expect = require('chai').expect;
const sinon = require('sinon');

const cats = require('./cats');
const wired = rewire('./cats.js');

describe('Cats File:', () => {

  describe('Public createCat function', () => {
    it('should return an object', () => {
      let result = cats.createCat('Junny');
      expect(result).to.be.an('object');
    });
  });

  describe('Private createFunnyName function', () => {
    let privateFunc = wired.__get__('createFunnyName');
    let result = privateFunc('kit');

    it('should return a string', () => {
      expect(result).to.be.string;
    });

    it('should return an expected string', () => {
      expect(result).to.be.equal('^^kit^^');
    });
  });
});
