import Header from "../components/Header";
import Pages from "./Pages";
import { createGlobalStyle } from "styled-components";

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Pages />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body{
    background-color: #fff;
  }
  
  a{
    text-decoration: none;
  }

  img{
    width: 100%
  }
  `;

export default Layout;
