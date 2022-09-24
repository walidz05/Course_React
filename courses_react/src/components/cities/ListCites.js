import React from 'react';
import {BsStopwatch} from 'react-icons/bs'
import Facilities from './Facilities';

const ListCites = ({city}) => {
            return (
              <div className="col-3 p-15">
                <div className="cities__body">
                  <div className="cities__body__image">
                    <img src={city.image} alt="" />
                    <div
                      className={
                        city.status === "Bestselling"
                          ? "bestselling"
                          : city.status === "New"
                          ? "new"
                          : city.status === "Hot"
                          ? "hot"
                          : ""
                      }
                    >
                      {city.status}
                    </div>
                  </div>

                  <div className="cities__body__contents">
                    <div className="cities__body__contents__top">
                      <div className="cities__body__contents__top__name">
                        {city.name}
                      </div>

                      <div className="cities__body__contents__top__duration">
                        <BsStopwatch size={18} color="#df2189" />
                        <div className="cities__body__contents__top__duration__time">
                          {city.duration}
                        </div>
                      </div>
                    </div>
                    <div className="cities__body__contents__price">
                      ${city.price}.00
                    </div>
                    <div className="cities__body__contents__facilities">
                      <div className="cities__body__contents__facilities__room">
                        <Facilities TextRoom="Room" valueFood={city.room} />
                      </div>
                      <div className="cities__body__contents__facilities__food">
                        <Facilities TextRoom="Food" valueFood={city.food} />
                      </div>
                    </div>

                    <div className="cities__body__contents__buttom">
                        <button className='btn-dark-sm'>
                          Buy now
                        </button>
                    </div>

                  </div>
                </div>
              </div>
            );
            
}

export default ListCites