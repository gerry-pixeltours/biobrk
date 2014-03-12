var superagent = require('superagent'),
    expect = require('expect.js');

describe('express rest api server', function(){
  it('responds to the route "/timer/0001"', function(done){
    superagent.get('http://localhost:3000/timer/0001')
      .end(function(error, result){
        expect(error).to.eql(null);
      })
  })
});