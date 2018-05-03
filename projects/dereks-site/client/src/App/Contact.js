import React from 'react';
// import{Switch, Route}from "react-router-dom";
// import FormList from './Formlist';
// import ContactDetails from './ContactDetails';
function Contact(props){
return(
    <div className="contact-page">
        <div className="contact-words">
      
       <img className="derek-pic"src="https://i.imgur.com/f419uBw.jpg" width="300px" height="300px" alt="derek eskridge of esko photography"/>
       <h4>Derek Eskridge, Owner of Esko Photography</h4>
    <br/>
<div className="words-on-page">
    {/* <h1> MY STORY</h1>
    <p>In 2006, I began an short internship with the prestigious SlickForce Studio's in Los Angeles,</p>
         <p>studying under Nick LEALalalala. After just three months, I became a member of the </p>
        <p>SlickForce Team, I began mastering all phases of what is required in the photography</p>
        <p>field, moving through the stages of grip gear, lighting, casting, business management,</p>
        <p>location scouting, pro retouching. Not long after was co-publishing with the </p>
        <p> owner in multiple magazines, and books.</p>
        <br/>
        <p>In 2008, I decided to start Esko Photography, and moved to Las Vegas Nevada.</p> 
        <p>Currently, I am available for the following services: </p>
      <div className="services"> */}
        <p>  Real Estate Photography,</p>
        <p>Portfolios,</p>
        <p>  Product/Company Branding</p>
        <p>Videography,</p>
        <p>  Photo Retouching/Editing,</p><p> Graphic Design,</p>
         <p> Marketing/Advertising,</p><p> SEO/Google Analytics/Adwords </p>
         </div>
         <div className="credits">
            <p> My work has been featured in:</p>
            <p> OK Magazine, </p>
            <p>Celeb-Life Magazine,</p>
            <p>Kardashian Konfidential Book,</p>
            <p> WMB3D Magazine, </p>
            <p>Peta Campaigns </p>
            <p> Breast Cancer Awareness Campaigns</p>
            </div>

</div>

<div className="form-container">
 {/* <FormList/> */}
  </div>
      <img src="http://nicksaglimbeni.com/wp-content/gallery/halloween-2010/derek-eskridge-kevin-savarese.jpg" alt="derek eskridge and nick saglimbeni"/> 
        </div>


        )

};
export default Contact;