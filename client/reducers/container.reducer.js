export default (state = {containers:[]}, action) => {
    switch (action.type) {
     case 'LOAD_CONTAINERS':
      return {
        containers: action.payload
      }
     default:
      return state
    }
}