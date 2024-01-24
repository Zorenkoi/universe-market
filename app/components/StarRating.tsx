"use client";
import StarRatings from "react-star-ratings";

import React from "react";

interface StarRatingProps {
  rating?: number;
  starRatedColor?: string;
  numberOfStars?: number;
  name?: string;
  starDimension?: string;
  starSpacing?: string;
}

const StarRating = ({
  rating,
  starRatedColor,
  numberOfStars,
  name,
  starDimension,
  starSpacing,
}: StarRatingProps) => {
  return (
    <StarRatings
      rating={rating || 4}
      starRatedColor={starRatedColor}
      numberOfStars={numberOfStars || 5}
      name={name || "rating"}
      starDimension={starDimension || "40px"}
      starSpacing={starSpacing || "5px"}
    />
  );
};

export default StarRating;
