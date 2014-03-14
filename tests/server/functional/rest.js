'use strict';

var superagent = require('superagent'),
    expect = require('expect.js'),
    SUCCESS = 200;

describe('BioBreak Restful Server', function(){

  var timerRoute = 'http://localhost:3000/timer/0001',
      timerRouteStart = timerRoute + '/start';

  describe('the route '/'', function(){
    it('is a valid route', function(done){
      superagent.get('http://localhost:3000/')
        .end(function(error, result){
          expect(result.status).to.eql(SUCCESS);
          done();
        });
    });
  });

  describe('the timer route', function(){

    it('is a valid route', function(done){
      superagent.get(timerRoute)
        .end(function(error, result){
          expect(result.status).to.eql(SUCCESS);
          done();
        });
    });

    it('returns a timer object', function(done){
      superagent.get(timerRoute)
        .end(function(error, result){
          expect(typeof result.body.timer).to.eql('object');
          done();
        });
    });

    it('returns a timer object with an initial "state" of stopped', function(done){
      superagent.get(timerRoute)
        .end(function(error, result){
          expect(result.body.timer.state).to.eql('stopped');
          done();
        });
    });

    it('returns a timer object with an a "currentTime" attribute that is a string', function(done){
      superagent.get(timerRoute)
        .end(function(error, result){
          expect(typeof result.body.timer.currentTime).to.eql('string');
          done();
        });
    });

    it('returns a timer object with a "minutes" attribute that is an integer', function(done){
      superagent.get(timerRoute)
        .end(function(error, result){
          expect(typeof result.body.timer.minutes).to.eql('number');
          done();
        });
    });

    it('returns a timer object with a "seconds" attribute that is an integer', function(done){
      superagent.get(timerRoute)
        .end(function(error, result){
          expect(typeof result.body.timer.seconds).to.eql('number');
          done();
        });
    });
  });

  describe('the timer state changes', function() {
    it('accepts "start"', function(done) {
      superagent.post('http://localhost:3000/timer/')
      .send({
          'action': 'start'
      })
      .end(function(error, result) {
        expect(result.status).to.eql(SUCCESS);
        done();
      });
    });
  });

});
