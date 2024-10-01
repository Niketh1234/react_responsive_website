import React from "react";
import Card from "./Card";

const CardGrid = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-around ">
        {[1, 2, 3, 4, 5, 6].map((i) => {
          if (i % 3 === 1) {
            return <Card imgData="swimming_pool.jpg" />;
          }
          if (i % 3 === 2) {
            return <Card imgData="table_tennis2.jpg" />;
          }

          return <Card imgData="convention_hall1.jpg" />;
        })}
      </div>
    </section>
  );
};

export default CardGrid;
