(function() {
	'use strict';
  function vm() { return require('./viewmodel'); }
	module.exports = React.createClass({
		contextTypes: {
			router: React.PropTypes.object.isRequired
		},
		getInitialState: function() {
      return vm()({},{type: 'init', data: this.props.location});
    },
    componentDidMount: function() {
      $('html').css({'height': "auto"});
    },
    componentWillUnmount: function() {
      $('html').css({'height': "100%"});
    },
    back: function() {
      this.context.router.push({
        pathname: '/dashboard'
      });
		},
		render: function() {
			/* Components */
			var ContentBox = require('./content-box.jsx');
			var VoteBox = require('../vote-box/wrapper.jsx');
			var Navbar = require('../../nav-bar/NavigationBar.jsx');
			var Col = ReactBootstrap.Col;
			/* JSX */
			return (
				<div className="full-height">
					<Navbar/>
					<div className="full-height" style={{ paddingTop: 50 }}>
						<div className="full-width" style={{ padding: 15 }}>
            <div id="content-container" className="full-width">
              {/*<Col md={9} mdOffset={1} sm={10} smOffset={1}>*/}
                <div className="full-width center" style={{position: 'relative'}}>
                  <img onClick={this.back} style={{
                    cursor: "pointer"
                  }} className="btn-back" src="/assets/img/back.png"/>
                  <p style={{fontSize: "1.7em"}}>{this.state.name}</p>
                  <p>{this.state.group.group_name}</p>
                  <img src={this.state.image_url} className="img-responsive"/>
                </div>
                {this.state.content.map(function(result, i) {
                  return <ContentBox {...result}/>;
                })
                }
              {/*</Col>*/}
            </div>
						</div>
					</div>
				</div>
			);
		},
	});
}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(
	<Wrapper/>, document.getElementById('container'));
