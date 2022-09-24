import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({rating}) => {

const RatingReview = (rating) => {
      let container = [];
      for (let index = 1; index <= 5; index++) {
          if (index <= rating) {
            container.push(<AiFillStar />)
          } else {
            container.push(<AiOutlineStar />)
          }
      }
      return container;
}

      
  return <>
      {RatingReview(rating)}
  </>;
}

export default Rating