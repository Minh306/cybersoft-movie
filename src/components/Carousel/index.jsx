import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import playVid from "assets/img/play-video.png";
import film1 from "../../assets/img/film-1.png";
import film2 from "../../assets/img/film-2.png";
import film3 from "../../assets/img/film-3.png";
import film4 from "../../assets/img/film-4.png";
import film5 from "../../assets/img/film-5.png";
import film6 from "../../assets/img/film-6.png";
import film7 from "../../assets/img/film-7.png";
import film8 from "../../assets/img/film-8.png";
import film9 from "../../assets/img/film-9.png";
import film10 from "../../assets/img/film-10.png";
import film11 from "../../assets/img/film-11.png";
import film12 from "../../assets/img/film-12.png";
import film13 from "../../assets/img/film-13.png";
import film14 from "../../assets/img/film-14.png";
import film15 from "../../assets/img/film-15.png";
import film16 from "../../assets/img/film-16.png";
import filmStar from "../../assets/img/film-star.png";
import filmStarHalf from "../../assets/img/film-star-half.png";
import filmDatTruoc from "../../assets/img/film-datruoc.png";
import filmPromo from "../../assets/img/film-promo.png";

export default function Carousel() {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
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
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film10} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/wuAzIeMx1Ck"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>6.3</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                  {/* promo */}
                  <div className="promo">
                    <img src={filmDatTruoc} alt="dat truoc" />
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film9} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/OnGHDIYdt7k"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Những Kẻ Vô Cảm - Don't
                        Look Back (C18)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>7.8</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                  {/* promo */}
                  <div className="promo">
                    <img src={filmPromo} alt="dat truoc" />
                  </div>
                </div>
              </div>
              {/* Item Carousel 2 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film3} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/P5Zg6rQLJGI"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>6.3</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film4} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/Eyju5ODfd-g"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C16</span> Sài Gòn Trong Cơn Mưa -
                        Saigon In The Rain (C16)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>7.8</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              {/* Item Carousel 3 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film5} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/lAjEKy85E1M"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C16</span> Kỳ Nghỉ Nhớ Đời -
                        Golden Holiday (C16)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>6.3</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                  {/* promo */}
                  <div className="promo">
                    <img src={filmPromo} alt="dat truoc" />
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film8} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/crR0Jq_Xnv4"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Liên Quân Siêu Thú
                        - Stardog and Turbocat (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>7.8</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              {/* Item Carousel 4 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film6} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/1PsgXINqNgo"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>6.3</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film7} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/Jfj8fTPMhvg"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>7.8</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              {/* Item Carousel 5 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film11} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>6.3</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film12} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>7.8</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                  {/* promo */}
                  <div className="promo">
                    <img src={filmDatTruoc} alt="dat truoc" />
                  </div>
                </div>
              </div>
              {/* Item Carousel 6 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film13} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>6.3</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                  {/* promo */}
                  <div className="promo">
                    <img src={filmDatTruoc} alt="dat truoc" />
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film14} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>7.8</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                  {/* promo */}
                  <div className="promo">
                    <img src={filmPromo} alt="dat truoc" />
                  </div>
                </div>
              </div>
              {/* Item Carousel 7 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film15} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>6.3</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film16} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>7.8</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              {/* Item Carousel 8 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film1} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>6.3</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film2} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>7.8</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              {/* Item Carousel 9 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film4} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>6.3</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film6} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>7.8</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              {/* Item Carousel 10 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film8} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>6.3</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film11} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>7.8</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              {/* Item Carousel 11 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film11} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>6.3</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film15} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>7.8</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              {/* Item Carousel 12 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film13} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>6.3</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film14} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                      <div className="bookTicket">
                        <button type="button">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="start">
                    <a href="#random">
                      <h4>7.8</h4>
                      <p>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStar} alt="start" />
                        </span>
                        <span>
                          <img src={filmStarHalf} alt="start" />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
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
              {/* Item Carousel 1 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film3} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                  {/* promo */}
                  <div className="promo">
                    <img src={filmPromo} alt="dat truoc" />
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film4} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C16</span> Sài Gòn Trong Cơn Mưa -
                        Saigon In The Rain (C16)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                  {/* Starts */}
                  {/* promo */}
                  <div className="promo">
                    <img src={filmDatTruoc} alt="dat truoc" />
                  </div>
                </div>
              </div>
              {/* Item Carousel 2 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film10} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                  {/* promo */}
                  <div className="promo">
                    <img src={filmDatTruoc} alt="dat truoc" />
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film9} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Những Kẻ Vô Cảm - Don't
                        Look Back (C18)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                  {/* promo */}
                  <div className="promo">
                    <img src={filmPromo} alt="dat truoc" />
                  </div>
                </div>
              </div>
              {/* Item Carousel 3 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film15} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film16} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Item Carousel 4 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film6} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film7} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Item Carousel 5 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film11} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film12} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                  {/* promo */}
                  <div className="promo">
                    <img src={filmDatTruoc} alt="dat truoc" />
                  </div>
                </div>
              </div>
              {/* Item Carousel 6 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film13} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                  {/* promo */}
                  <div className="promo">
                    <img src={filmDatTruoc} alt="dat truoc" />
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film14} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                  {/* promo */}
                  <div className="promo">
                    <img src={filmPromo} alt="dat truoc" />
                  </div>
                </div>
              </div>
              {/* Item Carousel 7 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film5} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C16</span> Kỳ Nghỉ Nhớ Đời -
                        Golden Holiday (C16)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                  {/* promo */}
                  <div className="promo">
                    <img src={filmPromo} alt="dat truoc" />
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film8} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Liên Quân Siêu Thú
                        - Stardog and Turbocat (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Item Carousel 8 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film1} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film2} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                  {/* Starts */}
                </div>
              </div>
              {/* Item Carousel 9 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film4} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film6} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Item Carousel 10 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film8} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film11} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                  {/* Starts */}
                </div>
              </div>
              {/* Item Carousel 11 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film11} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film15} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Item Carousel 12 */}
              <div className="item-wrap">
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film13} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age">C18</span> Ngạ Quỷ: Tiếng Thét
                        Đồng Gió Hú - The Ghoul: Horror At The Howling Field
                        (C18)
                      </p>
                      <span className="minutes">112 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
                {/* movie item */}
                <div className="movie-item">
                  {/* Content */}
                  <div className="movie-content">
                    <div className="movie-img">
                      <img src={film14} alt="film" />
                      {/* LInear */}
                      <div className="linear">
                        <button
                          type="button"
                          className="btn-play-trailer"
                          data-src="https://www.youtube.com/embed/nh0BklwPN9Q"
                        >
                          <img src={playVid} alt="play trialer" />
                        </button>
                      </div>
                    </div>
                    <div className="movie-detail">
                      <p>
                        <span className="age green">P</span> Phù Thủy, Phù Thủy
                        - The Witches (P)
                      </p>
                      <span className="minutes">106 phút</span>
                      {/* when hover */}
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
