import { FaCalendar } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiEnvelopeOpen } from "react-icons/bi";
import { CiMap } from "react-icons/ci";
import './Nav.css';
export function NavBar() {

  return (
    <>
    <div className="top-head container  mt-2  d-flex justify-content-between align-content-center flex-wrap   ">
      <div className="info d-flex gap-5 ">
      <a href="">  <BiEnvelopeOpen className="infoIcon" /> info@company.com</a>
      <p>  <CiMap className="infoIcon" /> Sunny Isles Beach, FL 33160</p>
      </div>
      <div className="social d-flex gap-4">
        <a href="">  <TiSocialFacebook /></a>
        <a href=""> <TiSocialTwitter /></a>
        <a href=""> <SlSocialInstagram /></a>
        <a href=""> <TiSocialLinkedin /></a>
      </div>
    </div>
         <Navbar expand="lg" className="nav">
          <Container>
        <Navbar.Brand href="#home"><h1>
        Villa</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav2 mx-auto d-flex gap-5 ">
            <Nav.Link href="#home" className=''>Home</Nav.Link>
            <Nav.Link href="#Properties">Properties</Nav.Link>
            <Nav.Link href="#Property Details">Property Details</Nav.Link>
            <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
            <Nav.Link href="/" className='icon '>
               <div className="i"> <FaCalendar /> </div> Schedule a visit
            </Nav.Link>         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}
