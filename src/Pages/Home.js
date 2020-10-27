import React, { Fragment } from "react";
import Board from "../Components/Board";
import Footer from "../Components/Footer";
import Logo from "../Components/Logo";

const Home = () => {
  return (
    <Fragment>
      <Logo />
      <Board />
      <Footer />
    </Fragment>
  );
};

export default Home;
