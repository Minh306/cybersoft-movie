import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import createAction from "redux/Actions";
import { fetchMovie } from "redux/Actions/MovieActions";
import { fetchMovieTheater } from "redux/Actions/MovieTheaterAction";

export default function Dropdown() {
  const dispatch = useDispatch();
  const movieInfor = useSelector((state) => state.movieReducers.movieInfor);
  const theatersList = useSelector(
    (state) => state.movieTheaterReducers.theatersList
  );

  const [select, setSelect] = useState({
    maPhim: "",
    maCumRap: "",
    maLichChieu: "",
    ngayChieu: "",
    suat: "",
  });
  const [infor, setInfor] = useState({
    tenPhim: "",
    tenCumRap: "",
  });

  const handleMovieName = (tenPhim, maPhim) => () => {
    setInfor({ ...infor, tenPhim: tenPhim });
    dispatch(fetchMovieTheater(maPhim));
  };

  const handleMovieTheater = (tenCumRap, maCumRap) => () => {
    setInfor({ ...infor, tenCumRap: tenCumRap });
    setSelect({ ...select, maCumRap: maCumRap });
  };

  const handleMovieDay = (ngayChieu) => () => {
    setSelect({ ...select, ngayChieu: ngayChieu });
  };

  const handleMovieShowtime = (suat, ngayChieuGioChieu) => () => {
    setSelect({ ...select, suat: suat });
  };

  const renderDate = () => {
    let res = [];
    let unique = null;
    let output = [];
    if (select.maCumRap) {
      return theatersList?.map((item) => {
        return item?.cumRapChieu.map((item, index) => {
          if (item.maCumRap === select.maCumRap) {
            for (let i = 0; i < item.lichChieuPhim.length; i++) {
              res.push(
                dayjs(item.lichChieuPhim[i].ngayChieuGioChieu).format(
                  "YYYY-MM-DD"
                )
              );
            }
            if (res) {
              unique = res.filter((value, index) => {
                return res.indexOf(value) === index;
              });
            }
            if (unique) {
              output = unique.map((item, index) => {
                return (
                  <a
                    className="dropdown-item"
                    value={item}
                    key={index}
                    href="#phim"
                    onClick={handleMovieDay(item)}
                  >
                    {dayjs(item).format("DD/MM/YYYY")}
                  </a>
                );
              });
            }
            return output;
          }
        });
      });
    }
  };

  const renderShowtime = () => {
    if (select.ngayChieu) {
      return theatersList?.map((item) => {
        return item?.cumRapChieu?.map((child) => {
          if (child.maCumRap === select.maCumRap) {
            return child.lichChieuPhim.map((item, index) => {
              if (item.ngayChieuGioChieu.indexOf(select.ngayChieu) !== -1) {
                return (
                  <a
                    className="dropdown-item"
                    value={item.maLichChieu}
                    key={index}
                    href="#phim"
                    onClick={handleMovieShowtime(
                      item.ngayChieuGioChieu,
                      item.maLichChieu
                    )}
                  >
                    {item.ngayChieuGioChieu.slice(11, 16)}
                  </a>
                );
              }
            });
          }
        });
      });
    }
  };

  return (
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
          {infor.tenPhim ? `${infor.tenPhim}` : "Chọn Phim"}
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby="bannerMoviesDropdown"
          x-placement="bottom-start"
        >
          {movieInfor?.map((name, index) => {
            return (
              <a
                className="dropdown-item"
                value={name.maPhim}
                key={index}
                href="#phim"
                onClick={handleMovieName(name.tenPhim, name.maPhim)}
              >
                {name.tenPhim}
              </a>
            );
          })}
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
          {infor.tenCumRap ? `${infor.tenCumRap}` : "Chọn Rạp"}
        </button>
        <div className="dropdown-menu" aria-labelledby="bannerCinemasDropdown">
          {theatersList?.map((theatersList) => {
            return theatersList.cumRapChieu.map((theater, index) => {
              return (
                <a
                  className="dropdown-item"
                  value={theater.maCumRap}
                  key={index}
                  href="#phim"
                  onClick={handleMovieTheater(
                    theater.tenCumRap,
                    theater.maCumRap
                  )}
                >
                  {theater.tenCumRap}
                </a>
              );
            });
          })}
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
          {select.ngayChieu
            ? `${dayjs(select.ngayChieu).format("DD/MM/YYYY")}`
            : "Chọn Ngày Chiếu"}
        </button>
        <div
          className="dropdown-menu dates"
          aria-labelledby="bannerDatesDropdown"
        >
          {renderDate()}
          {/* <a className="dropdown-item" href="#random">
            <span>Hôm nay</span>
            <span className="date">2020-11-19</span>
          </a> */}
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
          {select.suat ? `${select.suat.slice(11, 16)}` : "Chọn Suất Chiếu"}
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby="bannerShowTimesDropdown"
        >
          {renderShowtime()}
        </div>
      </div>
      <div className="banner__btn">
        <a href="#random">MUA VÉ NGAY</a>
      </div>
    </div>
  );
}
