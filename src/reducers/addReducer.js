const initialState = {
    category: [],
    activeTodo: null
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case 'GET_CATEGORY':
        return {
          ...state,
          category: [...payload]
        };
      case 'ADD_CATEGORY':
        return {
          ...state,
          category: [payload, ...state.category]
        };
      case 'DELETE_CATEGORY':
        return {
          ...state,
          category: state.category.filter(category => category != payload)
        };
      default:
        return state;
    }
  };