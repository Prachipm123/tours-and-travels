import React, { useEffect } from "react";

import { BsArrowRightShort } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

const Blog = (props) => {
  let Posts = [
    {
      postImage: "Assets/img (7.1).jpg",
      title: "Best country in east africa",
      desc: "",
    },
  ];

  Posts = props.blogData;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="blog container section">
      <div className="secontainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            our best blog!
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to best incridible experiance in the world!
          </p>
        </div>

        <div className="mainContainer grid">
          {Posts.map(({ id, postImage, title, desc }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="singlePost grid"
              >
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>

                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">
                    {title}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="4000">
                    {desc}
                  </p>
                </div>

                <a
                  href="#"
                  className="flex"
                  data-aos="fade-up"
                  data-aos-duration="4500"
                >
                  Read more
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
