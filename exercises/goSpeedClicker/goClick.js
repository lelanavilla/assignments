myStorage = window.localStorage;
var clicked = myStorage.getItem("click", window.event);

myStorage.addEventListener("click", function(event) {
    if (window.event === "click") {
        this.localStorage.setItem("num", num);
        num++;
    }
});
console.log("i clicked");