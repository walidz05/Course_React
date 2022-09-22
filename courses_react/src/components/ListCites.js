import React from 'react'

const ListCites = ({city}) => {
  return (
    <div className="col-3 p-15">
      <div className="cities__body">
        <div className="cities__body__image">
          <img src={city.image} alt="" />
        </div>

        <div className="cities__body__content">
            
        </div>
      </div>
    </div>
  );
}

export default ListCites