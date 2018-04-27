var expect = chai.expect;

describe('browser测试', function(){
    it('1 + 2 = 3', function(){
        expect(add(1, 2)).to.be.equal(3);
    })
    it('3 + 4 = 7', function(){
        expect(add(3, 4)).to.be.equal(7);
    })
})