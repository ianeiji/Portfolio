import { init, send } from "emailjs-com";
import { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Contact = ({ secTitle }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [mail, setMail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = () => {
    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    if (
      userID != undefined &&
      serviceID != undefined &&
      templateID != undefined
    ) {
      init(userID);

      const template_param = {
        from_name: name,
        company: company,
        from_email: mail,
        title: title,
        message: message,
      };

      send(serviceID, templateID, template_param).then(() => {
        alert("お問い合わせを送信致しました。");

        setName("");
        setCompany("");
        setMail("");
        setMessage("");
        setTitle("");
      });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("push submit");
    sendMail();
  };

  const disableSend =
    name === "" || mail === "" || title === "" || message === "";

  return (
    <PagesWrap>
      <TitleWrap>{secTitle}</TitleWrap>
      <form>
        <FormWrap>
          <FormItem>
            <Label>
              <Required>必須</Required>氏名
            </Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="例）山田太郎"
            />
          </FormItem>
          <FormItem>
            <Label>
              <Required className="any">任意</Required>会社名
            </Label>
            <Input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="例）株式会社令和"
            />
          </FormItem>
          <FormItem>
            <Label>
              <Required>必須</Required>メールアドレス
            </Label>
            <Input
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="例）example@gmail.com"
            />
          </FormItem>
          <FormItem>
            <Label>
              <Required>必須</Required>件名
            </Label>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="例）タイトル"
            />
          </FormItem>
          <FormItem>
            <LabelMsg>
              <Required>必須</Required>お問い合わせ内容
            </LabelMsg>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></Textarea>
          </FormItem>
          <Button
            type="submit"
            onClick={handleClick}
            disabled={disableSend}
            value="送信する"
          />
        </FormWrap>
      </form>
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

const FormWrap = styled.div`
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  max-width: 720px;
  ${media.lessThan("medium")`
      margin-top: 40px;
      `};
`;

const FormItem = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  ${media.lessThan("medium")`
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    flex-wrap: wrap;
    `};
  &:nth-child(5) {
    border-bottom: 1px solid #ddd;
  }
`;

const Label = styled.div`
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
  ${media.lessThan("medium")`
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 15px;
  `};
`;

const LabelMsg = styled.div`
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: auto;
  ${media.lessThan("medium")`
      margin-top: 0;
      `};
`;

const Required = styled.span`
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: #5bc8ac;
  color: #fff;
  font-size: 14px;
  &.any {
    background: #6e6e6e;
  }
  ${media.lessThan("medium")`
  border-radius: 4px;
  padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  `};
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 48px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
  ${media.lessThan("medium")`
    margin-left: 0;
    margin-top: 18px;
    height: 40px;
    flex: inherit;
    font-size: 15px;
    `};
`;

const Textarea = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 216px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
  ${media.lessThan("medium")`
  margin-top: 18px;
  margin-left: 0;
    height: 200px;
    flex: inherit;
    font-size: 15px;
  `};
`;

const Button = styled.input`
  border-radius: 6px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 280px;
  display: block;
  letter-spacing: 0.05em;
  background: #5bc8ac;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  ${media.lessThan("medium")`
  margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 160px;
    font-size: 16px;
  `};
`;

export default Contact;
