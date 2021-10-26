import React, { useState, useEffect } from "react";
import NavCard from "../components/NavCard";
import '../styles/NavOptions.css'

const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  accessories,
  audio,
}) => {
  const [miPhoneToggle, setmiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setredmiPhoneToggle] = useState(false);
  const [tvToggle, settvToggle] = useState(false);
  const [laptopToggle, setlaptopToggle] = useState(false);
  const [fitnessAndLifeStyleToggle, setfitnessAndLifeStyleToggle] =
    useState(false);
  const [homeToggle, sethomeToggle] = useState(false);
  const [accessoriesToggle, setaccessoriesToggle] = useState(false);
  const [audioToggle, setaudioToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/miphones") {
      return setmiPhoneToggle(true);
    }
    if (window.location.pathname === "/redmiphones") {
      return setredmiPhoneToggle(true);
    }
    if (window.location.pathname === "/tv") {
      return settvToggle(true);
    }
    if (window.location.pathname === "/laptops") {
      return setlaptopToggle(true);
    }
    if (window.location.pathname === "/lifestyle") {
      return setfitnessAndLifeStyleToggle(true);
    }
    if (window.location.pathname === "/home") {
      return sethomeToggle(true);
    }
    if (window.location.pathname === "/audio") {
      return setaudioToggle(true);
    }
    if (window.location.pathname === "/accessories") {
      return setaccessoriesToggle(true);
    }
  }, []);

  return (
    <div className="navOptions">
      {miPhoneToggle
        ? miPhones.map(function (item, index) {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                key={item.image}
                image={item.image}
                index={index}
              />
            );
          })
        : null}

      {redmiPhoneToggle
        ? redmiPhones.map(function (item, index) {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                key={item.image}
                image={item.image}
                index={index}
              />
            );
          })
        : null}

      {tvToggle
        ? tv.map(function (item, index) {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                key={item.image}
                image={item.image}
                index={index}
              />
            );
          })
        : null}

      {laptopToggle
        ? laptop.map(function (item, index) {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                key={item.image}
                image={item.image}
                index={index}
              />
            );
          })
        : null}

      {fitnessAndLifeStyleToggle
        ? fitnessAndLifeStyle.map(function (item, index) {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                key={item.image}
                image={item.image}
                index={index}
              />
            );
          })
        : null}

      {homeToggle
        ? home.map(function (item, index) {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                key={item.image}
                image={item.image}
                index={index}
              />
            );
          })
        : null}

      {accessoriesToggle
        ? accessories.map(function (item, index) {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                key={item.image}
                image={item.image}
                index={index}
              />
            );
          })
        : null}

      {audioToggle
        ? audio.map(function (item, index) {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                key={item.image}
                image={item.image}
                index={index}
              />
            );
          })
        : null}
    </div>
  );
};

export default NavOptions;
