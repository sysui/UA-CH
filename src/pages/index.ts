import Router from "next/router";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Router.replace("/api");
  }, []);
};

export default Home;
