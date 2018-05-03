var React = require("react");
var ReactDOM = require("react-dom");
var venuesList = require("./components/venuesList.jsx");
var venueStore = require("./venues/venueStore");
var _venues = venueStore.getVenues();
venueStore.onChange(function(venues){
    _venues = venues;
    render();
});

function render(){
    ReactDOM.render(<venuesList venues={_venues} />, document.getElementById("container"));    
}

render();