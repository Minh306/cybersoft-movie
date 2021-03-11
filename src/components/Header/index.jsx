import React, { useState } from "react";
import webLogo from "../../assets/img/web-logo.png";
import marc from "../../assets/img/faces/marc.jpg";
import location from "../../assets/img/location-header.png";
import { NavLink } from "react-router-dom";
import disableScroll from "disable-scroll";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Header() {
  const [scroll, setScroll] = useState(true);

  const handleScroll = () => {
    setScroll(!scroll);
    if ((scroll)) {
      disableScroll.on();
    }else{
      disableScroll.off();
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light tixNav">
        <a className="navbar-brand" href="#logo">  
          <img src={webLogo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTixContent"
          aria-controls="navbarTixContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleScroll}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTixContent">
          <ul className="navbar-nav">
            <li className="nav-item first">
              <Link className="nav-link" to="tixCarousel" spy={true} smooth={true} offset={0} duration={1000} delay={0}>
                Lịch Chiếu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="tixCinema" spy={true} smooth={true} offset={0} duration={1000} delay={0}>
                Cụm rạp
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="tixNews" spy={true} smooth={true} offset={-65} duration={1000} delay={0}>
                Tin Tức
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="tixApp" spy={true} smooth={true} offset={-65} duration={1000} delay={0}>
                Ứng dụng
              </Link>
            </li>
            <li className="nav-item user">
              <a className="nav-link" href="#random">
                <img src={marc} alt="user" /> Đăng Nhập
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#random"
                id="navbarTixDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img className="location" src={location} alt="location" />
                Hồ Chí Minh
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarTixDropdown"
              >
                <a className="dropdown-item" href="#random">
                  Hồ Chí Minh
                </a>
                <a className="dropdown-item" href="#random">
                  Hà Nội
                </a>
                <a className="dropdown-item" href="#random">
                  Đà Nẵng
                </a>
                <a className="dropdown-item" href="#random">
                  Hải Phòng
                </a>
                <a className="dropdown-item" href="#random">
                  Biên Hòa
                </a>
                <a className="dropdown-item" href="#random">
                  Nha Trang
                </a>
                <a className="dropdown-item" href="#random">
                  Bình Dương
                </a>
                <a className="dropdown-item" href="#random">
                  Phan Thiết
                </a>
                <a className="dropdown-item" href="#random">
                  Hạ Long
                </a>
                <a className="dropdown-item" href="#random">
                  Cần Thơ
                </a>
                <a className="dropdown-item" href="#random">
                  Vũng Tàu
                </a>
                <a className="dropdown-item" href="#random">
                  Nha Trang
                </a>
                <a className="dropdown-item" href="#random">
                  Quy Nhơn
                </a>
                <a className="dropdown-item" href="#random">
                  Huế
                </a>
                <a className="dropdown-item" href="#random">
                  Long Xuyên
                </a>
                <a className="dropdown-item" href="#random">
                  Thái Nguyên
                </a>
                <a className="dropdown-item" href="#random">
                  Buôn Ma Thuột
                </a>
                <a className="dropdown-item" href="#random">
                  Bắc Giang
                </a>
                <a className="dropdown-item" href="#random">
                  Bến Tre
                </a>
                <a className="dropdown-item" href="#random">
                  Việt Trì
                </a>
                <a className="dropdown-item" href="#random">
                  Ninh Bình
                </a>
                <a className="dropdown-item" href="#random">
                  Thái Bình
                </a>
                <a className="dropdown-item" href="#random">
                  Vinh
                </a>
                <a className="dropdown-item" href="#random">
                  Bảo Lộc
                </a>
                <a className="dropdown-item" href="#random">
                  Đà Lạt
                </a>
                <a className="dropdown-item" href="#random">
                  Trà Vinh
                </a>
                <a className="dropdown-item" href="#random">
                  Yên Bái
                </a>
                <a className="dropdown-item" href="#random">
                  Kiên Giang
                </a>
                <a className="dropdown-item" href="#random">
                  Vĩnh Long
                </a>
                <a className="dropdown-item" href="#random">
                  Cà Mau
                </a>
                <a className="dropdown-item" href="#random">
                  Hậu Giang
                </a>
                <a className="dropdown-item" href="#random">
                  Tây Ninh
                </a>
                <a className="dropdown-item" href="#random">
                  Tuyên Quang
                </a>
                <a className="dropdown-item" href="#random">
                  Thanh Hóa
                </a>
                <a className="dropdown-item" href="#random">
                  Nam Định
                </a>
                <a className="dropdown-item" href="#random">
                  Hải Dương
                </a>
                <a className="dropdown-item" href="#random">
                  Gia Lai
                </a>
                <a className="dropdown-item" href="#random">
                  Hà Tĩnh
                </a>
                <a className="dropdown-item" href="#random">
                  Phú Yên
                </a>
                <a className="dropdown-item" href="#random">
                  Bạc Liêu
                </a>
                <a className="dropdown-item" href="#random">
                  Long An
                </a>
                <a className="dropdown-item" href="#random">
                  Đồng Thới
                </a>
                <a className="dropdown-item" href="#random">
                  Hà Nam
                </a>
                <a className="dropdown-item" href="#random">
                  Bắc Ninh
                </a>
                <a className="dropdown-item" href="#random">
                  Quảng Trị
                </a>
                <a className="dropdown-item" href="#random">
                  Kon Tum
                </a>
                <a className="dropdown-item" href="#random">
                  Sóc Trăng
                </a>
                <a className="dropdown-item" href="#random">
                  Sơn La
                </a>
                <a className="dropdown-item" href="#random">
                  Lạng Sơn
                </a>
                <a className="dropdown-item" href="#random">
                  Quảng Ngãi
                </a>
                <a className="dropdown-item" href="#random">
                  Mỹ Tho
                </a>
                <a className="dropdown-item" href="#random">
                  Đồng Tháp
                </a>
                <a className="dropdown-item" href="#random">
                  Hưng Yên
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}