var React = require("react");
var VenueInfo = require("./VenueInfo.jsx")
var AddVenue = require("./AddVenue.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddVenue />
                </div>
                <div className="col-md-6">
                    {
                        this.props.venues.map(function(s,index){
                            return(
                                <VenueInfo info={s} key={"venue"+index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});