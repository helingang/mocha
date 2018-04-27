var add = require('../calc.js').add;
var expect = require('chai').expect;

describe('加法函数的测试', function(){
    it('测试1+2=3', function(){
        expect(add(1, 2)).to.be.equal(3);
    });
    it('测试3+4=7', function(){
        expect(add(3, 4)).to.be.equal(7);
    });
    it('测试2+2=4', function(){
        expect(add(2, 2)).to.be.equal(4);
    });

})