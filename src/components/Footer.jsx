import React from "react";

const Footer = (props) => {
  const [about, setAbout] = React.useState("");
  const thisYear = new Date().getFullYear();

  React.useEffect(() => {
    console.log(props.data)
    if (props.data && props.data.about) {
      setAbout(props.data.about.aboutBody[0] ?? "")
    }
  }, [props.data])

  return (
    <footer className="footer-area bg-f mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h3>About Us</h3>
            <p>
              {about}
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h3>Opening hours</h3>
            <p>
              <span className="text-color">Mon-Sun :</span> 10:00am - 12:00am
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h3>Contact information</h3>
            <p className="lead">
              headquarters address
            </p>
            <p className="lead">
              <a href="tel:">+01 2000 800 9999</a>
            </p>
            <p>
              <a href="#"> help@cafecaffeine.in</a>
            </p>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="company-name">
                All Rights Reserved. &copy; {thisYear} Cafe Caffeine
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
