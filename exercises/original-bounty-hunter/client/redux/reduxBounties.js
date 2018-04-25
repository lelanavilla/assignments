import axios from "axios";

const initialState = {
    bounties:[],
    loading: false
}
this.state = this.initialState;

const bountyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BOUNTIES_DATA":
            return {
                ...state,
              bounties: action.data,
                loading: false
            }
            case "POST_BOUNTY":
            return{
                ...state,
                data:[...state.data, action.newBounty],
                loading: false,
             } 
           
            case "REMOVE_BOUNTY":
            return{
                ...state,
                data: state.data.filter(bounty => bounty._id !== action.id),
                    loading: false
            };
            case "EDIT_BOUNTY":
            return{
                ...state,
                data: state.data.map(bounty => {
                    if(bounty._id === action.id){
                        return action.newBounty;
                    }else{
                        return bounty;
                 } 
                }),
             loading :false
            }
            
             case "LOADING_START":
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

//GET 
export function getBountiesData() {
    return dispatch => {
        // const bountiesApi = "./bounties";
        axios.get('/bounties')
            .then(response => {
                // console.log(response.data);
              dispatch({
                    type: "GET_BOUNTIES_DATA",
                    response: response.data

                });

            })
       
    }
    //post new bounty
export function postBounty(newBounty){
    return dispatch =>{
      axios.post("/bounties", newBounty)
      .then(response => {
          dispatch({
            type:"POST_BOUNTY",
            newBounty : response.data,  
          })
      })
      }

}

//delete
export function removeBounty(id){
    return  dispatch => {
        axios.delete('/bouties/'+ id)
        .then(response => {
            dispatch({
                type:"REMOVE_BOUNTY",
                id
            })
        })
    }
}


    //edit
    export function editBounty(id, editedBounty){
        return dispatch =>{
        axios.put('/bounties/'+ id, editedBounty)
      .then(response => {
                dispatch({
                type: "EDIT_BOUNTY",
                editedBounty: response.data,
                    id
            
          })
        })
    }
}
}
export default bountyReducer;