import React from 'react'
import ListCites from "./ListCites";
const Cities = ({city}) => {
      
  return (
    <>
      <div className="cities">
        <div className="container">
          <div className="cities__container">
            <div className="row">
              {city.map((item) => (
                <ListCites city={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cities