import React, { useEffect, useState } from "react";
import "./index.css";
import userImg from "../../../assets/img/faces/marc.jpg";
import bhdCinema from "../../../assets/img/bhd-star-cinema-logo.png";
import screen from "../../../assets/img/screen.png";
import warning from "../../../assets/img/exclamation.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeatList, bookingTicket } from "redux/Actions/TicketAction";
import dayjs from "dayjs";
import { Fragment } from "react";
import createAction from "redux/Actions";
import { BOOKING } from "redux/Constants/TicketConstants";
import Swal from "sweetalert2";
import { fetchCinemaSystemList } from "redux/Actions/MovieTheaterAction";

export default function Checkout(props) {
  const dispatch = useDispatch();
  const movieInfor = useSelector((state) => state.ticketReducers.movieInfor);
  const seatList = useSelector((state) => state.ticketReducers.seatList);
  const cinemaSystemList = useSelector(
    (state) => state.movieTheaterReducers.cinemaSystemList
  );
  const maHTRSelected = localStorage.getItem("maHeThongRap");
  // console.log(maHTRSelected);
  const selectedList = useSelector(
    (state) => state.ticketReducers.selectedList
  );

  let format = dayjs(movieInfor?.ngayChieu).format();
  let dayInWeek = new Date(format);

  const renderLogo = () => {
    let x = cinemaSystemList.find(
      (maHeThongRap) => maHeThongRap.maHeThongRap === maHTRSelected
    );
    return x?.logo;
  };

  const renderDayInWeek = () => {
    if (dayInWeek.getDate() == 0) {
      return `Chủ Nhật ${movieInfor.ngayChieu} - ${movieInfor.gioChieu} - ${movieInfor.tenRap}`;
    } else {
      return `Thứ ${dayInWeek.getDay() + 1} ${movieInfor.ngayChieu} - ${
        movieInfor.gioChieu
      } - ${movieInfor.tenRap}`;
    }
  };

  const booking = (maGhe, giaVe, stt, loaiGhe) => () => {
    dispatch(
      createAction(BOOKING, {
        selectedList: {
          maGhe: maGhe,
          giaVe: giaVe,
          stt: stt,
          loaiGhe: loaiGhe,
        },
      })
    );
  };

  const payment = () => {
    if(selectedList.length === 0){
      Swal.fire({
        title: 'Oops !!!',
        text: `Bạn Chưa Chọn Vé !!!`,
        icon: 'error',
        allowOutsideClick: false
    })
    }else {
      Swal.fire({
        title: "Xác nhận đặt vé ?",
        text: "Vé đã mua không thể đổi hoặc hoàn tiền !!!",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Đặt Vé",
        cancelButtonText: "Hủy",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          if (localStorage.getItem("currentUser")) {
            let currentUser = JSON.parse(localStorage.getItem("currentUser"));
            let dataPost = {
              maLichChieu: props.match.params.id,
              danhSachVe: selectedList,
              taiKhoanNguoiDung: currentUser.taiKhoan,
            };
            dispatch(bookingTicket(dataPost));
          }
          // });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire("Oh !!!", "Bạn đã hủy tác vụ này !!!", "warning");
        }
      });
    }
  };

  useEffect(() => {
    dispatch(fetchSeatList(props.match.params.id));
    dispatch(fetchCinemaSystemList());
  }, []);
  return (
    <section className="checkout-wrap">
      {/* Step checkout */}
      <div className="step-checkout">
        <div className="left-steps">
          <p className="step-item">
            <span className="step-number">01</span>
            CHỌN GHẾ & THANH TOÁN
          </p>
          <p className="step-item">
            <span className="step-number">02</span>
            KẾT QUẢ ĐẶT VÉ
          </p>
        </div>
        <div className="step-user">
          <img src={userImg} className="img step--img" alt="" />
          <span>Dân MAN</span>
        </div>
      </div>
      {/* End step checkout */}
      {/* all-chairs */}
      <div className="cinema-chairs">
        {/* <img src={filmbg} className="img--film-bg" alt=""/> */}
        <div className="film-bg"></div>
        <div className="cinema-screen">
          <div className="cinema-screen-info">
            <div className="info-left">
              <img src={renderLogo()} className="img img--screen-cinema" alt="" />
              <div className="screen-title">
                <p className="name">
                  <span className="bhd-color">{movieInfor.tenCumRap}</span>
                </p>
                <p className="date">Hôm nay - 23:35 - RẠP 7</p>
              </div>
            </div>
            <div className="info-right">
              <p>thời gian giữ ghế</p>
              <p className="time-delay">03:00</p>
            </div>
          </div>
          <img src={screen} className="img img--screen" alt="" />
          <div className="seats-wrap">
            {seatList?.map((seat, index) => {
              let vip = seat.loaiGhe === "Vip" ? "vip" : "";
              let isBooked = seat.daDat ? "booked" : "";
              let disabled = seat.daDat ? true : false;
              let check = selectedList.findIndex(
                (selectedSeat) => seat.maGhe === selectedSeat.maGhe
              );
              let isBooking = check !== -1 ? "booking" : "";
              return (
                <Fragment key={index}>
                  <button
                    disabled={disabled}
                    className={`seat ${vip} ${isBooking} ${isBooked}`}
                    onClick={booking(
                      seat.maGhe,
                      seat.giaVe,
                      seat.stt,
                      seat.loaiGhe
                    )}
                  >
                    <span>{isBooked ? "X" : seat.stt}</span>
                  </button>
                  {(index + 1) % 16 === 0 ? <br /> : ""}
                </Fragment>
              );
            })}
          </div>
          <div className="explain-seats">
            {/* explain item */}
            <div className="explain-item">
              <span className="seat"></span>
              <p>Ghế thường</p>
            </div>
            {/* end explain item */}
            {/* explain item */}
            <div className="explain-item">
              <span className="seat seat-vip"></span>
              <p>Ghế vip</p>
            </div>
            {/* end explain item */}
            {/* explain item */}
            {/* <div className="explain-item">
              <span className="seat seat-couple"></span>
              <p>Ghế đôi</p>
            </div> */}
            {/* end explain item */}
            {/* explain item */}
            <div className="explain-item">
              <span className="seat seat-selected"></span>
              <p>Ghế đã chọn</p>
            </div>
            {/* end explain item */}
            {/* explain item */}
            <div className="explain-item">
              <span className="seat seat-on-select"></span>
              <p>Ghế đang chọn</p>
            </div>
            {/* end explain item */}
          </div>
        </div>
      </div>
      {/* end all chairs */}
      {/* Checkout Info */}
      <div className="checkout-info-wrap">
        <div className="checkout-info">
          <h3 className="total-price title">
            {selectedList
              .reduce((total, selectedSeat, index) => {
                return (total += selectedSeat.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            đ
          </h3>
          {/* Checkout film info */}
          <div className="checkout-film-info">
            <p className="film-name">
              {" "}
              <span className="common-age-type">C16</span> {movieInfor.tenPhim}
            </p>
            <p className="checkout-cinema">{movieInfor.tenCumRap}</p>
            <p className="checkout-date">{renderDayInWeek()}</p>
          </div>
          {/* End checkout film info */}
          {/* Checkout chair */}
          <div className="checkout-chair">
            <p className="chairs">
              Ghế:{" "}
              {selectedList.map((seat, index) => {
                let type = seat.loaiGhe === "Vip" ? "vipSeat" : "normalSeat";
                return (
                  <Fragment key={index}>
                    <span className={`chair ${type}`}>{seat.stt}</span>
                    <span className="normalSeat">, </span>
                  </Fragment>
                );
              })}
            </p>
            {/* <p className="total-price">150.000 đ</p> */}
          </div>
          <div className="book-ticket">
            <div className="book-note">
              <p className="note">
                <img className="warning" src={warning} alt="" />
                Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin
                nhắn <span>ZMS</span> (tin nhắn Zalo) và <span>Email</span> đã
                nhập
              </p>
            </div>
            <button onClick={payment} className="btn btn-book-ticket">
              Đặt Vé
            </button>
          </div>
          {/* end book ticket */}
        </div>
      </div>
      {/* End Checkout Info */}
    </section>
  );
}
