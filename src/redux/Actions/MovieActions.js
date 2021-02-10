import axios from "axios";
import Swal from "sweetalert2";
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
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim`,
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
                        text: 'Chỉnh Sửa Thông Tin Phim  Thành Công !!!',
                        icon: 'success',
                        allowOutsideClick: false
                    })
                }
                // dispatch(fetchUserInfo())
            }).catch(err => {
                console.log(err);
                Swal.fire('Oops !!!', 'Thông tin nhập chưa hợp lệ, xin hãy kiểm tra lại !!!', 'error')
            })

        } catch (err) {
            console.log(err);
        }
    };
};
