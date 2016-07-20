(function() {
  'use strict';
    var EventEmitter = require('events').EventEmitter;
    var Store = new EventEmitter();
    var data;
    Store.init = function() {
      data = {
        best_of_hardware: -1,
        best_of_software: -1,
        popular: -1,
        top_rated: -1
      };
    };
    Store.getState = function() {
      return data;
    };
    Store.update = function(payload) {
      console.log(payload);
      _.merge(data, payload);
    };
    Store.addChangeListener = function(callback) {
      this.on('update', callback);
    };
    Store.removeChangeListener = function(callback) {
      this.removeListener('update', callback);
    };
    Store.emitChange = function(){
      this.emit('update');
    };
    Store.init();
    module.exports = Store;
}());
