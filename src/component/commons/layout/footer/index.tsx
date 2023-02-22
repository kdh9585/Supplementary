import styled from "@emotion/styled";
import { Content1 } from "../../typeFace";

const Wrapper = styled.div`
  border-top: 1px solid #555555;
  font-family: "Noto Sans KR";
  background: #f1f1f1;
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
  padding: 53px 107px;
  font-weight: 400;
  font-size: 0.9em;
  letter-spacing: -0.05em;
  line-height: 28px;
  max-width: 1920px;
`;

const ImgDiv = styled.div`
  text-indent: -18px;
`;

const Img = styled.img`
  cursor: pointer;
`;

export default function Footer() {
  return (
    <Wrapper>
      <InnerWrapper>
        <ImgDiv>
          <Img src="/footer/Footer-dingco-logo.png" alt="Logo" />
        </ImgDiv>
        <div>
          <span style={{ paddingRight: "88px" }}>(주)딩코</span>
          <span>대표:안우엽</span>{" "}
        </div>
        <div>사업자등록번호 717-87-02373</div>
        <div>주소: 서울특별시 구로구 디지털로 300, 패스트파이브</div>
        <div>학원 등록 번호: 제 5845호</div>
        <div>
          <span style={{ paddingRight: "36px" }}>개인정보 처리방침</span>
          <span>서비스 이용 약관</span>
        </div>
        <div>Copyright © 2022. Dingco Corp., Ltd.</div>
      </InnerWrapper>
    </Wrapper>
  );
}
