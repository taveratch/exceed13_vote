(function() {
	'use strict';
  function vm() { return require('./viewmodel'); }
	module.exports = React.createClass({
		getInitialState: function() {
      return vm()({},{type: 'init', data: this.props.location});
    },
    componentDidMount: function() {
      $('html').css({'height': "auto"});
    },
    componentWillUnmount: function() {
      $('html').css({'height': "100%"});
    },
		render: function() {
			/* Components */
			var ContentBox = require('./content-box.jsx');
			var VoteBox = require('../vote-box/wrapper.jsx');
			var Navbar = require('../../../nav-bar/NavigationBar.jsx');
			var Col = ReactBootstrap.Col;
			/* JSX */
			return (
				<div className="full-height">
					<Navbar/>
					<div className="full-height" style={{ paddingTop: 50 }}>
						<div className="full-width" style={{ padding: 15 }}>
              <div id="content-container" className="full-width">
                <div className="full-width center" style={{position: 'relative'}}>
                  <p style={{fontSize: "1.7em"}}>{this.state.name}</p>
                  <p>{this.state.group.group_name}</p>
                  <div className="flex-center-x">
                    <img src={this.state.image_url} className="img-responsive"/>
                  </div>
                </div>
                {
                  this.state.content.map(function(result, i) {
                    return <ContentBox {...result}/>;
                  })
                }
                <VoteBox projectId={this.state._id}/>
              </div>
						</div>
					</div>
				</div>
			);
		},
	});
}());
