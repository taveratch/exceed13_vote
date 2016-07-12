var React = require('react');

var ProfileInfo = React.createClass({
    render: function() {
        return (
            <div className="profile-info">
                <h3>{this.props.username}</h3>
                <p>{this.props.group.name}</p>
            </div>
        );
    }
});

module.exports = ProfileInfo;
