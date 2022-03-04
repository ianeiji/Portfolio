import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "styled-media-query";

const NotFound = () => {
  return (
    <Inner>
      <Wrap>
        <Title>お探しのページが見つかりません。</Title>
        <PageLink to="/">ホームに戻る</PageLink>
      </Wrap>
    </Inner>
  );
};

const Wrap = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
`;

const PageLink = styled(Link)`
  display: inline-block;
  padding: 15px 60px;
  border: 1px solid #555;
  text-decoration: none;
  color: #555;
  margin-top: 50px;
  transition: all 0.3s ease;
  &:hover {
    color: #000;
  }
`;

const Title = styled.h1`
  display: block;
  font-size: 3rem;

  ${media.lessThan("medium")`
    font-size: 1.5rem
  `};
`;

export default NotFound;
