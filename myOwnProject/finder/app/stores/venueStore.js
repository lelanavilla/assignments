var dispatcher = require("../dispatcher");

function venueStore() {
    var listeners = [];
    var venues = [{ name: "Lovedale", tagline:"A wonderful Venues" }, 
                    { name: "Bishop",tagline:"An awesome Venues" }, 
                    { name: "Daffodils", tagline:"An excellent Venues" }];

    function getVenues() {
        return venues;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addVenue(venue) {
        venues.push(venue)
        triggerListeners();
    }

    function deleteVenue(venue) {
        var _index;
        venues.map(function (s, index) {
            if (s.name === venue.name) {
                _index = index;
            }
        });
        venues.splice(_index, 1);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(venues);
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "venue") {
            switch (split[1]) {
                case "ADD_VENUE":
                    addVenue(payload.venue);
                    break;
                case "DELETE_VENUE":
                    deleteVenue(payload.venue);
                    break;
            }
        }
    });

    return {
        getVenues: getVenues,
        onChange: onChange
    }
}

module.exports = venueStore();