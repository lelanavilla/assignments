import React from 'react';
import Header from './Header';
import Card from './Card';
import Locations from './Locations';
import './locations.json';


function App() {
  return (
    <div>
      <Header></Header>
     <Locations></Locations>
    </div>
  )
};
export default App;