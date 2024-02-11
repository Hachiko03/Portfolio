import React from "react";
import classes from "./App.module.scss";
import Button from "./components/Button.jsx/Button";
import RRSSLogos from "./components/RRSSIcons/RRSSIcons";
import Navbar from "./components/Navbar/Navbar";
// import BackgroundImage from "./components/BackgroundImage";


const App: React.FC = () => {
  return (
      <div className={classes.base}>
        <Navbar/>
        {/* <div>
          <Button onClick={() => {}} text="Download CV" />
          <Button onClick={() => {}} text="Contact" />
        </div>
        <div>
          <RRSSLogos />
        </div> */}
      </div>
  );
};

export default App;
