const initialState  = {
  age : 21
}

const reducer = (state = initialState, action) => {
  const newState ={...state}
  switch(action.type){
     case 'UP':
       newState.age += action.val
       newState.loading = false
       break;
     case 'DOWN':
       newState.age -= action.val
       break;
     case 'LOADING':
       newState.loading = true 
       break;
     default:
       return newState    
  }
  return newState
}

export default reducer 