import React from 'react';
import Friend from './Friend';
import Pets from './Pets';

const friends = [
     {name: "Mighty Morphin' Power Rangers",
     age: 24, 
     pets:["lizard"]
    },
    {name: "Batman", age: 45, pets:["dog", "cat"]},
    {name: "Wonder Woman", age: 300, pets:["lizard"]},
    {name: "Cat Woman", age: 26, pets:["donkey", "cat"]},
    {name: "Superman", age: 30, pets:["none"]},
    {name: "John", age: 21, pets:["none"]},
    {name: "Quasimodo", age: 530, pets:["roach"]}
];

    function FriendsList(){
//  const friendsPets= friends.map
       const friendsLis=  friends.map(function(person,i){
            return <Friend person ={person} key= {person.name + i} pets = {person.pets}/> 
        })
        return(
            <div>
              
               {friendsLis}
             
                </div>
        )
    }
 export default FriendsList;

