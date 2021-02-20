import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs"; 

import createAction from ".";
import { FETCH_MOVIE_LIST, SET_EDITED, SET_POPUP } from '../Constants/MovieConstants'

export const fetchMovieInfo = (page, pageSize) => {
    return async (dispatch) => {
        try {
            await axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`,
                method: "GET",
            }).then(res => {
                res.data.ngayKhoiChieu = dayjs(res.data.ngayKhoiChieu).format("DD/MM/YYYY")
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

export const editMovie = (form) => {
    return (dispatch) => {
        console.log("haha", form);
        try {
            const accessToken = localStorage.getItem("accessToken")
            Swal.fire({
                title: "Waiting ...",
                text: "Đang xử lý ...",
                icon: "info",
                showConfirmButton: false,
                allowOutsideClick: false
            })
            dispatch(createAction(SET_POPUP, false));
            axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload`,
                method: "POST",
                data: form,
                headers: {
                    Authorization: `Bearer ` + accessToken,
                }
            }).then(({ status }) => {
                console.log('status', status);
                if (status === 200) {
                    dispatch(createAction(SET_EDITED, true));
                    Swal.fire({
                        title: 'Yeah !!!',
                        text: 'Chỉnh Sửa Thông Tin Phim Thành Công !!!',
                        icon: 'success',
                        allowOutsideClick: false
                    })
                }
            }).catch(err => {
                console.log(err.response?.data);
                Swal.fire('Oops !!!', 'Dữ liệu chưa hợp lệ, xin hãy kiểm tra lại !!!', 'error')
            })

        } catch (err) {
            console.log(err);
        }
    };
};
