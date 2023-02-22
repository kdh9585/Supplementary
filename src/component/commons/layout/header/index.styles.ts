import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background: #ffffff;
`;

export const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  padding: 26px 0;
  display: flex;
  justify-content: space-between;
`;

export const ImgDiv = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  cursor: pointer;
`;

export const UserInfoWrapper = styled.div<{ infoUser: boolean }>`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 4%;

  & > div {
    margin-right: ${(props) => (props.infoUser ? "0" : "10%")};
  }

  & > div:nth-child(3) {
    margin-right: 5px;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  width: 30%;
`;

export const BasketWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f65656;
`;

export const NavWrapper = styled.div`
  background: #222222;
`;

export const NavInnerWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 39px 10% 39px 10%;
  display: flex;
  justify-content: space-around;
  color: #ffffff;
`;

export const StaticWrapper = styled.div``;

export const NavName = styled.div``;

export const CreatePoint = styled.button`
  font-weight: 400;
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
`;
export const Logout = styled.button`
  font-weight: 400;
  font-size: 14px;
  background: none;
  border: none;
  margin-right: 5%;
  cursor: pointer;
`;

export const Content2 = styled.div`
  font-family: "Noto Sans KR";
  font-weight: 400;
  font-size: 0.9em;
  letter-spacing: -0.05em;
  display: flex;
  align-items: center;
`;

export const Point = styled.span`
  text-decoration: underline;
`;

export const PointText = styled.span``;
