import React, { useEffect, useState, useRef } from "react";
// @material-ui/core components
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import UserTable from "components/Table/UserTable.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Box, Button, Grid, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "redux/Actions/UserActions";
import { green } from "@material-ui/core/colors";
import Pagination from "@material-ui/lab/Pagination";
import PopupUser from "components/Popup/CUUser";
import { CREATE_USER } from "redux/Constants/UserConstants";
import createAction from "redux/Actions";
import { SET_CREATED } from "redux/Constants/UserConstants";
import DetailUser from "components/Popup/DetailUser";
import CustomInput from "components/CustomInput/CustomInput.js";
import Search from "@material-ui/icons/Search";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import Buttonn from "components/CustomButtons/Button.js";

const useStyless = makeStyles(styles);

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
  const [keyword, setKeyword] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const isEdited = useSelector((state) => state.userReducers.isEdited);
  const isDeleted = useSelector((state) => state.userReducers.isDeleted);
  const isCreated = useSelector((state) => state.userReducers.isCreated);
  const dispatch = useDispatch();
  const classess = useStyless();
  const classes = useStyles();
  const userInfo = useSelector((state) => state.userReducers.userInfo);
  const refContainer = useRef(React.createRef());

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setKeyword(refContainer.current.value)
   
  };
  console.log(keyword);
  const handleCreateUser = () => {
    dispatch(
      createAction(CREATE_USER, {
        selectedUser: {},
        isPopUp: true,
        typePopUp: "Tạo Người Dùng",
      })
    );
    dispatch(createAction(SET_CREATED, false));
  };

  useEffect(() => {
    dispatch(fetchUserInfo(page, pageSize));
  }, [page, pageSize, isEdited, isDeleted, isCreated, dispatch]);
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>USER LIST</h4>
            <p className={classes.cardCategoryWhite}>
              List of users currently in the system
            </p>
          </CardHeader>
          <CardBody>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={6}>
                <ThemeProvider theme={theme}>
                  <Button
                    onClick={handleCreateUser}
                    fullWidth
                    variant="outlined"
                    color="primary"
                  >
                    Create
                  </Button>
                </ThemeProvider>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                xs={6}
              >
                <div className={classess.searchWrapper}>
                  {/* <input ref={refContainer}></input> */}
                  <CustomInput
                    formControlProps={{
                      className: classess.margin + " " + classess.search,
                    }}
                    inputProps={{
                      placeholder: "Tìm Kiếm",
                      inputProps: {
                        "aria-label": "Search",
                      },
                      name:"keyWord",
                      inputRef: refContainer
                    }}
                  />
                  <Buttonn onClick={handleSearch} color="white" aria-label="edit" justIcon round>
                    <Search />
                  </Buttonn>
                </div>
              </Grid>
            </Grid>

            <UserTable
              tableHeaderColor="info"
              tableHead={[
                "Account",
                "Password",
                "Name",
                "Gmail",
                "Phone",
                "Actions",
              ]}
              tableData={userInfo}
            />
            <PopupUser />
            <div className={classes.root}>
              <Box display="flex" justifyContent="center" mt={3}>
                <Pagination
                  count={userInfo.totalPages}
                  page={page}
                  onChange={handleChangePage}
                  shape="rounded"
                />
                <DetailUser />
              </Box>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
