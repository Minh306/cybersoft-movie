import axios from "axios";
import Swal from "sweetalert2";
import createAction from ".";
import { FETCH_DETAIL_USER, FETCH_USER_LIST, SET_CREATED, SET_DELETED, SET_EDITED, SET_LOGIN, SET_POPUP } from '../Constants/UserConstants'

export const fetchUserInfo = (page, pageSize) => {
    return async (dispatch) => {
        try {
            console.log(page);
            await axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`,
                method: "GET",
            }).then(res => {
                console.log(res.data);
                dispatch(createAction(FETCH_USER_LIST, res.data))
            }).catch(err => {
                console.log(err);
            })

        } catch (err) {
            console.log(err);
        }
    };
};

export const login = (form) => {
    return async (dispatch) => {
        try {
            await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: "POST",
                data: form,
            }).then(res => {
                console.log(res.status);
                let maNguoiDung = res.data.maLoaiNguoiDung;
                if (maNguoiDung !== "QuanTri") {
                    Swal.fire(
                        'Oops !!!',
                        'Bạn không có quyền truy cập vào hệ thống này !!!',
                        'error'
                    )
                    return;
                }
                // let error = res.status;
                localStorage.setItem("accessToken", res.data.accessToken);
                localStorage.setItem("currentUser", JSON.stringify(res.data));
                console.log(res.data);
                dispatch(createAction(SET_LOGIN, res.data));
                Swal.fire(
                    'Yeah !!!',
                    'Đăng nhập thành công !!!',
                    'success'
                )
            }).catch(err => {
                console.log(err);
                Swal.fire('Opps !!!', 'Tài khoản hoặc mật khẩu không hợp lệ, hãy thử lại !!!', 'error')
            })

        } catch (err) {
            console.log(err);
        }
    };
};

export const editUser = (form) => {
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
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                method: "PUT",
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
                        text: 'Chỉnh Sửa Người Dùng Thành Công !!!',
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

export const deleteUser = (taiKhoan) => {
    return (dispatch) => {
        try {
            const accessToken = localStorage.getItem("accessToken")
            Swal.fire({
                title: "Waiting ...",
                text: "Đang xử lý ...",
                icon: "info",
                showConfirmButton: false,
            })
            axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ` + accessToken,
                }
            }).then(({ data, status }) => {
                if (status === 200) {
                    // console.log(data);
                    Swal.fire({
                        title: 'Yeah !!!',
                        text: 'Xóa Người Dùng Thành Công !!!',
                        icon: 'success',
                        allowOutsideClick: false
                    })
                    dispatch(createAction(SET_DELETED, true));
                }
            }).catch(err => {
                console.log(err);
                Swal.fire('Oops !!!', 'Có lỗi trong việc xóa user này !!!', 'error')
            })
        } catch (err) {
            console.log(err);
        }
    }
}
export const createUser = (form) => {
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
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
                method: "POST",
                data: form,
                headers: {
                    Authorization: `Bearer ` + accessToken,
                }
            }).then(({ data, status }) => {
                if (status === 200) {
                    console.log(data);
                    Swal.fire({
                        title: 'Yeah !!!',
                        text: 'Tạo Người Dùng Thành Công !!!',
                        icon: 'success',
                        allowOutsideClick: false
                    })
                    dispatch(createAction(SET_CREATED, true));
                }
            }).catch(err => {
                console.log(err);
                Swal.fire({
                    title: 'Oops !!!',
                    text: 'Có Lỗi Trong Việc Tạo Tài Khoản !!!',
                    icon: 'error',
                    allowOutsideClick: false
                })
            })
        } catch (err) {
            console.log(err);
        }
    }
}
export const fetchDetailUser = (taiKhoan) => {
    console.log(taiKhoan);
    return (dispatch) => {
        try {
            Swal.fire({
                title: "Waiting ...",
                text: "Đang xử lý ...",
                icon: "info",
                showConfirmButton: false,
                allowOutsideClick: false
            })
            axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
                method: "POST",
                data: {
                    taiKhoan,
                },
            }).then((res) => {
                Swal.close()
                dispatch(createAction(FETCH_DETAIL_USER, res.data))
            }).catch(err => {
                console.log(err);
            })
        } catch (err) {
            console.log(err);
        }
    }
}

