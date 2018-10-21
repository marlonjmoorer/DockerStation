export default (state = {images:[]}, action) => {
    switch (action.type) {
     case 'LOAD_IMAGES':
      return {
       images: action.payload
      }
     default:
      return state
    }
}