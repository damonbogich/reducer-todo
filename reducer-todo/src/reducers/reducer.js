//step 1 build a simple reducer and initial state:
    //build a simple reducer with just a default return for now:
 

export const completedReducer = (state, action) => {
   switch(action.type) {
       case 'ADD_TODO':
           console.log(state, action)
           return [
               ...state,
               {
                   item: action.payload,
                   completed: false,
                   id: Date.now()
               }
            ];
    default:
    return state;
    }
}



export const initialStateObject = [
    {
        item: 'Run',
        completed: false,
        id: 1
    },
    {
        item: 'Shower',
        completed: false,
        id: 2
    },
    {
        item: 'Make Dinner',
        completed: false,
        id: 3
    }
]

