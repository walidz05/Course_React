import React,{useContext} from 'react';
import ServicesContext from "../../context/ServicesContext";
import ReviewBody from './ReviewBody';

const Reviews = () => {

const {state:{reviews},dispatch} = useContext(ServicesContext)

  return (
    <div className="reviews">
      <div className="container">
        <h1 className="heading">what our customers are saying ?</h1>
        <div className="row ml-minus-15 mr-minus-15">
          {reviews.map((review) => (
            <ReviewBody key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews