import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page notfound">
      <div className="content">
        <img src="/notFound.jpg" alt="not found" />
        <Link to={"/"}> RETURN TO HOME</Link>
      </div>
    </section>
  );
};

export default NotFound;
