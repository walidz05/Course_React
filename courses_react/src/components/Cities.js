import React from 'react'
import ListCites from "../components/ListCites";

const Cities = ({city}) => {
      
  return (
    <>
      <div className="cities">
        <div className="container">
          <div className="cities__container">
            <div className="row">
              {city.map((item) => (
                <ListCites city={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cities