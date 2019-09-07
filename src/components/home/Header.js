/*
 * @Author: Ankit Agnihotri 
 * @Date: 2019-09-07 21:50:53 
 * @Last Modified by:   Ankit Agnihotri 
 * @Last Modified time: 2019-09-07 21:50:53 
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/Header.css";

function Header({ data }) {
  const [id, setId] = useState("");

  const handleClickMenuOpen = () => {
    setId("mob-menu-active");
  };

  const handleClickMenuClose = () => {
    setId("");
  };

  return (
    <div className="navbar">
      <div className="nav-container container">
        <h2 id="logo">
          Locale<span className="blue">.ai</span>
        </h2>
        {id === "" ? (
          <i
            id="secondary-menu"
            className="fa fa-bars"
            onClick={handleClickMenuOpen}
            aria-hidden="true"
          ></i>
        ) : (
          <i
            id="secondary-menu"
            className="fa fa-times"
            onClick={handleClickMenuClose}
            aria-hidden="true"
          ></i>
        )}
        <div id={id} className="mobile-nav">
          <ul role="navigation">
            <li>
              <Link to={"/"}>Upload CSV</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
