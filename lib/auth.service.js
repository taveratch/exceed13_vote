(function() {
  'use strict';
    var cookie = require('js-cookie');
    var http = require('./http.service');
    var eventEmitter = require('./event.service.js');
    module.exports = function() {
      function login(username,password) {
        http.post('http://128.199.135.164:8080/api/login',{
          username: username,
          password: password
        }).success(function(data) {
            cookie.set('token', data.token);
            eventEmitter.getInstance().emit(eventEmitter.event.auth.signin,data); //notify ui
        }).error(function(error) {});
      }
      return {
        login: login
      };
    }();
}());
