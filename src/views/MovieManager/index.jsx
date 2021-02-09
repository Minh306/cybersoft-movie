import React, { useEffect, useState } from "react";
// @material-ui/core components
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import MovieTable from "components/Table/MovieTable.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieInfo } from "redux/Actions/MovieActions";
import { green } from "@material-ui/core/colors";
import Pagination from "@material-ui/lab/Pagination";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function TableList() {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const dispatch = useDispatch();
  const classes = useStyles();
  const movieInfor = useSelector((state) => state.movieReducers.movieInfor);
  // Converting {} to [[]]
  // const finalArr = [];
  // const convertArr = userInfo.items?.map((item)=>{
  //   return finalArr.push(Object.values(item))
  // })
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(fetchMovieInfo(page, pageSize));
  }, [page, pageSize]);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="rose">
            <h4 className={classes.cardTitleWhite}>MOVIE LIST</h4>
            <p className={classes.cardCategoryWhite}>
              List of movies currently in the system
            </p>
          </CardHeader>
          <CardBody>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <ThemeProvider theme={theme}>
                <Button fullWidth variant="outlined" color="primary">
                  Create
                </Button>
              </ThemeProvider>
            </Grid>
            <MovieTable
              tableHeaderColor="rose"
              tableHead={[
                "ID",
                "Name",
                "Poster",
                "Grade",
                "Release Date",
                "Actions",
              ]}
              tableData={movieInfor}
            />
            <div className={classes.root}>
              <Box display="flex" justifyContent="center" mt={3}>
                <Pagination
                  count={movieInfor.totalPages}
                  page={page}
                  onChange={handleChangePage}
                  shape="rounded"
                />
              </Box>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
