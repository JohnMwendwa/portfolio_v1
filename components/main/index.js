import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Profile from "./Profile";
import Services from "./Services";
import Projects from "./Projects";

export default function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Profile />
      <Services />
      <Projects />
    </>
  );
}
