export default (state = {containers:[]}, action) => {
    switch (action.type) {
     case 'LOADED_CONTAINERS':
      return {
        containers: action.payload
      }
     default:
      return state
    }
}