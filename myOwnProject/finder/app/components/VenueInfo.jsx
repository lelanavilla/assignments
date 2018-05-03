var React = require("react");
var actions = require("../actions/VenueActions");

module.exports = React.createClass({
    deleteVenue: function(e){
        e.preventDefault();
        actions.deleteVenue(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteSchool}>&times;</span>
                </div>
                <div className="panel-body">{this.props.info.descr}</div>
            </div>
        )
    }
})