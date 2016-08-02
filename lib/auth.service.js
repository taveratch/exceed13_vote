console.log("compiled");
(function() {
  'use strict';
    var cookie = require('js-cookie');
    var http = require('http.service');
    var constants = require('constants.service');
    var eventEmitter = require('event.service');
    var user;
    module.exports = function() {
      function login(username,password,callback) {
        http.post(constants.url + '/api/login',{
          username: username,
          password: password
        }).done(function(data) {
          if(data.success){
            cookie.set('token', data.token);
            cookie.set('user', data);
            console.log(data.token);
            user = data;
            eventEmitter.getInstance().emit(eventEmitter.event.auth.signin, data); //notify ui
            // eventEmitter.getInstance().emit(eventEmitter.event.auth.redirect, data);
          }
          if(typeof(callback) === 'function'){ callback(data); }
        }).fail(function(error) {});
      }
      function getUser() {
        var user = cookie.get('user');
        if(!user){ return user; }
        return JSON.parse(cookie.get('user'));
      }
      function signout() {
        cookie.remove('token');
        cookie.remove('user');
      }
      return {
        login: login,
        getUser: getUser,
        signout: signout
      };
    }();
}());
