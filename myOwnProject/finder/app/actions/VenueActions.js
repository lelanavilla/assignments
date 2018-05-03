var dispatcher = require("../dispatcher");

module.exports = {
    addVenue:function(venue){
        dispatcher.dispatch({
           venue:venue,
           type:"venue:addVenue" 
        });
    },
    deleteVenue:function(venue){
        dispatcher.dispatch({
           venue:venue,
           type:"venue:deleteVenue" 
        });
    }
}