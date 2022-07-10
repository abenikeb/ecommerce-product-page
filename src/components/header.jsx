import React, { Component } from "react";

const Header = ({ count }) => {
  return (
    <div className="navbar bg-white shadow-md rounded-2xl">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">My Check List</a>
        <a className="btn btn-square normal-case text-xl">{count}</a>
      </div>
      <div className="flex-none">
        {/* <ul className="menu menu-horizontal p-0">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul> */}
        <div class="form-control">
          <input
            type="text"
            placeholder="Search items"
            class="input input-bordered"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
