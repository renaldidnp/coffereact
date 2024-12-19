import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2">
        <div className="flex">
          {/* logo section */}
          <div>
            <a href="">
              <img src="{logo}" alt="Logo" />
              Coffe Shop
            </a>
          </div>
          {/* link section */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
