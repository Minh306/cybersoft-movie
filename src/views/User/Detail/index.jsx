import React from "react";
import "./index.css";
import bgFilm from "../../../assets/img/background-films-detail.jpg";
import filmImg from "../../../assets/img/film-17.jpg";
import filmStart from "../../../assets/img/film-star.png";
import filmStarthalf from "../../../assets/img/film-star-half.png";
import userImg from "../../../assets/img/faces/marc.jpg";
import listStars from "../../../assets/img/listStar.png";
import logoCinema1 from "../../../assets/img/bhd-star-cinema-logo.png";
import logoCinema2 from "../../../assets/img/dcine-cinema-logo.png";
import cinema1 from "../../../assets/img/bhd-star-cinema-1.jpg";
export default function Detail() {
  return (
    <>
      <section className="film-detail-container">
        <div className="top-wrap">
          <img src={bgFilm} className="img img--film-detail" alt="film" />
          <div className="film-detail-wrap tix-container">
            <div className="film-detail">
              <div className="film-intro">
                <div className="film-img">
                  <img src={filmImg} className="img img--film-img" alt="" />
                </div>
                <div className="film-info">
                  <p className="film-release">12.03.2021</p>
                  <p className="film-name">
                    {" "}
                    <span className="common-age-type">C16</span> Gái Già Lắm
                    Chiêu V - Những Cuộc Đời Vương Giả
                  </p>
                  <p className="film-time">90 phút - 0 IMDb - 2D/Digital</p>
                  <button className="btn film-btn">MUA VÉ</button>
                </div>
              </div>
              <div className="film-grade">
                {/* Circle grade */}
                <div className="circular p81">
                  <div className="inner">8.1</div>
                  <div className="circle">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
                {/* Starts */}
                <div className="starts-wrap">
                  <img src={filmStart} className="img--start" alt="" />
                  <img src={filmStart} className="img--start" alt="" />
                  <img src={filmStart} className="img--start" alt="" />
                  <img src={filmStarthalf} className="img--start" alt="" />
                </div>
                {/* Number of people  */}
                <p className="people-preview">181 người đánh giá</p>
              </div>
            </div>
          </div>
        </div>
        <div className="style-linear"></div>
        {/*  */}
        <div className="book-film tix-container">
          <ul className="nav nav-tabs book-film-navs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link common-title active"
                id="home-tab"
                data-toggle="tab"
                href="#book-film-showtimes"
              >
                Lịch Chiếu
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link common-title"
                id="profile-tab"
                data-toggle="tab"
                href="#book-film-info"
              >
                Thông tin
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link common-title"
                id="contact-tab"
                data-toggle="tab"
                href="#book-film-preview"
              >
                Đánh giá
              </a>
            </li>
          </ul>
          <div className="tab-content book-film-navs-content">
            <div className="tab-pane fade show active" id="book-film-showtimes">
              <div className="film-showtimes-wrap">
                <ul
                  className="nav nav-tabs film-showtimes-tabs"
                  id="film-showtimes-tabs"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link showtimes-cinema-item  hover--opacity border--bottom  active"
                      data-toggle="tab"
                      href="#showtimes-cinema-1"
                    >
                      <img
                        src={logoCinema1}
                        className="img img--cinema"
                        alt=""
                      />
                      <div className="cinema-item-info">
                        <p className="cinema-name">BHD Star Cineplex</p>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link showtimes-cinema-item hover--opacity border--bottom "
                      data-toggle="tab"
                      href="#showtimes-cinema-2"
                    >
                      <img
                        src={logoCinema2}
                        className="img img--cinema"
                        alt=""
                      />
                      <div className="cinema-item-info">
                        <p className="cinema-name">Beta Cinemas</p>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="film-showtimes-content-wrap">
                  <div className="film-week-wrap">
                    {/* date item */}
                    <a className="date-item active">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                    {/* date item */}
                    <a className="date-item un-selected">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                    {/* date item */}
                    <a className="date-item">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                    {/* date item */}
                    <a className="date-item">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                    {/* date item */}
                    <a className="date-item">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                    {/* date item */}
                    <a className="date-item">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                    {/* date item */}
                    <a className="date-item">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                    {/* date item */}
                    <a className="date-item">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                    {/* date item */}
                    <a className="date-item">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                    {/* date item */}
                    <a className="date-item">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                    {/* date item */}
                    <a className="date-item">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                    {/* date item */}
                    <a className="date-item">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                    {/* date item */}
                    <a className="date-item">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                    {/* date item */}
                    <a className="date-item">
                      <p className="day">Thứ 7</p>
                      <p className="date">13</p>
                    </a>
                    {/* end date item */}
                  </div>
                  <div
                    className="tab-content film-showtimes-content"
                    id="myTabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="showtimes-cinema-1"
                    >
                      {/* film item  */}
                      <div className="cinema-film-item border--bottom">
                        <div
                          className="film-collapse"
                          data-toggle="collapse"
                          data-target="#id-1"
                        >
                          <img
                            src={cinema1}
                            className="img img--cinema"
                            alt=""
                          />
                          <div className="film-collapse-info">
                            <p className="film-name">
                              {" "}
                              <span className="common-age-type">C16</span> Gái Già
                              Lắm Chiêu V - Những Cuộc Đời Vương Giả
                            </p>
                            <p className="film-time">
                              117 phút - TIX 9 - IMDb 0
                            </p>
                          </div>
                        </div>
                        <div className="collapse show film-schedules" id="id-1">
                          <div className="schedules-wrap">
                            <h3>2D Digital</h3>
                            <div className="schedules row">
                              <div className="no--padding  col-6  col-sm-3">
                                <a className="schedule-item">
                                  <span className="start">12:30</span>
                                  <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                  <span className="start">12:30</span>
                                  <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                  <span className="start">12:30</span>
                                  <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                  <span className="start">12:30</span>
                                  <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                  <span className="start">12:30</span>
                                  <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End film item */}
                      {/* film item  */}
                      <div className="cinema-film-item border--bottom">
                        <div
                          className="film-collapse"
                          data-toggle="collapse"
                          data-target="#id-2"
                        >
                          <img
                            src={cinema1}
                            className="img img--cinema"
                            alt=""
                          />
                          <div className="film-collapse-info">
                            <p className="film-name">
                              {" "}
                              <span className="common-age-type">C16</span> Gái Già
                              Lắm Chiêu V - Những Cuộc Đời Vương Giả
                            </p>
                            <p className="film-time">
                              117 phút - TIX 9 - IMDb 0
                            </p>
                          </div>
                        </div>
                        <div className="collapse show film-schedules" id="id-2">
                          <div className="schedules-wrap">
                            <h3>2D Digital</h3>
                            <div className="schedules row">
                              <div className="no--padding  col-6  col-sm-3">
                                <a className="schedule-item">
                                  <span className="start">12:30</span>
                                  <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                  <span className="start">12:30</span>
                                  <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                  <span className="start">12:30</span>
                                  <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                  <span className="start">12:30</span>
                                  <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                  <span className="start">12:30</span>
                                  <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End film item */}
                    </div>
                    <div className="tab-pane fade" id="showtimes-cinema-2">
                      2222
                    </div>
                    <div className="tab-pane fade" id="showtimes-cinema-3">
                      3333
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane book-film-info fade" id="book-film-info">
              <div className="book-film-info-wrap row">
                <div className="info-left col-sm-6">
                  {/* Item */}
                  <div className="row info-left-item">
                    <div className="info-left-title">Ngày công chiếu</div>
                    <div className="info-left-content">12.03.2021</div>
                  </div>
                  {/* end item */}
                  {/* Item */}
                  <div className="row info-left-item">
                    <div className="info-left-title">Đạo diễn</div>
                    <div className="info-left-content"></div>
                  </div>
                  {/* end item */}
                  {/* Item */}
                  <div className="row info-left-item">
                    <div className="info-left-title">Diễn Viên</div>
                    <div className="info-left-content">
                      Tuấn Trần, Trấn Thành
                    </div>
                  </div>
                  {/* end item */}
                  {/* Item */}
                  <div className="row info-left-item">
                    <div className="info-left-title">Thể Loại</div>
                    <div className="info-left-content">Định Dạng</div>
                  </div>
                  {/* end item */}
                  {/* Item */}
                  <div className="row info-left-item">
                    <div className="info-left-title">Quốc Gia SX</div>
                    <div className="info-left-content">Việt Nam</div>
                  </div>
                  {/* end item */}
                </div>
                <div className="info-right col-sm-6">
                  <p>Nội dung</p>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="book-film-preview">
              <div className="film-preview-wrap">
                <div className="film-preview-user">
                  <p className="user-think">
                    <img src={userImg} className="img" alt="" /> Bạn nghĩ gì về
                    phim này?
                  </p>
                  <p className="user-stars">
                    <img src={listStars} className="img" alt="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </section>
    </>
  );
}
