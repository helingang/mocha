var today = require('../date.js').today;
var expect = require('chai').expect;

describe('测试日期函数today', function(){
    it('返回值应当是当前年份', function(){
        expect(today()).to.be.equal(new Date().getFullYear())
    })
})