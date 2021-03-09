import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import moblieApp from "../../assets/img/app-mobile-img.png";
import appSlide from "../../assets/img/app-slide-1.jpg";

export default function TixApp() {
  return (
    <section className="tixApp">
      <div className="tixApp-wrap container">
        <div className="app-item app-left">
          <h1>
            Ứng dụng tiện lợi dành cho <br />
            người yêu điện ảnh
          </h1>
          <p>
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </p>
          <button type="button">App miễn phí - Tải về ngay!</button>
          <p className="down">
            TIX có hai phiên bản &nbsp;
            <a href="#radom">iOS</a> &amp;&nbsp;
            <a href="#random">Android</a>
          </p>
        </div>
        <div className="app-item app-right">
          <div className="phone-img">
            <img src={moblieApp} alt="mobile img" />
            <div className="slide-img">
              <OwlCarousel
                loop
                nav
                items={1}
                dots={false}
                className="tixAppCarousel owl-carousel owl-theme"
              >
                <div className="item">
                  <img src={appSlide} alt="img" />
                </div>
                <div className="item">
                  <img src="./img/app-slide-2.jpg" alt="img" />
                </div>
                <div className="item">
                  <img src="./img/app-slide-3.jpg" alt="img" />
                </div>
                <div className="item">
                  <img src="./img/app-slide-4.jpg" alt="img" />
                </div>
                <div className="item">
                  <img src="./img/app-slide-5.jpg" alt="img" />
                </div>
                <div className="item">
                  <img src="./img/app-slide-6.jpg" alt="img" />
                </div>
                <div className="item">
                  <img src="./img/app-slide-7.jpg" alt="img" />
                </div>
                <div className="item">
                  <img src="./img/app-slide-8.jpg" alt="img" />
                </div>
                <div className="item">
                  <img src="./img/app-slide-9.jpg" alt="img" />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
