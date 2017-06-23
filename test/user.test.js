/**
 * Created by leo on 17-6-23.
 */

var user = require('../app/model/user');
var should = require('should');

describe('model/user.js', function () {
    describe('user.update', function () {
        it('should setting time when user first update', function () {
            user.update('testing');
            user.exist('testing').should.be.ok;
            typeof(user.get('testing')).should.be.type(typeof(Date.now()));
        });

        it('should update time when user update', function () {
            pretime = user.get('testing');
            setTimeout(function () {}, 2);
            user.update('testing');
            user.get('testing').should.greaterThan(pretime);
        });
    });

    describe('user.exist', function () {
        it('should return true when id exist', function () {
            user.exist('testing').should.be.true;
        });

        it('should return false when id not exist', function () {
            user.exist('dsfdfdf').should.be.false;
        });
    });

    describe('user.get', function () {
        it('should return time when id is exist', function () {
            typeof(user.get('testing')).should.be.type(typeof(Date.now()));
        });

        it('should return undefined when id is not exist', function () {
            should(user.get('dsfdfdf')).not.be.ok;
        })
    });
});