import styled from "styled-components";
import media from "styled-media-query";
import images from "../images/Images";

const Works = ({ secTitle }) => {
  return (
    <PagesWrap>
      <TitleWrap>{secTitle}</TitleWrap>
      <WorksContainer>
        <WorksCat>ウェブサイト</WorksCat>
        <Box>
          <ImgLink href="https://yuckian.com/my_works/cafe">
            <Img src={images.websites.cafe} />
          </ImgLink>
          <Details>
            <WorksTitle>カフェ</WorksTitle>
            <Text>
              プログラミングを始めてから2か月ほど後に作成したものです。
              メインビジュアルの背景を固定しておしゃれなイメージを意識しました。
            </Text>
          </Details>
        </Box>
        <Box>
          <ImgLink href="https://yuckian.com/my_works/Dental Clinic">
            <Img src={images.websites.dental} />
          </ImgLink>
          <Details>
            <WorksTitle>歯医者</WorksTitle>
            <Text>
              お知らせに、学んだアコーディオンを実装しました。
              <br />
              テーブルを用いて、受付時間が一目でわかるようにしました。
            </Text>
          </Details>
        </Box>
        <Box>
          <ImgLink href="https://yuckian.com/my_works/建設会社">
            <Img src={images.websites.construct} />
          </ImgLink>
          <Details>
            <WorksTitle>建設会社</WorksTitle>
            <Text>
              サイトの周りに緑を取り入れて、自然をイメージして、柔らかな印象を与えられるようにしました。
              疑似要素を使って今風のデザインを意識しました。
            </Text>
          </Details>
        </Box>
        <Box>
          <ImgLink href="https://yuckian.com/my_works/コーポレートサイト">
            <Img src={images.websites.company} />
          </ImgLink>
          <Details>
            <WorksTitle>コーポレートサイト</WorksTitle>
            <Text>
              メインビジュアルにはフリー素材の動画を流しています。
              <br />
              配色は青と白を使い、信頼感と信頼感を与えるようなつくりにしました。
              <br />
              また、全体的にスケールを大きくし、雄大で寛容な印象になるように心がけています。
            </Text>
          </Details>
        </Box>
        <Box>
          <ImgLink href="https://yuckian.com/my_works/専門学校">
            <Img src={images.websites.school} />
          </ImgLink>
          <Details>
            <WorksTitle>専門学校</WorksTitle>
            <Text>
              簡単ながらもホバーアニメーションを少し多めに作りました。
              メニュー周りはアコーディオンで作成して、リンクをまとめてスッキリさせています。
            </Text>
          </Details>
        </Box>
        <Box>
          <ImgLink href="https://yuckian.com/my_works/旅館">
            <Img src={images.websites.ryokan} />
          </ImgLink>
          <Details>
            <WorksTitle>旅館</WorksTitle>
            <Text>
              上品な仕上がりをイメージしました。
              <br />
              メインビジュアルにはVegas2を使用して、スライドショーで豪華にしています。
            </Text>
          </Details>
        </Box>
        <Box>
          <ImgLink href="https://yuckian.com/my_works/美容院">
            <Img src={images.websites.hairSalon} />
          </ImgLink>
          <Details>
            <WorksTitle>美容院</WorksTitle>
            <Text>
              スタイリッシュさを意識して作りました。
              <br />
              ローディング画面、SNSアイコンにSVGを使って、アニメーションを取り入れました。
              <br />
              スクロールアニメーションには、Intersection Observer
              APIを使用しています。
            </Text>
          </Details>
        </Box>
        <WorksCat>バナー</WorksCat>
        <Box>
          <ImgLink>
            <Img src={images.banner.sample} />
          </ImgLink>
          <Details>
            <WorksTitle>作品のタイトル</WorksTitle>
            <Text>
              Photoshopを始めて最初の作品です。
              <br />
              ゼロから始めるPhotoshopを参考に作成しました。
            </Text>
          </Details>
        </Box>
        <Box>
          <ImgLink>
            <Img src={images.banner.airline} />
          </ImgLink>
          <Details>
            <WorksTitle>作品のタイトル</WorksTitle>
            <Text>
              ビーチの写真を加工して、もとより鮮やかに仕上げました。
              <br />
              文字の背景色の縁周りのデザインに苦戦しました。
            </Text>
          </Details>
        </Box>
        <Box>
          <ImgLink>
            <Img src={images.banner.bbq} />
          </ImgLink>
          <Details>
            <WorksTitle>作品のタイトル</WorksTitle>
            <Text>
              こちらもバナー作成のサイトを参考に作成しました。
              文字回りは暗い赤と金で豪華で贅沢なイメージに仕上がっていると思います。
            </Text>
          </Details>
        </Box>
        <Box>
          <ImgLink>
            <Img src={images.banner.farm} />
          </ImgLink>
          <Details>
            <WorksTitle>作品のタイトル</WorksTitle>
            <Text>
              初めての写真のトリミングをしました。
              文字の縁は土色にして、見やすさを高め、より自然をイメージさせるようになっていると思います。
            </Text>
          </Details>
        </Box>
        <Box>
          <ImgLink>
            <Img src={images.banner.realEstate} />
          </ImgLink>
          <Details>
            <WorksTitle>作品のタイトル</WorksTitle>
            <Text>
              こちらは色々なバナーを参考にして作成しました。
              <br />
              強調したい文字は大きくして、色を変えています。
              <br />
              背景はコントラストを少し上げて、エレガントな雰囲気を与えるよう工夫してみました。
            </Text>
          </Details>
        </Box>
        {/* <WorksCat>アプリ</WorksCat>
        <Box>
          <ImgLink href="/contact">
            <Img src={test} />
          </ImgLink>
          <Details>
            <WorksTitle>TODOリスト</WorksTitle>
            <Text>reactとTypeScriptを使って作成しました。</Text>
          </Details>
        </Box> */}
      </WorksContainer>
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

const WorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 7% 15% 7%;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 50px 0 50px 0;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border: none;
  }
`;

const WorksCat = styled.h5`
  font-size: 2rem;
  margin: 40px 0 0 0;
  position: relative;
  ${media.lessThan("medium")`
  margin: 80px 0 0 0;
  `};
`;

const ImgLink = styled.a`
  display: block;
  width: 45%;
  ${media.lessThan("medium")`
  width: 100%;
  `};
`;

const Img = styled.img`
  object-fit: cover;
`;

const Details = styled.div`
  width: 45%;
  ${media.lessThan("medium")`
  width: 100%;
  margin-top: 50px;
  `};
`;

const WorksTitle = styled.h5`
  margin-bottom: 50px;
  font-size: 1.5rem;
  letter-spacing: 2px;
`;

const Text = styled.p`
  line-height: 2rem;
`;

export default Works;
