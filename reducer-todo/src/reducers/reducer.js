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
               id: new Date()
           }]};
        case 'TOGGLE_STATE':
            console.log('togglestate', action.payload)
            
            const newData = state.data.map(item => {
                if (item.id === action.payload.id){
                    item.completed = ! item.completed
                } 
                return item
            }) ;
            return {data: newData};
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                data: state.data.filter(todo => !todo.completed)
            }   
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

