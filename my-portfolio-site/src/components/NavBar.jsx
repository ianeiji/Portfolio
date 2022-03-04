import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BurgerBox onClick={() => handleClick()}>
        <Burger>
          <span></span>
          <span></span>
          <span></span>
        </Burger>
      </BurgerBox>
      <Nav isOpen={isOpen}>
        <Menu isOpen={isOpen}>
          <NavLink
            to="/"
            onClick={() => closeMenu()}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#fff",
                    padding: "1rem 2rem",
                  }
                : {
                    color: "#545e6f",
                    padding: "1rem 2rem",
                  }
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => closeMenu()}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#fff",
                    padding: "1rem 2rem",
                  }
                : {
                    color: "#545e6f",
                    padding: "1rem 2rem",
                  }
            }
          >
            About
          </NavLink>

          <NavLink
            to="/works"
            onClick={() => closeMenu()}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#fff",
                    padding: "1rem 2rem",
                  }
                : {
                    color: "#545e6f",
                    padding: "1rem 2rem",
                  }
            }
          >
            Works
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => closeMenu()}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#fff",
                    padding: "1rem 2rem",
                  }
                : {
                    color: "#545e6f",
                    padding: "1rem 2rem",
                  }
            }
          >
            Contact
          </NavLink>
        </Menu>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.9);
  transition: all 0.3s ease;
    ${media.lessThan("medium")`
    transform: translateY(${({ isOpen }) => (isOpen ? "0px" : "-1000px")});
    `};
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.8rem 5rem;
    ${media.lessThan("medium")`
    width: 100%;
    flex-direction: column;
    padding-top:5rem;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    `};
`;

const BurgerBox = styled.div`
  padding: 20px;
  position: fixed;
  cursor: pointer;
  z-index: 100;
  top: 5%;
  right: 30px;
`;

const Burger = styled.div`
  position: relative;
  width: 30px;
  height: 20px;
  display: none;
    ${media.lessThan("medium")`
    display:block;
    `};

  & span {
    position: absolute;
    background-color: rgb(185, 185, 185);
    width: 100%;
    height: 2px;
    border-radius: 4px;

    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 9px;
    }
    &:nth-child(3) {
      bottom: 0;
    }
  }
`;

export default NavBar;
