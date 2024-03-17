import "./Video.css";
import { CiPlay1 } from "react-icons/ci"; 
export default function Video() {
  return (
    <>
      <div className="banner mt-5">
        <div className="video section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 offset-lg-4">
                <div className="section-heading text-center">
                  <h6>| Video View</h6>
                  <h2>Get Closer View &amp; Different Feeling</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="video-frame">
            <img src="./video-frame.jpg" alt=""/>
            <a href="https://youtube.com" target="_blank">
              <CiPlay1 />
                </a>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
      <div className="fun-facts">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="wrapper">
            <div className="row">
              <div className="col-lg-4">
                <div className="counter">
                  <h2 className="timer count-title count-number" data-to="34" data-speed="1000">34</h2>
                   <p className="count-text ">Buildings<br/>Finished Now</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="counter">
                  <h2 className="timer count-title count-number" data-to="12" data-speed="1000">12</h2>
                  <p className="count-text ">Years<br/>Experience</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="counter">
                  <h2 className="timer count-title count-number" data-to="24" data-speed="1000">24</h2>
                  <p className="count-text ">Awwards<br/>Won 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
