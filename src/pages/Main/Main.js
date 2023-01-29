import React from "react";
import { Helmet } from "react-helmet";

import { About } from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Portfolio</title>
      </Helmet>
      {/* <Navbar />
      <Landing /> */}
      <About />
      {/* <Skills />
      <Achievements />
      <Projects />
      <Blog />
      <Education />
      <Contacts />
      <Footer /> */}
    </div>
  );
}

export default Main;
