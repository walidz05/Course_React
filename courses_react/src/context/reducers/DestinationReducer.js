const DestinationReducer = (state, action) => {

  if(action.type === 'GET_DETAILS_DATA')
  {
    const destination = state.destinations.find(item => item.id == parseInt( action.payload));

    return{
      ...state,details:destination
    }

  }
  return state;
};
export default DestinationReducer;
