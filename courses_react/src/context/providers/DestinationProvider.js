import {useReducer } from "react";
import DistinationContext from "../DistinationContext";
import {destinations} from '../../data/destinations';
import { Cities } from "../../data/cities";
import DestinationReducer from "../reducers/DestinationReducer";

const DestinationProvider = (props) => {

 const [state, dispatch] = useReducer(
   DestinationReducer,
   { destinations, details: {}, Cities ,city:[]}
 );

  return (
    <>
      <DistinationContext.Provider value={{ state, dispatch }}>
        {props.children}
      </DistinationContext.Provider>
    </>
  );
};

export default DestinationProvider;
