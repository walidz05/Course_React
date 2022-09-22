import {useReducer } from "react";
import DistinationContext from "../DistinationContext";
import {destinations} from '../../data/destinations';
import DestinationReducer from "../reducers/DestinationReducer";

const DestinationProvider = (props) => {

 const [state, dispatch] = useReducer(DestinationReducer,
      
 { destinations,details:{}});

  return (
    <>
      <DistinationContext.Provider value={{ state, dispatch }}>
        {props.children}
      </DistinationContext.Provider>
    </>
  );
};

export default DestinationProvider;
