// sortedDogOwners([  
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47,
//         pets: ["dog", "cat"]
//     }, 
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12,
//         pets: ["dog"]
//     }, 
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78,
//         pets: ["cat", "parrot"]
//     }, 
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 13,
//         pets: ["cat", "parrot", "dog"]
//     }, 
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27,
//         pets: ["dog"]
//     }
// ])
const Object =[{
    
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
];
Object.entries(obj).forEach(([key,value])=>{
    console.log(`${key}, ${value}`);

}
);

// function arbitraryPractice (){
//     const ownersAge = owners.age;
 
  
//    if(ownersAge > 20 && owners.pets.type === "dog" && owners.pets.nickname.length > 0){
// const petsNameArray= "";
//     petsNameArray.push(owners.pets.name.slice(0,0).join(","));

//     console.log(petsNameArray);
// //put into an <li>
//    }
   



// arbitraryPractice();
//  console.log(arbitraryPractice(petsNameArray);  

// const pets = Object.pets;
 
//   let newArray = [];
  
// pets.forEach(function(){
//     if( pets === [dog]);
//     newArray.push(pets);
//   });
//   console.log(newArray);

  
// //create list of pets first names
// //if their owner is older than 20
// //all the owners pets have nicknames
// //and the owner has at least one dog
// //put the pets who pass the above tests into an <li>



// }function arbitraryPractice(arr) {


   