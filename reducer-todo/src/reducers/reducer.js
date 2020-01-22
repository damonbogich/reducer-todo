//step 1 build a simple reducer and initial state:
    //build a simple reducer with just a default return for now:
 

export const completedReducer = (state, action) => {
    console.log('state', state);
    console.log('action', action);
   switch(action.type) {
       case 'ADD_TODO':
           
           return {data: [...state.data, {
               todo: action.payload,
               completed: false,
               id: Date.Now
           }]};
    default:
    return state;
    }
}



export const initialStateObject = {
    data: [
        {
        todo: 'learn about reducers',
        completed: false,
        id: 3892987589
        }
    ]
}

