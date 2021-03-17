import React, { useEffect, useState } from "react";
import "./index.css";
import filmStart from "../../../assets/img/film-star.png";
import filmStarthalf from "../../../assets/img/film-star-half.png";
import userImg from "../../../assets/img/faces/marc.jpg";
import listStars from "../../../assets/img/listStar.png";
import cinema1 from "../../../assets/img/bhd-star-cinema-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail } from "redux/Actions/MovieActions";
import dayjs from "dayjs";
import { it } from "date-fns/locale";
import createAction from "redux/Actions";
import { MA_HE_THONG_RAP } from "redux/Constants/MovieConstants";
export default function Detail(props) {
  const movieDetail = useSelector((state) => state.movieReducers.movieDetail);
  const maHeThongRap = useSelector((state) => state.movieReducers.maHeThongRap);
  const isRender = useSelector((state) => state.movieReducers.isRender);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieDetail(props.match.params.id));
  }, []);

  const selectTheaters = (maHeThongRap) => () => {
    dispatch(createAction(MA_HE_THONG_RAP, { maHeThongRap: maHeThongRap }));
  };

  const renderDay = () => {
    let res = [];
    let unique = null;
    let output = [];
    return movieDetail.heThongRapChieu?.map((items, index) => {
      if (isRender === false) {
        if (index === 0) {
          return dispatch(
            createAction(MA_HE_THONG_RAP, {
              maHeThongRap: items.maHeThongRap,
              isRender: true,
            })
          );
        }
      }

      if (maHeThongRap === items.maHeThongRap) {
        return items?.cumRapChieu.map((items, index) => {
          for (let i = 0; i < items.lichChieuPhim.length; i++) {
            res.push(
              dayjs(items.lichChieuPhim[i].ngayChieuGioChieu).format(
                "YYYY-MM-DD"
              )
            );
            console.log(res);
          }
          if (res) {
            // unique = res.filter((value, index) => {
            //   return res.indexOf(value) === index;
            // });
            unique = [...new Set(res)];
          }
          console.log(unique);
          if (unique) {
            output = unique.map((items, index) => {
              let active = index === 0 ? "active" : "";
              let x = `Thứ ${dayjs(items).day() + 1}`;
              let y = dayjs(items).day() + 1;
              return (
                <a className={`date-item ${active}`} value={items} key={index}>
                  <p className="day">{y === 1 ? `Chủ Nhật` : x}</p>
                  <p className="date">{dayjs(items).format("DD")}</p>
                </a>
              );
            });
          }
          return output;
        });
      }
    });
  };

  const renderCinemaSystem = () => {
    return movieDetail.heThongRapChieu?.map((items, index) => {
      let active = index === 0 ? "active" : "";
      return (
        <li key={index} className="nav-item">
          <a
            className={`nav-link showtimes-cinema-item hover--opacity border--bottom ${active}`}
            data-toggle="tab"
            href={`#${items.maHeThongRap}`}
            onClick={selectTheaters(items.maHeThongRap)}
          >
            <img src={items.logo} className="img img--cinema" alt="" />
            <div className="cinema-item-info">
              <p className="cinema-name">{items.tenHeThongRap}</p>
            </div>
          </a>
        </li>
      );
    });
  };

  const renderTheaters = () => {
    return movieDetail.heThongRapChieu?.map((items, index) => {
      let active = index === 0 ? "active" : "";
      return (
        <div
          key={index}
          className={`tab-pane fade show ${active}`}
          id={items.maHeThongRap}
        >
          {items.cumRapChieu?.map((items, index) => {
            return (
              <div key={index} className="cinema-film-item border--bottom">
                <div
                  key={index}
                  className="film-collapse"
                  data-toggle="collapse"
                  data-target={`#${items.maCumRap}`}
                >
                  <img src={cinema1} className="img img--cinema" alt="cinema" />
                  <div className="film-collapse-info">
                    <p className="film-name">
                      <span className="common-age-type">{items.tenCumRap}</span>
                    </p>
                    <p className="film-time">117 phút - TIX 9 - IMDb 0</p>
                  </div>
                </div>
                <div
                  className="collapse show film-schedules"
                  id={items.maCumRap}
                >
                  <div className="schedules-wrap">
                    <h3>2D Digital</h3>
                    <div className="schedules row">
                      {items.lichChieuPhim?.map((items, index) => {
                        let data = dayjs(items.ngayChieuGioChieu);
                        return (
                          <div
                            key={index}
                            className="no--padding  col-6 col-sm-3"
                          >
                            <a className="schedule-item">
                              <span className="start">
                                {data.format("HH:mm")}
                              </span>
                              <span className="end">
                                {" "}
                                ~{" "}
                                {data
                                  .set("hours", data.get("hours") + 1)
                                  .format("HH")}
                                :
                                {data
                                  .set("minutes", data.get("minutes") + 30)
                                  .format("mm")}
                              </span>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <>
      <section className="film-detail-container">
        <div className="top-wrap">
          <img
            src={movieDetail.hinhAnh}
            className="img img--film-detail"
            alt="film"
          />
          <div className="film-detail-wrap tix-container">
            <div className="film-detail">
              <div className="film-intro">
                <div className="film-img">
                  <img
                    src={movieDetail.hinhAnh}
                    className="img img--film-img"
                    alt=""
                  />
                </div>
                <div className="film-info">
                  <p className="film-release">
                    {dayjs(movieDetail.ngayKhoiChieu).format("DD/MM/YYYY")}
                  </p>
                  <p className="film-name">
                    <span className="common-age-type">C16</span>
                    {movieDetail.tenPhim}
                  </p>
                  <p className="film-time">120 phút - 0 IMDb - 2D/Digital</p>
                  <button className="btn film-btn">MUA VÉ</button>
                </div>
              </div>
              <div className="film-grade">
                {/* Circle grade */}
                <div className="circular p81">
                  <div className="circularUnfill"></div>
                  <div className="inner">{movieDetail.danhGia}</div>
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
                  {renderCinemaSystem()}
                </ul>
                <div className="film-showtimes-content-wrap">
                  <div className="film-week-wrap">{renderDay()}</div>
                  <div
                    className="tab-content film-showtimes-content"
                    id="myTabContent"
                  >
                    {renderTheaters()}
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
                    <div className="info-left-content">
                      {dayjs(movieDetail.ngayKhoiChieu).format("DD/MM/YYYY")}
                    </div>
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
                    <div className="info-left-content"></div>
                  </div>
                  {/* end item */}
                  {/* Item */}
                  <div className="row info-left-item">
                    <div className="info-left-title">Thể Loại</div>
                    <div className="info-left-content"></div>
                  </div>
                  <div className="row info-left-item">
                    <div className="info-left-title">Định Dạng</div>
                    <div className="info-left-content">2D/Digital</div>
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
                  <div className="row info-left-item">
                    <div className="info-left-title">Nội Dung</div>
                  </div>
                  <div className="row info-left-item">
                    <div className="content">{movieDetail.moTa}</div>
                  </div>
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
