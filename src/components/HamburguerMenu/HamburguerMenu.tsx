import React, { useState } from "react";
import classes from "./HamburguerMenu.module.scss";
import Button from "../Button.jsx/Button";

type Section = {
  name: string;
  route: string;
};

type HamburgerMenuProps = {
  sections: Section[];
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.navbar}>
      <div className={classes.menu}>
        <svg
          width="30.00"
          height="30.00"
          viewBox="0.00 0.00 250.00 250.00"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
        <button
          className="text-gray-500 focus:outline-none focus:text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm4.4 11.6c.4.4.4 1 0 1.4s-1 .4-1.4 0L10 11.4l-3.6 3.6c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L8.6 10 5 6.4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L10 8.6l3.6-3.6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11.4 10l3.6 3.6z" />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
            )}
          </svg>
        </button>
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-100 flex flex-col p-5">
            {sections.map((section, index) => (
              <nav>
                <a
                  key={index}
                  href={section.route}
                  className="text-gray-800 hover:text-gray-900 focus:outline-none focus:text-gray-900 mt-5"
                >
                  {section.name}
                </a>
              </nav>
            ))}
            <div>
              <Button onClick={() => {}} text="CV" />
              <Button onClick={() => {}} text="Contact" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
