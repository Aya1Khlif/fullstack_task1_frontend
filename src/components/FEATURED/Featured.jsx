import "./Featured.css";
import Accordion from "react-bootstrap/Accordion";

export default function Featured() {
  return (
    <div className=" featuredmain container mt-5 d-flex align-items-center  justify-content-center  gap-5 ">
      <div className="img">
        <img src="./featured.jpg" alt="featured" />
      </div>
      <div className="featured">
        <span>
          <em>FEATURED</em>
        </span>
        <h1 className="w-50">Best Appartment & Sea View</h1>
        <div className="container w-50">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header> Best useful links ? </Accordion.Header>
              <Accordion.Body>
                Get <strong>the best villa</strong> website template in HTML CSS
                and Bootstrap for your business. TemplateMo provides you the
                <a
                  href="https://www.google.com/search?q=best+free+css+templates"
                  target="_blank"
                >
                  best free CSS templates
                </a>{" "}
                in the world. Please tell your friends about it.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header
                style={{
                  color: "#f35525",
                }}
              >
                How does this work ?{" "}
              </Accordion.Header>
              <Accordion.Body>
                Dolor <strong>almesit amet</strong>, consectetur adipiscing
                elit, sed doesn't eiusmod tempor incididunt ut labore
                consectetur
                <code>adipiscing</code> elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Why is Villa Agency the best ?{" "}
              </Accordion.Header>
              <Accordion.Body>
                Dolor <strong>almesit amet</strong>, consectetur adipiscing
                elit, sed doesn't eiusmod tempor incididunt ut labore
                consectetur <code>adipiscing</code>
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="information ">
          <ul className="list">
            <li>
              <img src="./icon1.png" alt="" />
              <h4>
                250 m2
                <br />
                <span>Total Flat Space</span>
              </h4>
              <span>Total Flat Space</span>
            </li>
            <li>
              <img src="./icon2.png" alt="" />
              <h4>
                Contract
                <br />
                <span>Contract Ready</span>
              </h4>
              <span>Contract Ready</span>
            </li>
            <li>
              <img src="./icon3.png" alt="" />
              <h4>
                Payment
                <br />
                <span>Payment Process</span>
              </h4>
              <span>24/7 Under Control</span>
            </li>
            <li>
              <img src="./icon4.png" alt="" />
              <h4>
                Safety
                <br />
                <span>24/7 Under Control</span>
              </h4>
              <span>24/7 Under Control</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
