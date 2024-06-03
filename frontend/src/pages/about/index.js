import "bootstrap/dist/css/bootstrap.css";

import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

function AboutPage() {
  return (
    <div style={{ "background-color": "#0b2c6e" }}>
      <Navbar />

      <br></br>
      <br></br>
      <br></br>

      <div class="container">
        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card-body">
            <h1 style={{ "text-align": "center" }}>About Us</h1>
            <br></br>
            <br></br>
            <br></br>

            <p>
            Travel Dot Pvt Ltd is an award winning Tour Consultant Company and one of India’s largest Tour Operator helping travel enthusiasts across the globe to discover world’s most amazing destinations. Our team of 200+ travel consultants helps you handcraft holiday of your lifetime. Our network is spread up to 35 locations across India and we have successfully planned holidays to more 
            than 75 countries due to the immense trust and belief of our customers on us.
            </p>
            <br></br>
            <br></br>
            <p>
            We are a one stop travel solution and have planned vacations successfully for more than 1,55,000 families. We provide all-inclusive group tours with in-house tour managers as well as tailor made holidays personalised as per the travellers preferred themes and interests. Our USP is providing vegetarian and jain food along with other international cuisines as per the travellers palate. We also provide services not limited to honeymoon packages, 
            self-drive tours, ticketing, visa, hotel, cruises booking, etc.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;
