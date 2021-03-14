import axios from "axios";
import createAction from ".";
import { FETCH_CINEMA_SYSTEM_LIST } from "redux/Constants/MovieTheaterConstants";
import { FETCH_THEATERS_LIST } from "redux/Constants/MovieTheaterConstants";

export const fetchCinemaSystemList = () => {
    return async (dispatch) => {
        try {
            await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
                method: "GET",
            }).then(res => {
                dispatch(createAction(FETCH_CINEMA_SYSTEM_LIST, res.data))
            })
        } catch (err) {
            // console.log(err);
        }
    }
}

export const fetchTheaterList = (maHeThongRap) => {
    return (dispatch) => {
        try {
            axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
                method: "GET",
            }).then(res => {
                dispatch(createAction(FETCH_THEATERS_LIST, res.data))
            })
        } catch (err) {
            // console.log(err);
        }
    }
}

export const fetchMovieTheater = (maPhim) => {
    return async (dispatch) => {
        try {
            await axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: "GET",
            }).then(res => {
                dispatch(createAction(FETCH_THEATERS_LIST, res.data.heThongRapChieu))
            }).catch(err => {
                // console.log(err);
            })

        } catch (err) {
            // console.log(err);
        }
    };
}
