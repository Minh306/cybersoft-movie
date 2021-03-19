import React, { useState } from "react";
import banner1 from "assets/img/banner1.jpg";
import banner2 from "assets/img/banner2.png";
import banner3 from "assets/img/banner3.jpg";
import playVid from "assets/img/play-video.png";
import OwlCarousel from "react-owl-carousel";
import ModalVideo from 'react-modal-video'
import Dropdown from "components/Dropdown";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Banner() {
  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState(false);
  return (
    <section className="bannerTix" id="bannerTix">
      <div className="bannerTix__wrap">
        <div className="banner__img">
          <OwlCarousel
            items={1}
            className="tixCarrousel owl-carousel owl-theme"
            loop
            nav
            autoplay
            autoplayTimeout={3000}
          >
            <div className="item">
              <img src={banner1} alt="banner" />
              <button
                type="button"
                className="btn-play-trailer"
                data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
              >
                <img src={playVid} onClick={() => {setOpen(true); setTrailer("fNE3wgaHr18")}} alt="play trialer" />
              </button>
            </div>
            <div className="item">
              <img src={banner2} alt="banner" />
            </div>
            <div className="item">
              <img src={banner3} alt="banner" />
            </div>
          </OwlCarousel>
          <Dropdown />
        </div>
      </div>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailer} onClose={() => setOpen(false)} />
    </section>
  );
}
