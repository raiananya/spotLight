import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
export const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>How SpotLight works?</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create Account</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi inventore, consequatur fugit voluptatum sequi?
            </p>
          </div>
          <div className="card">
            <MdFindInPage />
            <p>Find a Job/Post a Job</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi inventore, consequatur fugit voluptatum sequi?
            </p>
          </div>
          <div className="card">
            <IoMdSend />
            <p>Direct communication</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi inventore, consequatur fugit voluptatum sequi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
