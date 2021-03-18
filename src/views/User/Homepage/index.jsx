import Banner from "components/Banner";
import Cinema from "components/Cinema";
import News from "components/News";
import TixApp from "components/TixApp";
import Partner from "components/Partner";
import React, { useEffect } from "react";
import { fetchMovie } from "redux/Actions/MovieActions";
import { useDispatch, useSelector } from "react-redux";
import SlickMovie from "components/SlickMovie";

export default function Homepage() {
  const dispatch = useDispatch();
  const movieInfor = useSelector((state) => state.movieReducers.movieInfor);

  useEffect(() => {
    dispatch(fetchMovie());
  }, [dispatch]);

  return (
    <>
      <Banner />
      <SlickMovie data={movieInfor}/>
      <Cinema />
      <News />
      <TixApp />
      <Partner />
    </>
  );
}
