(function () {
	'use strict';
	var eventEmitter = require('event.service');
  var auth = require('auth.service');
	var http = require('http.service');
  var cookie = require('js-cookie');
  var constants = require('constants');
  function getComments(projectId) {
    $.ajax({
      url: constants.url + '/api/comment',
      headers: cookie.get('token') ? { 'Authorization': cookie.get('token'), 'project_id': projectId } : {},
    })
    .success(function(data) {
      eventEmitter.getInstance().emit(eventEmitter.event.comments.update, data.comments);
    });
  }
	var project = {
		getContents: function () {
			http.get(constants.url + '/api/project')
				.success(function (data) {
					eventEmitter.getInstance().emit(eventEmitter.event.contents.update, data);
          var projects = data.projects;
          var user = auth.getUser();
          var project = _.filter(projects, function(item){ return item.group.group_name === user.group; });
          if(project.length === 0) { return; }
          var projectId = project[0]._id;
          getComments(projectId);
				})
				.error(function (error) {});
		},
		vote: function (param) {
			http.post(constants.url + '/api/vote', param)
				.success(function (data) {
          eventEmitter.getInstance().emit(eventEmitter.event.project.voted, data);
				})
				.error(function (err) {});
		},
    voteCheck: function(projectId) {
      $.ajax({
        url: constants.url + '/api/vote/check_vote',
        headers: cookie.get('token') ? { Authorization: cookie.get('token'), project_id: projectId } : {},
      })
      .success(function(data) {
        eventEmitter.getInstance().emit(eventEmitter.event.project.voteCheck, data);
      });
    }
	};
	module.exports = project;
}());
