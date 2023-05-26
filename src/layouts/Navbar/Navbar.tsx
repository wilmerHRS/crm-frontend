import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white vh-100 py-2" style={{ width: "65px" }}>
      <h3 className="text-center fs-2 fw-bold">A</h3>
      <div className="py-2">
        <ul className="navbar-nav">
          <li
            className="d-flex justify-content-center align-items-center fs-4"
            style={{ height: "60px" }}
          >
            <i className="bi bi-people-fill"></i>
          </li>
          {/* <li>Icon 1</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
