import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = (props) => {
  return (
    <React.Fragment>
      <div id="slides" className="cover-slides space-header">
        <Carousel
          autoFocus
          autoPlay
          useKeyboardArrows
          showThumbs
          infiniteLoop
        >
          {(props.data?.carousel ?? []).map((s, index) => (
            <div className="slide">
              <img alt="sample_file" src={s.url} key={index} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="qt-box qt-background">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-left">
              {
                (props.data?.quotes ?? []).map(q => (
                  <>
                    <p className="lead ">
                      {q.quote}
                    </p>
                    <span className="lead">{q.author}</span>
                  </>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
