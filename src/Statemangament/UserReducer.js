const initialState = {
    selectedUser: null,
  };
  
  const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_USER':
        return {
          ...state,
          selectedUser: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default UserReducer;