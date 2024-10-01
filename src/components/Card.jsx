import React from "react";

const Card = ({ imgData }) => {
  return (
    <div className="max-w-sm p-3 border m-3 rounded-sm hover:cursor-pointer">
      <img src={imgData} alt={imgData} className="rounded-sm" />
      <h1 className="text-xl sm:text-2xl my-5">
        This is about the swimming pool
      </h1>
      <p className="text-md sm:text:lg">
        This some description about this swimming pool. Which is very nice and
        fantastic
      </p>
    </div>
  );
};

export default Card;
