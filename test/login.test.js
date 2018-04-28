var expect = require('chai').expect;
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


describe.skip('登录测试', function(){
    before('before', function(){
        var driver = new webdriver.Builder()
            .forBrowser('plantomjs')
            .build();
        driver.get('http://www.hostedredmine.com/login');
    });
    after('after', function(){
        driver.quit();
    });
    it('用户名密码错误', function(){
        driver.findElement(By.id('username')).sendKeys('test_2016_1');
        driver.findElement(By.id('password')).sendKeys('123');
        driver.findElement(By.name('login')).click()
        driver.findElement(By.id('flash_error')).getText().then((text) => {
            expect(text).to.be.equal('无效的用户名和密码');
        })
    })
})

