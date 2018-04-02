import React from 'react';
import SuperHeroData from './superheros.json';
import SuperHero from './SuperHero';

function SuperHeroList(){
    function speak(superhero){
        alert (`${superhero.motto}`);

    }

        const superherosObj =SuperHeroData
        .map(superherosObj => 
        <SuperHero
        key={superherosObj.img} 
        superhero = {superherosObj}
        handleClick={speak}
        />
        
        )
return (
    <div>
        {superherosObj}
        </div>
)
};

export default SuperHeroList;