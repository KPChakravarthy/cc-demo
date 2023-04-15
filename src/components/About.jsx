import React from "react";

const About = (props) => {
  return (
    <div className="about-section-box">
      <div className="container space-header">
        <div>
          <h1 className="text-center large-header">{props.data?.aboutTitle}</h1>
          <div className="text-center mb-4">
            <img className="about-banner" src={props.data?.banner} alt="" />
          </div>
          <div className="text-center">
            <div className="inner-column">
              <h2><strong>Little Story</strong></h2>
              {(props.data?.aboutBody ?? []).map((b) => (
                <p>{b}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
