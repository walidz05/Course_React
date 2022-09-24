import React,{useState,useContext} from 'react';
import ServicesLeft from './ServicesLeft';
import ServicesContext from "../../context/ServicesContext";
import ServicesList from './ServicesList';


const Services = () => {

const { state:data, dispatch } = useContext(ServicesContext);  

console.log('dataServices',data.services);

const [state, setState] = useState({
  heading:
    "Why Customers Love Travel Friends ? Because We Provide Unique Services",
  subHeading:
    "our aim is to provide proffessionel and unique services to cutomers, and we have provided hight quality services to cutomers thats why they love travel friends",
});


  return (
    <div className="services">
      <div className="services__contents">
        <div className="container">
          <div className="row ml-minus-15 mr-minus-15">
            <div className="col-6 p-15">
             <ServicesLeft heading={state.heading} subHeading={state.subHeading}/>
            </div>
            <div className="col-6 p-15">
                  <ServicesList services={data.services}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services