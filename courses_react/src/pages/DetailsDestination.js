import React,{useContext,useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import DistinationContext from "../context/DistinationContext";
import Header from '../components/Header';
import DestinationInfo from '../components/DestinationInfo';
import Cities from '../components/cities/Cities';


const DetailsDestination = () => {

const {
  state: { details, city },
  dispatch,
} = useContext(DistinationContext);

  const [state, setState] = useState({
    video: "",
    poster: "",
    heading: '',
    logo: "/assets/images/logo.png",
    img: ''
  });


 const {id} = useParams();

 useEffect(() => {
      dispatch({type:'GET_DETAILS_DATA',payload:id})
      state.heading = details.name;
      state.img = details.bigImage;
      dispatch({type:'GET_CITIZES_CONTRY',payload:id})
      console.log("city",city);
 }, [id,details]);

  return (
    <>
      <Header state={state}/>
      <DestinationInfo details={details}/>
      <Cities city={city}/>
    </>
  );
}

export default DetailsDestination