import './Properties.css';
import Cards from "../Cards/Card";
export default function Properties() {
  return (
    <>
      <div className="container mt-5">
      <div className="heading text-center">
            <h6>| Properties</h6>
            <h2>We Provide The Best Property You Like</h2>
          </div>
          <div className="card">
        <div className="card-item">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Cards
                tophead={"1.180.000"}
                img={"./property-1.jpg"}
                title={"18 New Street Miami, OR 97219"}
                desc={
                  "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots"
                }
              />
           
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Cards
                tophead={"1.180.000"}
                img={"./property-2.jpg"}
                title={"18 New Street Miami, OR 97219"}
                desc={
                  "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots"
                }
              />
           
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Cards
                tophead={"5.180.000"}
                img={"./property-3.jpg"}
                title={"18 New Street Miami, OR 97219"}
                desc={
                  "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots"
                }
              />
           
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Cards
                tophead={"1.180.000"}
                img={"./property-04.jpg"}
                title={"18 New Street Miami, OR 97219"}
                desc={
                  "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots"
                }
              />
           
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Cards
                tophead={"2.180.000"}
                img={"./property-05.jpg"}
                title={"18 New Street Miami, OR 97219"}
                desc={
                  "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots"
                }
              />
           
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Cards
                tophead={"3.180.000"}
                img={"./property-06.jpg"}
                title={"18 New Street Miami, OR 97219"}
                desc={
                  "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots"
                }
              />
           
        </div>
      </div>
  
        </div>
      </div>

      </div>
    </>
  )
}
