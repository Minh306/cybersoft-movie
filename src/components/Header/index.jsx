import React from "react";
import webLogo from "../../assets/img/web-logo.png";
import marc from "../../assets/img/faces/marc.jpg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
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
            // aria-expanwded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTixContent">
            <ul className="navbar-nav nav-center">
              <li className="nav-item first">
                <a className="nav-link" href="#random">
                  Lịch Chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#random">
                  Cụm rạp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#random">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#random">
                  Ứng dụng
                </a>
              </li>
            </ul>
            <ul className="navbar-nav nav-end">
              <li className="nav-item user">
                <a className="nav-link" href="#random">
                  <img src={marc} alt="user" /> Đăng Xuất
                  {/* <NavLink to="/admin/user">Quản trị hệ thống</NavLink> */}
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
    </div>
  );
}
