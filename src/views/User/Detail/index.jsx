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
import createAction from "redux/Actions";
import { MA_HE_THONG_RAP } from "redux/Constants/MovieConstants";
import { NGAY_CHIEU_GIO_CHIEU } from "redux/Constants/MovieConstants";
export default function Detail(props) {
  const movieDetail = useSelector((state) => state.movieReducers.movieDetail);
  const ngayChieuGioChieu = useSelector(
    (state) => state.movieReducers.ngayChieuGioChieu
  );
  const maHeThongRap = useSelector((state) => state.movieReducers.maHeThongRap);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieDetail(props.match.params.id));
  }, []);

  const [day, setDay] = useState("");

  console.log(day);
  const selectTheaters = (maHeThongRap) => () => {
    dispatch(createAction(MA_HE_THONG_RAP, { maHeThongRap: maHeThongRap }));
  };
  const renderDate = () => {
    function renderDate(cumRapChieu) {
      if (cumRapChieu != null) {
        cumRapChieu.map((item, index) => {
          let lichChieuPhim = item.lichChieuPhim;
          lichChieuPhim.forEach((item) =>
            data.add(dayjs(item.ngayChieuGioChieu).format("YYYY-MM-DD"))
          );
        });
        if (data) {
          let output = [...data];
          dispatch(
            createAction(NGAY_CHIEU_GIO_CHIEU, { ngayChieuGioChieu: output[0] })
          );
          return output.map((items, index) => {
            let active = index === 0 ? "active" : "";
            let x = `Thứ ${dayjs(items).day() + 1}`;
            let y = dayjs(items).day() + 1;
            return (
              <a
                className={`date-item ${active}`}
                value={items}
                onClick={handleChangeTime(items)}
                key={index}
              >
                <p className="day">{y === 1 ? `Chủ Nhật` : x}</p>
                <p className="date">{dayjs(items).format("DD/MM")}</p>
              </a>
            );
          });
        }
      }
    }
    let data = new Set();
    let cumRapChieu = [];
    let heThongRapChieu = movieDetail.heThongRapChieu;
    //lay ra rap dau tien
    if (heThongRapChieu != null && maHeThongRap == "") {
      cumRapChieu = heThongRapChieu[0].cumRapChieu;
      return renderDate(cumRapChieu);
      // console.log(heThongRapChieu[0].cumRapChieu);
    } else if (heThongRapChieu) {
      cumRapChieu = heThongRapChieu.find(
        (cinema) => cinema.maHeThongRap == maHeThongRap
      );
      return renderDate(cumRapChieu.cumRapChieu);
    }
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
  function getCinemaByDate() {
    let tmp;
    let cumRapChieu = [];
    let dateList = [];
    let cinemaList = new Set();
    let heThongRapChieu = movieDetail.heThongRapChieu;
    if (heThongRapChieu != null && maHeThongRap == "") {
      tmp = heThongRapChieu[0];
    } else if (heThongRapChieu) {
      tmp = heThongRapChieu.find(
        (cinema) => cinema.maHeThongRap == maHeThongRap
      );
    }
    if (tmp) {
      cumRapChieu = tmp.cumRapChieu;
      if (cumRapChieu) {
        cumRapChieu.forEach((cinema) => {
          cinema.lichChieuPhim.forEach((item) => {
            if (dayjs(item.ngayChieuGioChieu).format("YYYY-MM-DD") === day) {
              cinemaList.add(cinema);
              dateList.push(dayjs(item.ngayChieuGioChieu).format("YYYY-MM-DD"));
            }
          });
        });
      }
    }
    return cinemaList;
  }
  const renderTheaters = () => {
    const cinemaList = Array.from(getCinemaByDate());
    console.log(cinemaList);
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
                        if (
                          dayjs(items.ngayChieuGioChieu).format(
                            "YYYY-MM-DD"
                          ) === day
                        ) {
                          // console.log(items);
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
                        }
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

  const handleChangeTime = (dateSelected) => () => {
    setDay(dateSelected);
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
                  <div className="film-week-wrap">{renderDate()}</div>
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