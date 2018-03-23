 const owner = {
     name: 'John',
     age: 101,
     pet: ["cat", "dog"]
 }

 const petObjects = []

 for (let i = 0; i < owner.pet.length; i++) {
     let pet = owner.pet[i];
 }
 if (pet === "cat") {
     let pet = { name: fluffy };
 } else {
     let pet = { name: spot };
 }

 petObjects.push(pet.name);

 console.log(petObjects);