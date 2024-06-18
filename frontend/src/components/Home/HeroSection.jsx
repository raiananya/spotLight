import React from "react";
import { FaBuilding, FaSuitcase, FaUsers } from "react-icons/fa";

export const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Jobs",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
  ];
  return (
    <div className="heroSection">
      <div className="container">
        <div className="title">
          <h1>Have your personal Spotlight</h1>
          <h1>illuminating your path to success!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            necessitatibus rerum ex officiis autem exercitationem iusto natus,
            dolorum illo, consequuntur impedit id optio alias porro, ipsam
            eveniet! Odit, incidunt aut!
          </p>
        </div>
        <div className="image">
          <img src="/heros.jpg" alt="hero" />
        </div>
      </div>
      <div className="details">
        {details.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="content">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
