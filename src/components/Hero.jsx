import React from "react";

const Hero = () => {
  return (
    <section className="text-center my-14">
      <h1 className="max-sm:text-3xl text-4xl">This is the Application</h1>
      <p className="max-sm:text-lg text-xl mt-2 mb-4">
        This is some description about this application
      </p>
      <button className="text-lg border rounded-lg p-3 bg-blue-800 text-white hover:bg-blue-900 hover:cursor-pointer font-semibold">
        Know More
      </button>
    </section>
  );
};

export default Hero;
