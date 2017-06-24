/**
 * Created by leo on 17-6-23.
 */

var message = require('../app/model/message');
var should = require('should');

describe('model/message.js', function () {
    describe('message.get', function () {
        it('should get empty list when nothing add', function () {
            message.get(Date.now()).should.be.empty;
        });
        
        it('should get message when has message', function () {
            pretime = Date.now();
            message.add('Daniel Wu', 'I am handsome', 'Lisa S', 'red', 'dsfsfs');
            message.get(pretime).should.not.be.empty;
        });

        it('should not get all messages when time is newer than the old message', function () {
            nowtime = Date.now();
            message.add('Daniel Wu', 'I hate you', 'Lisa S', 'red', 'sdfsdfs');
            message.get(nowtime).should.have.length(1);
        });
    });

    describe('message.add', function () {
        it('should get message when add message', function () {
            pretime = Date.now();
            message.add('Daniel Wu', 'I am handsome', 'Lisa S', 'red', 'sdfsdfs');
            message.get(pretime).should.not.be.empty;
        });
    });
});