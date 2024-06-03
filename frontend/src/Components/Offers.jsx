import React, { useEffect } from "react";
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

const Offers = (props) => {
  let OfferArray = [
    {
      id: 3,
      imgSrc: "Assets/img (7).jpg",
      destTitle: "Agnkor Wat",
      location: "Cambodia",
      price: "$4,400",
    },
  ];

  OfferArray = props.offersData;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="secIntro"
        >
          <h2 className="secTitle">Special Offers</h2>
          <p>
            from historical cities to natural specturals,come see the best of
            the world!
          </p>
        </div>

        <div className="mainContent grid">
          {OfferArray.map(({ id, imgSrc, destTitle, location, price }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="singleOffer"
              >
                <div className="destImage">
                  <img src={imgSrc} alt={destTitle} />
                  <span className="discount">30%Off</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">For Rent</span>
                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon" />
                      <small>2 Beds</small>
                    </div>

                    <div className="singleAmenity flex">
                      <MdBathtub className="icon" />
                      <small>1 Bath</small>
                    </div>

                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small>wi-fi</small>
                    </div>

                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>450 vine #310, {location}</small>
                  </div>
                  <button className="btn flex">
                    view details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
