(function () {
	'use strict';
	var eventEmitter = require('event.service');
  var auth = require('auth.service');
	var http = require('http.service');
  var cookie = require('js-cookie');
  var constants = require('constants.service');
	var project = {
		getContents: function () {
			http.get(constants.url + '/api/project')
				.done(function (data) {
					eventEmitter.getInstance().emit(eventEmitter.event.contents.update, data);
				})
				.fail(function (error) {});
		},
		vote: function (param) {
			http.post(constants.url + '/api/vote', param)
				.done(function (data) {
          eventEmitter.getInstance().emit(eventEmitter.event.project.voted, data);
				})
				.fail(function (err) {});
		},
    voteCheck: function(projectId) {
      $.ajax({
        url: constants.url + '/api/vote/check_vote',
        headers: cookie.get('token') ? { Authorization: cookie.get('token'), project_id: projectId } : {},
      })
      .done(function(data) {
        eventEmitter.getInstance().emit(eventEmitter.event.project.voteCheck, data);
      });
    },
    getComments: function(group,projectId) {
      var user = auth.getUser();
      if(group !== user.group && !user.teacher) { return; }
      $.ajax({
        url: constants.url + '/api/comment',
        headers: cookie.get('token') ? { 'Authorization': cookie.get('token'), 'project_id': projectId } : {},
      })
      .done(function(data) {
        eventEmitter.getInstance().emit(eventEmitter.event.comments.update, data.comments);
      });
    },
    comment: function(projectId,comment,callback) {
      var param = {
        project_id: projectId,
        detail: comment
      };
      http.post(constants.url + '/api/comment', param)
      .done(function(data) {
        if(typeof callback === 'function'){
          callback(data);
        }
      });
    }
	};
	module.exports = project;
}());
