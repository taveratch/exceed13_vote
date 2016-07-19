(function () {
	'use strict';
	var eventEmitter = require('event.service');
  var http = require('http.service');
	module.exports = function () {
		function getContents() {
			http.get('http://128.199.135.164:8080/api/project').success(function (data) {
				eventEmitter.getInstance().emit(eventEmitter.event.contents.update, data);
			}).error(function (error) {});
		}
		return {
			getContents: getContents
		};
	}();
}());
