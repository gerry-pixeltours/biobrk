var superagent = require('superagent'),
    expect = require('expect.js'),
    SUCCESS = 200;

describe('express rest api server', function(){
  it('responds to the route "/"', function(done){
    superagent.get('http://localhost:3000/')
      .end(function(error, result){
        expect(result.status).to.eql(SUCCESS);
        done();
      });
  });

  it('responds to the route "/timer/0001"', function(done){
    superagent.get('http://localhost:3000/timer/0001')
      .end(function(error, result){
        expect(result.status).to.eql(SUCCESS);
        done();
      });
  });

  it('body returns a timer object', function(done){
    superagent.get('http://localhost:3000/timer/0001')
      .end(function(error, result){
        expect(typeof result.body.timer).to.eql('object');
        done();
      });
  });
})