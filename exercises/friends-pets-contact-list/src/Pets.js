import React from 'react';
import FriendsList from './FriendsList';
import Friend from './Friend';

function Pets (person){
    if(person.pets.length > 0){
        return(
            <div>
            {person.pets}
                </div>
        )
    } 

}
export default Pets;