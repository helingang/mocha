var today = require('../date.js').today;
var expect = require('chai').expect;

describe('测试日期函数today', function(){
    it('返回值应当是当前年份', function(){
        let d = new Date();
        let date = d.getFullYear();
        expect(today()).to.be.equal(date);
    });
    it('年份不应当返回2015', function(){
        let d = new Date();
        let date = d.getFullYear();
        expect(today()).to.be.not.equal(2015);
    });
})
