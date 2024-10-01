import React from "react";

const Header = () => {
  return (
    <div className="max-w-7xl m-auto">
      <header className="h-28 sm:h-16 border-b">
        <div className="flex flex-col sm:flex-row items-center justify-around pt-4 mx-2">
          <div>
            <span className="text-2xl">Your Application</span>
          </div>
          <div className="max-sm:my-3 flex flex-wrap">
            <span className="text-lg mr-2 px-3 py-2 hover:bg-gray-200 hover:rounded hover:cursor-pointer">
              Home
            </span>
            <span className="text-lg mr-2 px-3 py-2 hover:bg-gray-200 hover:rounded hover:cursor-pointer">
              About
            </span>
            <span className="text-lg mr-2 px-3 py-2 hover:bg-gray-200 hover:rounded hover:cursor-pointer">
              Contact Us
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
