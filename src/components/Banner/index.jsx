import React from "react";
import banner1 from "assets/img/banner1.jpg";
import banner2 from "assets/img/banner2.png";
import banner3 from "assets/img/banner3.jpg";
import playVid from "assets/img/play-video.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function index() {
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
                <img src={playVid} alt="play trialer" />
              </button>
            </div>
            <div className="item">
              <img src={banner2} alt="banner" />
            </div>
            <div className="item">
              <img src={banner3} alt="banner" />
            </div>
          </OwlCarousel>
          <div className="banner__book">
            {/* Movies dropdown */}
            <div className="dropdown" id="movies-dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="bannerMoviesDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                Phim
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="bannerMoviesDropdown"
                x-placement="bottom-start"
              >
                <a className="dropdown-item" href="#phim">
                  Tiệc Trăng Máu - Blood Moon Party (C18)
                </a>
                <a className="dropdown-item" href="#phim">
                  Phù Thủy, Phù Thủy - The Witches (P)
                </a>
                <a className="dropdown-item" href="#phim">
                  Bí Mật Của Gió - Secrets of the Wind (C16)
                </a>
                <a className="dropdown-item" href="#phim">
                  Chồng Người Ta (C18)
                </a>
                <a className="dropdown-item" href="#phim">
                  Trái Tim Quái Vật (C18)
                </a>
                <a className="dropdown-item" href="#phim">
                  Sài Gòn Trong Cơn Mưa - Saigon In The Rain (C16)
                </a>
                <a className="dropdown-item" href="#phim">
                  Trốn Chạy - Run (C18)
                </a>
                <a className="dropdown-item" href="#phim">
                  Đấu Sĩ Tối Thượng - Jiu Jitsu (C18)
                </a>
                <a className="dropdown-item" href="#phim">
                  Fate/Stay Night III: Heaven's Feel{" "}
                </a>
                <a className="dropdown-item" href="#phim">
                  Đừng Gọi Anh Là Bố - My God! Father (C16)
                </a>
                <a className="dropdown-item" href="#phim">
                  Kiếm Khách - The Swordsman (C18)
                </a>
                <a className="dropdown-item" href="#phim">
                  Hào Quang Đánh Cắp - Diva (C16)
                </a>
                <a className="dropdown-item" href="#phim">
                  Thanh Âm Trong Mắt Em - Your Eyes Tell (C16)
                </a>
                <a className="dropdown-item" href="#phim">
                  Ranh Giới Quỷ - The Other Side (C18)
                </a>
                <a className="dropdown-item" href="#phim">
                  Liên Quân Siêu Thú - Stardog and Turbocat (P)
                </a>
                <a className="dropdown-item" href="#phim">
                  Những Kẻ Vô Cảm - Don't Look Back (C18)
                </a>
                <a className="dropdown-item" href="#phim">
                  Ngạ Quỷ: Tiếng Thét Đồng Gió Hú - The Ghoul: Horror At The
                  Howling Field (C18)
                </a>
                <a className="dropdown-item" href="#phim">
                  Thang Máy (C18)
                </a>
                <a className="dropdown-item" href="#phim">
                  Tháp Lửa - The Tower (P)
                </a>
                <a className="dropdown-item" href="#phim">
                  Kỳ Nghỉ Nhớ Đời - Golden Holiday (C16)
                </a>
              </div>
            </div>
            {/* Cinemas dropdown */}
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="bannerCinemasDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                Rạp
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="bannerCinemasDropdown"
              >
                <a className="dropdown-item" href="#random">
                  Vui lòng chọn phim
                </a>
                <a className="dropdown-item" href="#random">
                  BHD Star Bitexco
                </a>
                <a className="dropdown-item" href="#random">
                  BHD Star Vincom 3/2
                </a>
                <a className="dropdown-item" href="#random">
                  BHD Star Vincom Lê Văn Việt
                </a>
                <a className="dropdown-item" href="#random">
                  BHD Star Vincom Quang Trung
                </a>
                <a className="dropdown-item" href="#random">
                  BHD Star Vincom Thảo Điền
                </a>
                <a className="dropdown-item" href="#random">
                  BHD Star ‎Phạm Hùng
                </a>
                <a className="dropdown-item" href="#random">
                  CineStar Hai Bà Trưng
                </a>
                <a className="dropdown-item" href="#random">
                  CineStar Quốc Thanh
                </a>
                <a className="dropdown-item" href="#random">
                  DCINE Bến Thành
                </a>
                <a className="dropdown-item" href="#random">
                  DDC - Đống Đa
                </a>
                <a className="dropdown-item" href="#random">
                  Lotte Cinema Cộng Hòa
                </a>
              </div>
            </div>
            {/* Dates dropdown */}
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="bannerDatesDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                Ngày xem
              </button>
              <div
                className="dropdown-menu dates"
                aria-labelledby="bannerDatesDropdown"
              >
                <a className="dropdown-item" href="#random">
                  Vui lòng chọn phim và rạp
                </a>
                <a className="dropdown-item" href="#random">
                  <span>Hôm nay</span>
                  <span className="date">2020-11-19</span>
                </a>
                <a className="dropdown-item" href="#random">
                  <span>Ngày mai</span>
                  <span className="date">2020-11-20</span>
                </a>
                <a className="dropdown-item" href="#random">
                  <span>Thứ bảy</span>
                  <span className="date">2020-11-21</span>
                </a>
                <a className="dropdown-item" href="#random">
                  <span>Chủ nhật</span>
                  <span className="date">2020-11-22</span>
                </a>
                <a className="dropdown-item" href="#random">
                  <span>Thứ hai</span>
                  <span className="date">2020-11-23</span>
                </a>
                <a className="dropdown-item" href="#random">
                  <span>Thứ ba</span>
                  <span className="date">2020-11-24</span>
                </a>
                <a className="dropdown-item" href="#random">
                  <span>Thứ tư</span>
                  <span className="date">2020-11-25</span>
                </a>
              </div>
            </div>
            {/* showtimes dropdown */}
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="bannerShowTimesDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                Suất chiếu
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="bannerShowTimesDropdown"
              >
                <a className="dropdown-item" href="#random">
                  Vui lòng chọn phim, rạp và ngày xem
                </a>
                <a className="dropdown-item" href="#random">
                  09:40
                </a>
                <a className="dropdown-item" href="#random">
                  10:35
                </a>
                <a className="dropdown-item" href="#random">
                  11:40
                </a>
                <a className="dropdown-item" href="#random">
                  12:55
                </a>
                <a className="dropdown-item" href="#random">
                  13:55
                </a>
                <a className="dropdown-item" href="#random">
                  15:45
                </a>
                <a className="dropdown-item" href="#random">
                  18:00
                </a>
                <a className="dropdown-item" href="#random">
                  20:20
                </a>
                <a className="dropdown-item" href="#random">
                  20:35
                </a>
              </div>
            </div>
            <div className="banner__btn">
              <a href="#random">MUA VÉ NGAY</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
