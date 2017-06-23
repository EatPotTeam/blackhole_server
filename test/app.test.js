/**
 * Created by leo on 17-6-23.
 */

var app = require('../app');
var request = require('supertest')(app);
var should = require('should');
var user = require('../app/model/user');

describe('app', function () {
    describe('register', function () {
        it('should return 200 and id when post register', function () {
            request.post('/register')
                .send()
                .expect(200, function (err, res) {
                    should.not.exist(err);
                    res.json.should.have.key('id');
                    done();
            });
        });
    });

    describe('login', function () {
        it('should return 401 status code and has info when login fail', function () {
            request.get('/login/' + 'fake')
                .send()
                .expect(401, function (err, res) {
                    should.not.exist(err);
                    res.json.should.have.key('result');
                    res.json['result'].should.equal('login fail');
                    done();
                });
        });

        it('should return 200 status code and has info when login success', function () {
            user.update('testing');
            request.get('/login/testing')
                .send()
                .expect(200, function (err, res) {
                    should.not.exist(err);
                    res.json.should.have.key('result');
                    res.json['result'].should.equal('login success');
                    done();
                });
        });
    });

    describe('post messages', function () {
        it('should record a message with an empty string in reply when no reply attribute in post body', function () {
            request.post('/messages')
                .send({
                    nickname: 'Yihuan Hu',
                    content: 'What the',
                    color: 'red'
                })
                .expect(200, function (err, res) {
                    should.not.exist(err);
                    res.json.should.have.keys('nickname', 'content', 'color', 'reply');
                    res.json['relpy'].should.equal('');
                    done();
                });
        });

        it('should record message and return when post a message', function () {
            request.post('/messages')
                .send({
                    nickname: 'Yihuan Hu',
                    content: 'Eat pot?',
                    relpy: 'Lao Da Ye',
                    color: 'red'
                })
                .expect(200, function (err, res) {
                    should.not.exist(err);
                    res.json.should.have.keys('nickname', 'content', 'color', 'reply');
                    res.json['relpy'].should.equal('Lao Da Ye');
                    done();
                });
        })
    });

    describe('get messages', function () {
        it('should return info when user is undefined', function () {
            request.get('/messages?userId=ddddfd')
                .send()
                .expect(401, function (err, res) {
                    should.not.exist(err);
                    res.json.should.equal('user underfined');
                })
        });

        it('should return messages when user exist', function () {
            request.get('/messages?userId=testing')
                .send()
                .expect(401, function (err, res) {
                    should.not.exist(err);
                    res.json.should.have.length(2);
                })
        });

        it('should return messages after the user login time when user just login', function () {
            request.get('/login/testing').send();
            request.get('/messages?userId=testing')
                .send()
                .expect(401, function (err, res) {
                    should.not.exist(err);
                    res.json.should.be.empty;
                })
        });
    });
});
