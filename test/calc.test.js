var add = require('../calc.js').add;
var expect = require('chai').expect;

describe('加法函数的测试', function(){
    it('测试1+2=3', function(){
        expect(add(1, 2)).to.be.equal(3);
    });
    it('测试返回的结果的类型是不是number', function(){
        expect(add(3, 4)).to.match(/\d/);
    });
})