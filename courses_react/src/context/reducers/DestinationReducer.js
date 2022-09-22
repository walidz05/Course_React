const DestinationReducer = (state, action) => {

  if(action.type === 'GET_DETAILS_DATA')
  {
    const destination = state.destinations.find(item => item.id == parseInt( action.payload));

    return{
      ...state,details:destination
  }

  }

  else if (action.type === "GET_CITIZES_CONTRY") {

      const city = state.Cities.filter(
        (item) => item.destinationId == parseInt(action.payload)
      );

      return {
        ...state,
        city,
      };
  }
  return state;
};
export default DestinationReducer;
