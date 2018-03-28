import React from "react";
import Header from "./Header/";
import Content from "./Content/";
import Footer from "./Footer/";

//creating a very basic component
function App(){
    //define JSX
    return (
        <div>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>

           
            </div>

            //to render this app inside the initial index.js you 
            //need to export and import
    )
}
export default App;
//Above this says if i import this app in the source index
//the app below is the default app