import './BestDeal.css'
import { FaCalendar } from "react-icons/fa";

export default function BestDeal() {
  return (
    <>
  <div className="container best-deal mt-5  ">
    <div className="row">
        <div className="col-lg-4">
            <div className="section-headeing">
            <h6 >| Best Deal</h6>
            <h2>Find Your Best Deal Right Now!</h2>
            </div>
        </div>
        <div className="col-lg-12">
            <div className="content">
                <div className="row">
                    <ul className='nav nav-wrapper'>
                        <li className='nav-item' role="presentation">
                            <button className='nav-link active'>Appartment  </button>
                        </li>
                        <li className='nav-item'role="presentation">
                        <button className='nav-link '>Villa House  </button>
                        </li>
                        <li className='nav-item'  role="presentation">
                        <button className='nav-link '>Penthouse  </button>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <div className="col-lg-12">
          <div className="tabs-content">
            <div className="row">
                 
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="info-table">
                        <ul>
                          <li>Total Flat Space <span>185 m2</span></li>
                          <li>Floor number <span>26th</span></li>
                          <li>Number of rooms <span>4</span></li>
                          <li>Parking Available <span>Yes</span></li>
                          <li>Payment Process <span>Bank</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <img src="./deal-01.jpg" alt=""/>
                    </div>
                    <div className="col-lg-3">
                      <h4>Extra Info About Property</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. 
                      <br/><br/>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                      <div className="icon-button">
                        <a href="">
                         <div className="i">
                         <FaCalendar   />
                         </div>
                             Schedule a visit</a>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
    </>
  )
}
