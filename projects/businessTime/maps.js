//DOM load event
window.addEventListener("DOMContentLoaded", function() {

    var cube = document.querySelector(".cube"),
        imageButtons = document.querySelector(".image-buttons");
    var cubeImageClass = cube.classList[1];

    //Add click event listener to image buttons container
    imageButtons.addEventListener("click", function(event) {

        //Get node type and class value of clicked element
        var targetNode = event.target.nodeName,
            targetClass = event.target.className;

        //Check if image input has been clicked and isn't the currently shown image
        if (targetNode === "INPUT" && targetClass !== cubeImageClass) {

            console.log(`Show Image: ${targetClass.charAt(11)}`);

            //Replace previous cube image class with new class
            cube.classList.replace(cubeImageClass, targetClass);

            //Update cube image class variable with new class
            cubeImageClass = targetClass;

        }

    }, false);

}, false);