import React,{useState} from 'react';
import {BiChevronRight} from 'react-icons/bi';
import { BiChevronDown } from "react-icons/bi";


 const ServicesList = ({services}) => {

   const [current,setCurrent] = useState(1);

  const showDetails = (index) => {
      setCurrent(index)
      console.log('current',current);
  }

  return (
    <>
      {services.map((service) => (
        <div className="services__list" key={service.id}>
          <h4 
            onClick={() => showDetails(service.id)}
            className={`services__list__heading ${current === service.id ? "red" : "" }`}
            
          >
           {current === service.id ?  <BiChevronDown size={20} /> : <BiChevronRight/>}

            {service.heading}
          </h4>
          <p
            className={`services__list__details ${
              current === service.id ? "show" : ""
            }`}
          >
            {service.p}
          </p>
        </div>
      ))}
    </>
  );
}

export default ServicesList