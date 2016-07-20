(function () {
	'use strict';
	var eventEmitter = require('event.service');
	var http = require('http.service');
	var project = {
		getContents: function () {
			http.get('http://128.199.135.164:8080/api/project')
				.success(function (data) {
					eventEmitter.getInstance().emit(eventEmitter.event.contents.update, data);
				})
				.error(function (error) {});
		},
		vote: function (param) {
			http.post('http://128.199.135.164:8080/api/vote', param)
				.success(function (data) {
          eventEmitter.getInstance().emit(eventEmitter.event.project.voted, data);
				})
				.error(function (err) {});
		}
	};
	module.exports = project;
}());
