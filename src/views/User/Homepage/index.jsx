import Banner from "components/Banner";
import Carousel from "components/Carousel";
import Cinema from "components/Cinema";
import News from "components/News";
import TixApp from "components/TixApp";
import Partner from "components/Partner";

import React from "react";

export default function Homepage() {
  return (
    <>
      <Banner />
      <Carousel />
      <Cinema />
      <News />
      <TixApp />
      <Partner />
    </>
  );
}
