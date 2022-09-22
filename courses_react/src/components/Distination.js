import React,{useState,useContext} from 'react';
import DistinationContext from '../context/DistinationContext';
import CardDistination from './CardDistination';

const Distination = () => {

      const {state:{destinations}} = useContext(DistinationContext);
      
      console.log(destinations);

      const [stateDestination] = useState({
        heading:
          "Discover the most engaging places in the world with Travel Friends",
        paragraph:
          "Travel is a brutality. It forces you to trust strangers and to lose sight of all that familiar comforts of home and friends.You are constantly of balance. Nothing is yours except the essential things Air, Sleep, Dream, the sea, the sky-all things tending towards the eternal or what we imagine of it.",
      });

  return (
    <div className="distination">
      <div className="container">
        <div className="row mr-minus-15 ml-minus-15">
          <div className="col-6 p-15">
            <h3 className="distination__heading">{stateDestination.heading}</h3>
          </div>
          <div className="col-6 p-15">
            <p className="distination__paragraph">
              {stateDestination.paragraph}
            </p>
          </div>
        </div>
        <div className="distination__block">
          <div className="row mr-minus-15 ml-minus-15">
            {destinations.map((item) => (
              <CardDistination destination={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Distination