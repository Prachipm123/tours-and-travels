import React, { useEffect } from "react";

let img = "Assets/customer.png";
let img2 = "Assets/mountain.jpg";
let img3 = "Assets/climbing.png";

let video = "Assets/video.mp4";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">why hikings!</h2>

        <div className="mainContent container grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem"
          >
            <img src={img2} alt="Image name" />
            <h3>100+ Mountains</h3>

            <p>
              Research show that the chance to break away from the normal
              rhythems of daily life reducess stress and improves health and
              wellbeing.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleItem"
          >
            <img src={img3} alt="Image name" />
            <h3>1000+ Hiking</h3>

            <p>
              Research show that the chance to break away from the normal
              rhythems of daily life reducess stress and improves health and
              wellbeing.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleItem"
          >
            <img src={img} alt="Image name" />
            <h3>2000+ Customers</h3>

            <p>
              Research show that the chance to break away from the normal
              rhythems of daily life reducess stress and improves health and
              wellbeing.
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="cardText"
            >
              <h2>Wonderful House experience nin there</h2>
              <p>
                The advanture subrancking is based on an equally weighted
                avarage of score from five country
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="cardVideo"
            >
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
