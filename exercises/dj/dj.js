var mainBox= document.getElementById("mainBox");

mainBox.addEventListener("mouseover", changeColor);
mainBox.addEventListener("mousedown", changeColor);
mainBox.addEventListener("mouseup", changeColor);
mainBox.addEventListener("scroll", changeColor);
mainBox.addEventListener("dblclick",changeColor );
function changeColor(){
if(event.type === "mouseover"){
    mainBox.style.backgroundColor = "blue";
}else if( event.type === "mousedown"){
    mainBox.style.backgroundColor = "red";
}else if( event.type === "mouseup" || ){
    mainBox.style.backgroundColor = "green";
}else if( event.type === "scroll"){
    mainBox.style.backgroundColor = "orange";
}
}
changeColor();


}
  

    