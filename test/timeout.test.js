var expect = require('chai').expect;

describe('异步测试', function(){
    it.skip('测试应该在4000ms后结束', function(done){
        var b = true;
        function fn(){
            b = false;
            expect(b).to.be.not.ok;
            done();
        }
        setTimeout(fn, 4000);
    })
})