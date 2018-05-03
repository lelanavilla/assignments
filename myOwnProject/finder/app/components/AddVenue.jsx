var React = require("react");
var actions = require("../actions/VenueActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          descr:"",
          cost:""
      }  
    },
    addVenue:function(e){
        e.preventDefault();
        actions.addVenue(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addVenue}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">School Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Venue Name" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Short Description:</label>
                    <input type="text" className="form-control" id="descr" name="descr" value={this.state.address} onChange={this.handleInputChange} placeholder="description" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="cost">Cost:</label>
                    <input type="text" className="form-control" id="cost" name="cost" value={this.state.address} onChange={this.handleInputChange} placeholder="cost" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Venue</button>
                </div>
            </form>
        )
    }
})