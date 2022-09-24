import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import Rating from './Rating';

const ReviewBody = ({review}) => {
  return (
    <div className="col-4 p-15">
      <div className="reviews__body">
        <div className="reviews__body__contents">
          <div className="reviews__body__contents__image">
            <img src={review.image} alt="" />
          </div>
          <div className="reviews__body__contents__info">
            <div className="reviews__body__contents__info__name">
              {review.name}
            </div>
            <div className="reviews__body__contents__info__rating">
              <Rating rating={review.stars} />
            </div>
            <div className="reviews__body__contents__info__comment">
                  {review.comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewBody