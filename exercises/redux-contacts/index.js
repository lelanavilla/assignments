const redux = require ("redux");
// console.log(redux);
//first define what your initial state is
const initialState ={
    contacts :[
        // {
        //     name: "Tommy Oliver",
        //     phone: "925-867-5309",
        //     email: "thegreenranger@powerrangers.com"
        //  } ,
        // {
        //     name: "Tammy Oliver",
        //     phone: "925-867-5308",
        //     email: "thepinkranger@powerrangers.com"
        // }
    ]
}



//ACTIONS are OBJECTS that carry information that potentially will be useful for sate
//
const reducer = (state = initialState, action) => {
switch(action.type){
    case "ADD_CONTACT":
    return{
        contacts: [...state.contacts, action.contact]
    }
    case "REMOVE_CONTACT":
    return{
        contacts: state.contacts.filter(contact => 
            contact.name !== action.name)
        }
        case "RESET":
        return{
            contacts: []
        }
    default: return state
}
}
const store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const addContact = contact => {
    store.dispatch({
    //type property convention is all UPPERCASE separated by _
    type:"ADD_CONTACT",
    contact
    }); 
          
    }


const removeContact = name => {
    store.dispatch({
    type:"REMOVE_CONTACT",
    name
});

}
const reset = contacts => {
    store.dispatch({
        type: "RESET",
        contacts
    });
}
addContact(
    {
    name: "Timmy Oliver",
    phone: "925-867-5307",
    email: "theblueranger@powerrangers.com"

});
addContact({
    name: "Tommy Oliver",
    phone: "925-867-5309",
    email: "thegreenranger@powerrangers.com"
});
removeContact("Timmy Oliver");
reset();
//create store




//dispatch actions anytime you want to change the state

// store.dispatch(contact);
// store.dispatch(contact);