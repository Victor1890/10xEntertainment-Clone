import styled from "styled-components";

const MainHeader = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/banner.jpg");
`;

const HeadTitle = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: 3em;
`;

const HeadDescription = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 1.1em;
  color: #fff;
  margin: 10px;
`;

const HeadSpan = styled.span`
  padding: 5px 0 5px 0;
`;

const Header = () => (
  <MainHeader>
    <HeadTitle>10x Entertainment Clone</HeadTitle>
    <HeadDescription>
      <HeadSpan>10x는 디지털, 10대, 10배의 혁신을 의미합니다.</HeadSpan>
      <HeadSpan>
        이를 바탕으로 저희는 아티스트와 팬덤 사이의 커뮤니케이션 혁신을
        만들어가고자 합니다.
      </HeadSpan>
      <HeadSpan>
        10x stands for digital[10], teenage, and innovation of 10x.
      </HeadSpan>
      <HeadSpan>
        Based on this, we innovate the communication between artist and fandom.
      </HeadSpan>
    </HeadDescription>
  </MainHeader>
);

export default Header;
