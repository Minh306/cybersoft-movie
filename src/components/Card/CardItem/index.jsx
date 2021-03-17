import React, { useEffect } from "react";
import playVid from "../../../assets/img/play-video.png";
import filmStar from "../../../assets/img/film-star.png";
import filmStarHalf from "../../../assets/img/film-star-half.png";
import filmDatTruoc from "../../../assets/img/film-datruoc.png";
import filmPromo from "../../../assets/img/film-promo.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import createAction from "redux/Actions";
import { MA_HE_THONG_RAP } from "redux/Constants/MovieConstants";
export default function CardItem(props) {
  const { data } = props;
  // const isRender = useSelector((state) => state.movieReducers.isRender);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      createAction(MA_HE_THONG_RAP, { maHeThongRap: "", isRender: false })
    );
  }, []);

  const renderMovie = () => {
    let output = [];
    for (let i = 0; i < data.length; i++) {
      output.push(
        <div className="item-wrap">
          {/* movie item */}
          <div className="movie-item">
            {/* Content */}
            <div className="movie-content">
              <div className="movie-img">
                <img src={data[i]?.hinhAnh} alt="film" />
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
                {data[i]?.danhGia <= 5 ? (
                  <p>
                    <span className="age green">P</span> {data[i]?.tenPhim}
                  </p>
                ) : (
                  <p>
                    <span className="age">C18</span> {data[i]?.tenPhim}
                  </p>
                )}
                <span className="minutes">120 phút</span>
                {/* when hover */}
                <div className="bookTicket">
                  <NavLink to={`/detail/${data[i]?.maPhim}`} type="button">
                    MUA VÉ
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Starts */}
            <div className="start">
              <a href="#random">
                <h4>{data[i]?.danhGia}</h4>
                {data[i]?.danhGia === 10 ? (
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
                      <img src={filmStar} alt="start" />
                    </span>
                  </p>
                ) : (
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
                )}
              </a>
            </div>
            {/* promo */}
            <div className="promo">
              {data[i]?.danhGia <= 5 ? (
                <img src={filmPromo} alt="dat truoc" />
              ) : (
                <img src={filmDatTruoc} alt="dat truoc" />
              )}
            </div>
          </div>
          {/* movie item */}
          <div className="movie-item">
            {/* Content */}
            <div className="movie-content">
              <div className="movie-img">
                <img src={data[i + 1]?.hinhAnh} alt="film" />
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
                {data[i + 1]?.danhGia <= 5 ? (
                  <p>
                    <span className="age green">P</span> {data[i + 1]?.tenPhim}
                  </p>
                ) : (
                  <p>
                    <span className="age">C18</span> {data[i + 1]?.tenPhim}
                  </p>
                )}
                <span className="minutes">120 phút</span>
                {/* when hover */}
                <div className="bookTicket">
                  <NavLink to={`/detail/${data[i + 1]?.maPhim}`} type="button">
                    MUA VÉ
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Starts */}
            <div className="start">
              <a href="#random">
                <h4>{data[i + 1]?.danhGia}</h4>
                {data[i + 1]?.danhGia === 10 ? (
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
                      <img src={filmStar} alt="start" />
                    </span>
                  </p>
                ) : (
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
                )}
              </a>
            </div>
            {/* promo */}
            <div className="promo">
              {data[i + 1]?.danhGia <= 5 ? (
                <img src={filmPromo} alt="dat truoc" />
              ) : (
                <img src={filmDatTruoc} alt="dat truoc" />
              )}
            </div>
          </div>
        </div>
      );
      i++;
    }
    return output;
  };
  return <>{renderMovie()}</>;
}
