(function () {
	'use strict';
	var projectService = require('project.service');
  var auth = require('auth.service');
	module.exports = function (state, action) {
		switch (action.type) {
		case 'init':
      var user = auth.getUser();
			if (!action.data) {
				return {
					name: '',
					group: {
						group_name: ''
					},
					image_url: '',
					content: [],
					voteChecker: {
						best_of_hardware: true,
						best_of_software: false,
						popular: false
					},
					comments: [],
          isShowCommentBox: user.teacher,
          voted: []
				};
			} else {
				return _.merge(action.data.state.project, {
					voteChecker: {
						best_of_hardware: true,
						best_of_software: false,
						popular: false
					},
					comments: [],
          isShowCommentBox: user.teacher,
          voted: []
				});
			}
			break;
		case 'update_vote_check':
			return _.merge({}, state, {
				voteChecker: _.pick(action.data, ['best_of_hardware', 'best_of_software', 'popular'])
			});
		case 'update_comments':
			return _.merge({}, state, {
				comments: action.data
			});
    case 'update_voted':
      return _.merge({}, state, {
        voted: action.data
      });
		case 'comment':
      projectService.comment(action.projectId,action.comment, action.callback);
      return state;
		default:
			return state;
		}
	};
}());
