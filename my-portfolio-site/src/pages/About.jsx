import styled from "styled-components";
import media from "styled-media-query";
import test from "../images/websites/旅館-screenshot.png";
import images from "../images/Images";

const About = ({ secTitle }) => {
  return (
    <PagesWrap>
      <TitleWrap>{secTitle}</TitleWrap>
      <AboutContainer>
        <Introduce>
          <TextBox>
            <Name>
              <h5>田島 行秀</h5>
              <span>Tajima Yukihide</span>
            </Name>
            <AboutMe>
              <dt>Age :</dt>
              <dd>23</dd>
              <dt>Fovorite :</dt>
              <dd>旅行、読書、ゲーム</dd>
              <dt>History :</dt>
              <dd>
                2017年多摩大学に入学 中退後、観光で来た沖縄に住み着く。
                <br />
                電気工事士として働きながら、プログラミングに興味を持ち学習。
                <br />
                現在はアルバイトをしつつ、プログラミングの勉強をしています。
              </dd>
            </AboutMe>
          </TextBox>
          <MyImage src={test} />
        </Introduce>

        <Skills>
          <TitleWrap>Skills</TitleWrap>
          <BoxWrap>
            <Box>
              <Titles>
                <h5>HTML5</h5>
                <SkillIcon src={images.logo.html} alt="" />
              </Titles>
              <Details>
                <p>基本的な事は一通りコーディングできます。</p>
              </Details>
            </Box>
            <Box>
              <Titles>
                <h5>CSS</h5>
                <SkillIcon src={images.logo.css} alt="" />
              </Titles>
              <Details>
                <p>keyframe等を使用したアニメーションにハマっています。</p>
              </Details>
            </Box>
            <Box>
              <Titles>
                <h5>SCSS</h5>
                <SkillIcon src={images.logo.scss} alt="" />
              </Titles>
              <Details>
                <p>
                  BEM記法を意識して書いています。
                  <br/>ファイルは分割して管理するようにしています。
                </p>
              </Details>
            </Box>
            <Box>
              <Titles>
                <h5>JavaScript</h5>
                <SkillIcon src={images.logo.javascript} alt="" />
              </Titles>
              <Details>
                <p>
                  現在学習中。知識は基礎レベル。
                  <br />
                  学習していて、楽しいです。
                </p>
              </Details>
            </Box>
            <Box>
              <Titles>
                <h5>JQuery</h5>
                <SkillIcon src={images.logo.jquery} alt="" />
              </Titles>
              <Details>
                <p>
                  主にプラグインを使ってアニメーションをつけるために使用します。
                </p>
              </Details>
            </Box>
            <Box>
              <Titles>
                <h5>React</h5>
                <SkillIcon src={images.logo.react} alt="" />
              </Titles>
              <Details>
                <p>
                  現在学習中。React Nativeを使ってアプリ制作にも挑戦中です。
                </p>
              </Details>
            </Box>
            <Box>
              <Titles>
                <h5>WordPress</h5>
                <SkillIcon src={images.logo.wordpress} alt="" />
              </Titles>
              <Details>
                <p>
                  オリジナルテーマを作成できます。
                  <br />
                  お問い合わせフォームやブログ機能など実装できます。
                </p>
              </Details>
            </Box>
            <Box>
              <Titles>
                <h5>Photoshop</h5>
                <SkillIcon src={images.logo.ps} alt="" />
              </Titles>
              <Details>
                <p>
                  簡単なバナー作成、画像加工できます。  
                </p>
              </Details>
            </Box>
            <Box>
              <Titles>
                <h5>Git</h5>
                <SkillIcon src={images.logo.git} alt="" />
              </Titles>
              <Details>
                <p>
                  分からないコマンドは調べつつ使用しています。
                  <br />
                  GitHubを使用してチーム開発をしてみたいです。
                </p>
              </Details>
            </Box>
          </BoxWrap>
        </Skills>
      </AboutContainer>
    </PagesWrap>
  );
};


const PagesWrap = styled.div`
  margin: 0 auto;
  padding: 10% 4% 0 4%;
  `;

const TitleWrap = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-top: 50px;
`;

const AboutContainer = styled.div`
  margin: 80px 0 0 0;
`;

const Introduce = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MyImage = styled.img`
  width: 40%;
  object-fit: cover;
  ${media.lessThan("medium")`
    width: 100%;
    margin:50px auto 30px auto;
  `};
`;

const TextBox = styled.div`
  width: 55%;
  ${media.lessThan("medium")`
  width: 100%;
  margin: 0 auto;
  `};
  `;

const Name = styled.p`
  text-align: center;
  & h5 {
    font-size: 1.3rem;
    padding-bottom: 0.3rem;
    letter-spacing: 0.5rem;
  }
  
  & span {
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
`;

const AboutMe = styled.dl`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
  border-top: 1px solid #ddd;

  & dt {
    width: 20%;
    padding: 0.7rem 0 0.7rem 0.7rem;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
  }

  & dd {
    width: 80%;
    padding: 0.7rem 0 0.7rem 0.7rem;
    border-bottom: 1px solid #ddd;
    ${media.lessThan("medium")`
    font-size:.8rem;
`};
  }
`;

const Skills = styled.div`
  margin: 100px 0 0 0;
  `;

const BoxWrap = styled.div`
  margin-top: 80px;
  padding: 0 7%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  `;

const Box = styled.div`
  width: 28%;
  margin-bottom: 120px;
  ${media.lessThan("medium")`
    width: 80%;
    margin: 0 auto 80px auto;
  `};
  `;

const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h5 {
    font-size: 1.5rem;
  }
`;

const SkillIcon = styled.img`
  width: 90px;
  height: 90px;
`;

const Details = styled.div`
  margin: 30px 0 0 0;
  
  & p {
    font-size: 15px;
  }
`;

  export default About;