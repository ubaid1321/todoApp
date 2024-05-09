const Initial_state={
    User_data:[]
}

export const todoreducers=(state=Initial_state,action)=>{
    switch(action.type){
        case"ADD_DATA":
        return{
            ...state,
            User_data:[...state.User_data,action.payload]
        }
        case "REMOVE_DATA":
            const dltdata=state.User_data.filter((ele,k)=>k!==action.payload)
          return{
            ...state,
            User_data:dltdata
          }
          case "UPDATE_DATA":
            const upddata= state.User_data.map((ele,k)=>k==action.d ? action.payload:ele)
            return{
                ...state,
                User_data:upddata
              }
        default:
            return state

    }
}