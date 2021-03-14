import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardItem from "components/Card/CardItem";

export default function Carousel(props) {
  const { data } = props;

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    loop: true,
    slideBy: 4,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      400: {
        items: 1,
        dots: true,
      },
      600: {
        items: 2,
        dots: true,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <section className="tixCarousel" id="tixCarousel">
      <div className="tixCarrousel__wrap container">
        <ul
          className="nav nav-tabs tixCaroulselTab"
          id="tixCaroulselTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#tixDangChieu"
              role="tab"
              aria-controls="home"
            >
              Đang Chiếu
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#tixSapChieu"
              role="tab"
              aria-controls="profile"
            >
              Sắp Chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="tixCaroulselTabContent">
          <div
            className="tab-pane fade show active"
            id="tixDangChieu"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <OwlCarousel
              className="filmsOnShowCarrousel owl-carousel owl-theme"
              {...options}
            >
              <CardItem data={data} />
            </OwlCarousel>
          </div>
          <div
            className="tab-pane fade"
            id="tixSapChieu"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <OwlCarousel
              className="filmsOnShowCarrousel owl-carousel owl-theme"
              {...options}
            >
              <CardItem data={data} />
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
