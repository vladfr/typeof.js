'use strict';

var expect = require('chai').expect;
var typeofjs = require('../index');

describe('#typeofjs', function () {
   it('should return string', function() {
      var result = typeofjs(['a string', 'a different string', 'another different string']);
      expect(result).to.equal('string');
   });

    it('should return natural from strings', function() {
        var result = typeofjs(['15', '2', '3', '7', '7', '5']);
        expect(result).to.equal('natural');
    });

    it('should return natural from strings, including empty string', function() {
        var result = typeofjs(['15', '2', '3', '7', '7', '5', '']);
        expect(result).to.equal('natural');
    });

    it('should return natural from strings, including null', function() {
        var result = typeofjs(['15', '2', '3', '7', '7', '5', null]);
        expect(result).to.equal('natural');
    });

    it('should return natural from ints and strings', function() {
        var result = typeofjs(['15', '2', 3, 7, 7, 5]);
        expect(result).to.equal('natural');
    });

    it('should return integer from ints and strings', function() {
        var result = typeofjs(['-15', '2', 3, -3, '7', 7, 5]);
        expect(result).to.equal('integer');
    });

    it('should return float from floats and strings', function() {
        var result = typeofjs(['-15.2', '2', 3.5, -3, '7', 7, 5]);
        expect(result).to.equal('float');
    });

    it('should return string from combo', function() {
        var result = typeofjs(['-15.2', 'testing', 'Just another test', -3, '7', 7, 5]);
        expect(result).to.equal('string');
    });

    it('should return flag', function() {
        var result = typeofjs(['on', 'on', '']);
        expect(result).to.equal('flag');
    });

    it('should return flag with nulls and empties', function() {
        var result = typeofjs(['', null, 'yes', '', '', 'yes']);
        expect(result).to.equal('flag');
    });

    it('should return enum', function() {
        var result = typeofjs(['fruit', 'fruit', 'vegetable', 'fruit', 'vegetable', 'donotlike', '', 'fruit', 'donotlike']);
        expect(result).to.equal('enum');
    });

    // negatives

    it('should return string, could not infer', function() {
        var result = typeofjs(['fruit', 5]);
        expect(result).to.equal('string');
    });
});