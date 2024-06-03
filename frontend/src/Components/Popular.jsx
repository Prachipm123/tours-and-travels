import React, { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import useSWR from "swr";

import Aos from "aos";
import "aos/dist/aos.css";

const Popular = (props) => {
  let Data = [
    {
      id: 1,
      imgSrc: "Assets/img (2).jpg",
      destTitle: "Machu Picchu",
      location: "Peru",
      grade: "CULTURAL RELAX",
    },
  ];

  Data = props.popularData;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cities to natural specterulas,come see the best of
              the world
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div data-aos="fade-up" className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="Image Title" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{id}</div>

                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
