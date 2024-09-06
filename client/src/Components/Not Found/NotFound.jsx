import React from "react";
import "./NotFound.css"; // Make sure to create and import the CSS file

const NotFound = () => {
  return (
    <div className="notFoundContainer">
    <div className="error-container">
      <h1>404</h1>
      <p>Oops! The page Not Found</p>
      <a href="/">Go Back to Home</a>
    </div>
    </div>
  );
};

export default NotFound;
