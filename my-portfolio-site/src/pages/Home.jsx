import styled from "styled-components";
import media from "styled-media-query";
import cafe from "../images/websites/test2.jpg";
import gsap from "gsap";
import { useEffect } from "react";

const Home = () => {
  const init = () => {
    gsap
      .timeline()
      .to(".bg", {
        scaleY: 1,
        duration: 0.8,
        ease: "Power4.easeIn",
      })
      .to(".head", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "Power1.easeOut",
      })
      .to(
        ".out",
        {
          y: "-100%",
          duration: 0.3,
          ease: "Power1.easeOut",
        },
        "-=0.4"
      )
      .to(
        ".inner",
        {
          opacity: 1,
          ease: "Power1.easeOut",
        },
        "-=0.4"
      )
      .to(
        ".copy span",
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          stagger: {
            each: 0.1,
            from: "random",
          },
        },
        "-=0.4"
      );
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <Wrap>
        <Head className="head">
          <Gradient>
            <GraInner className="gradient inner"></GraInner>
            <GraOut className="gradient out"></GraOut>
          </Gradient>

          <Copy className="copy">
            <span>Y</span>
            <span>U</span>
            <span>K</span>
            <span>H</span>
            <span>I</span>
            <span>D</span>
            <span>E</span>
            <span>&nbsp;</span>
            <span>T</span>
            <span>A</span>
            <span>J</span>
            <span>I</span>
            <span>M</span>
            <span>A</span>
          </Copy>
        </Head>
      </Wrap>

      <Background className="bg"></Background>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  ${media.lessThan("medium")`
    height: 100vh;
  `};
`;

const Wrap = styled.div``;

const Head = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${cafe});
  background-size: cover;
  background-position: center;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
`;
const Gradient = styled.div`
  & .gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    will-change: transform;
  }
`;
const GraOut = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  opacity: 0.7;
`;
const GraInner = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 1%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0.1) 100%
  );
  transform: translateY(0px);
  opacity: 0;
`;

const Copy = styled.h1`
  position: absolute;
  z-index: 9;
  display: flex;
  right: 120px;
  top: 50%;
  transform: translateY(-50%);
  ${media.lessThan("medium")`
    right: 8%;
  `};
  span {
    color: #fff;
    font-size: 2.4rem;
    font-weight: 300;
    opacity: 0;
    ${media.lessThan("medium")`
    font-size: 2rem;
    `};
  }
`;

const Background = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #121212;
  z-index: -1;
  transform: scaleY(0);
  transform-origin: bottom;
  will-change: transform;
`;

export default Home;
