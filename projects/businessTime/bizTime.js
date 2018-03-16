function openLink() {
    var destinations = document.getElementById("destinations")
        .addEventListener("click", function(event) {
            event.button.destinations;
        });

    var hotel = document.getElementById("hotel")
        .addEventListener("click", function(event) {
            event.button.hotel;
        });

    var attractions = document.getElementById("attractions")
        .addEventListener("click", function(event) {
            event.button.attractions;
        });
    // Tabs
    function openLink(evt, linkName) {
        var i, x, tablinks;
        x = document.getElementsByClassName("myLink");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
        }
    }
    // Click on the first tablink on load
    document.getElementsByClassName("tablink")[0].click();


}