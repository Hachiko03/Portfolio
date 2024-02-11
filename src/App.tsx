import React from "react";
import classes from "./App.module.scss";
import HamburgerMenu from "./components/HamburguerMenu/HamburguerMenu";
import Button from "./components/Button.jsx/Button";
import RRSSLogos from "./components/RRSSIcons/RRSSIcons";
// import BackgroundImage from "./components/BackgroundImage";

const sectionshb: {
  name: string;
  route: string;
}[] = [
  { name: "Logo", route: "none" },
  { name: "Mensajes", route: "none" },
  { name: "Proyectos", route: "none" },
  { name: "Sobre mí", route: "none" },
  { name: "CV", route: "none" },
  { name: "Contacto", route: "none" },
];

const App: React.FC = () => {
  return (
      <div className={classes.base}>
        <div className={classes.menu_base}>
          <HamburgerMenu sections={sectionshb} />
        </div>
        <div>
          <Button onClick={() => {}} text="Download CV" />
          <Button onClick={() => {}} text="Contact" />
        </div>
        <div>
          <RRSSLogos />
        </div>
      </div>
  );
};

export default App;
