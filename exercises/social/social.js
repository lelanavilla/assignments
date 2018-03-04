var dinnerParty = {
    menu: {
        firstCourse: "salad",
        mainCourse: "steak",
        dessert: "ice cream"
    },
    guest: [
         {
            firstName:"lelana",
            lastName:" Villa",
            fullName: function(){
                return this.firstName.concat(this.lastName);
            }
        }
        ,
        

         {
            firstName: "steven",
            lastName: "Blakley"

        },
         {
            firstName: "jen",
            lastName: "evenson"
        },
        {
                firstName: "kat",
                lastName:"celis" 
        
        }
    ]

,
    groceryList: [
        "lettuce", "tomatoes", "dressing", "cucumbers",
        "steak", "potatoes"
    ]
};

console.log(dinnerParty.guest[0].fullName());


