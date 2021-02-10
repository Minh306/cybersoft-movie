import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import createAction from "redux/Actions";
import { EDIT_MOVIE } from "redux/Constants/MovieConstants";
import { SET_EDITED } from "redux/Constants/UserConstants";

const useStyles = makeStyles(styles);

export default function MovieTable(props) {
  const classes = useStyles();
  const dateFormat = require("dateformat");
  const { tableHead, tableData, tableHeaderColor } = props;
  const movieInfor = useSelector((state) => state.movieReducers.movieInfor);
  const dispatch = useDispatch();

  const handleEditMovie = (maPhim) => () => {
    let movieSelected = {};
    let haveMovie = false;
    for (let movie of movieInfor.items) {
      if (maPhim === movie.maPhim) {
        movieSelected = { ...movie };
        haveMovie = true;
      }
    }
    if (haveMovie) {
      dispatch(
        createAction(EDIT_MOVIE, {
          selectedMovie: { ...movieSelected },
          isPopUp: true,
          typePopUp: "Cập Nhật Thông Tin",
        })
      );
      dispatch(createAction(SET_EDITED, false));
    }
  };

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.items?.map((prop, key) => {
            const ngayKhoiChieu = prop.ngayKhoiChieu

            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                <TableCell className={classes.tableCell}>
                  {prop.maPhim}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.tenPhim}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <img className={classes.poster} src={prop.hinhAnh} alt="movie-img"></img>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.danhGia}/10
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {dateFormat(ngayKhoiChieu, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <Button onClick={handleEditMovie(prop.maPhim)} variant="outlined" color="primary">
                    Edit
                </Button>
                  <Button variant="outlined" color="secondary">
                    Delete
                </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

MovieTable.defaultProps = {
  tableHeaderColor: "gray"
};

MovieTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  // tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
