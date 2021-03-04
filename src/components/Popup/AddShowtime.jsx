import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { SET_POPUP } from "redux/Constants/MovieConstants";
import createAction from "redux/Actions";
import {
  CardMedia,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import {
  DateTimePicker,
  KeyboardDatePicker,
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import clsx from "clsx";
import DateFnsUtils from "@date-io/date-fns";
import { Label } from "@material-ui/icons";
import { fetchCinemaSystemList } from "redux/Actions/MovieTheaterAction";
import { fetchTheaterList } from "redux/Actions/MovieTheaterAction";
import { FETCH_ROOM_LIST } from "redux/Constants/MovieTheaterConstants";
import { FETCH_THEATERS_LIST } from "redux/Constants/MovieTheaterConstants";
import dayjs from "dayjs";
import { addShowtimeMovie } from "redux/Actions/MovieActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function AddShowtime(props) {
  const { data } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const isPopUp = useSelector((state) => state.movieReducers.isPopUp);
  const typeOfPopUp = useSelector((state) => state.movieReducers);
  const movieDetail = useSelector((state) => state.movieReducers.movieDetail);
  const cinemaSystemList = useSelector(
    (state) => state.movieTheaterReducers.cinemaSystemList
  );
  const theatersList = useSelector(
    (state) => state.movieTheaterReducers.theatersList
  );

  const roomList = useSelector((state) => state.movieTheaterReducers.roomList);

  console.log(cinemaSystemList);

  const [form, setForm] = useState({
    maPhim: data,
    ngayChieuGioChieu: new Date(),
    maRap: "",
    giaVe: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
    // console.log(form);
  };

  const handleChangeCinemaSystem = (event) => {
    const { value } = event.target;
    if (value !== "") {
      dispatch(fetchTheaterList(value));
    } else {
      dispatch(createAction(FETCH_THEATERS_LIST, []));
      dispatch(createAction(FETCH_ROOM_LIST, []));
    }
  };

  const hanleChangeTheaters = (event) => {
    let roomList = [];
    const { value } = event.target;
    let index = theatersList.findIndex((room) => room.maCumRap === value);
    console.log(index);
    if (index !== -1) {
      roomList.push({
        danhSachRap: theatersList[index].danhSachRap,
      });
      dispatch(createAction(FETCH_ROOM_LIST, roomList));
    }
    if (value === "") {
      dispatch(createAction(FETCH_ROOM_LIST, []));
    }
  };

  const handleDateChange = (date) => {
    console.log(date);
    setForm({
      ...form,
      ngayChieuGioChieu: date,
    });
  };

  console.log(form);

  const handleClose = () => {
    dispatch(createAction(SET_POPUP, false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addShowtimeMovie(form))
  };

  useEffect(() => {
    dispatch(fetchCinemaSystemList());
  }, []);

  return (
    <div className={classes.root}>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isPopUp}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {typeOfPopUp.typePopUp}
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={3}>
              <Grid item xs="12">
                <CardMedia
                  style={{
                    width: "100%",
                    height: 600,
                    backgroundSize: "contain",
                  }}
                  alt="movie-img"
                  image={movieDetail.hinhAnh}
                />
                <Typography align="center" variant="h6" gutterBottom>
                  Phim: {movieDetail.tenPhim}
                </Typography>
              </Grid>
            </Grid>
            {/* <Grid item xs="12"></Grid> */}
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <InputLabel id="demo-simple-select-label">
                  Chọn Hệ Thống Rạp
                </InputLabel>
                <Select
                  required
                  defaultValue=""
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handleChangeCinemaSystem}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cinemaSystemList?.map((cinemaSystem) => {
                    return (
                      <MenuItem value={cinemaSystem.maHeThongRap}>
                        {cinemaSystem.tenHeThongRap}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Grid>
              <Grid item xs={4}>
                <InputLabel id="demo-simple-select-label">
                  Chọn Cụm Rạp
                </InputLabel>
                <Select
                  required
                  defaultValue=""
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={hanleChangeTheaters}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {theatersList?.map((theatersList) => {
                    return (
                      <MenuItem value={theatersList.maCumRap}>
                        {theatersList.tenCumRap}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Grid>
              <Grid item xs={4}>
                <InputLabel id="demo-simple-select-label">Chọn Rạp</InputLabel>
                <Select
                  required
                  defaultValue=""
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="maRap"
                  value={form.maRap}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {roomList?.map((roomList) => {
                    return roomList.danhSachRap?.map((list) => {
                      return (
                        <MenuItem value={list.maRap}>{list.tenRap}</MenuItem>
                      );
                    });
                  })}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DateTimePicker
                    fullWidth
                    ampm
                    name="ngayChieuGioChieu"
                    label="Ngày Giờ Khởi Chiếu"
                    format="dd/MM/yyyy - hh:mm a"
                    value={form.ngayChieuGioChieu}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="giaVe"
                  label="Giá Vé"
                  id="outlined-start-adornment"
                  value={form.giaVe}
                  onChange={handleChange}
                  className={clsx(classes.margin, classes.textField)}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">VND</InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  className={classes.submit}
                >
                    Tạo Lịch Chiếu
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                  className={classes.submit}
                >
                  Hủy
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
