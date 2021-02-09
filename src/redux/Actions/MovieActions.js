import axios from "axios";
import Swal from "sweetalert2";
import createAction from ".";
import { FETCH_MOVIE_LIST } from '../Constants/MovieConstants'

export const fetchMovieInfo = (page, pageSize) => {
    return async (dispatch) => {
        try {
            await axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`,
                method: "GET",
            }).then(res => {
                console.log(res.data);
                dispatch(createAction(FETCH_MOVIE_LIST, res.data))
            }).catch(err => {
                console.log(err);
            })

        } catch (err) {
            console.log(err);
        }
    };
};
