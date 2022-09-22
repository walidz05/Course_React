import React from 'react';
import {GiPositionMarker} from 'react-icons/gi';
import {Link} from 'react-router-dom';
const CardDistination = ({ destination }) => {
  return (
    <div className="col-3 p-15">
      <div className="distination__card">

        <div className="distination__card__img">
          <img src={destination.image} alt="img-destination" />
        </div>

        <div className="distination__card__layer">
          <div className="distination__card__layer__content">
            <GiPositionMarker size={20} />
            <div className="distination__card__layer__content__country">
              {destination.name}
            </div>
          </div>
        </div>

        <div className="distination__card__info">
            <div className="distination__card__info__text">
                  <Link to={`/details/${destination.id}`} className='btn-white'>
                        Explore
                  </Link>
            </div>
        </div>

      </div>

    </div>
  );
};
export default CardDistination;