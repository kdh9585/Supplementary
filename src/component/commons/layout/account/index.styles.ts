import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background: #222222;
`;

export const NavWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 28px 42px 28px 65px;
  display: flex;
  color: #ffffff;
`;

export const ImgDiv = styled.div`
  width: 10%;
  cursor: pointer;
  display: flex;
`;

export const StaticWrapper = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const UserInfoWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-right: 2.5%;

  & > div:first-child {
    margin-right: 25%;
    cursor: pointer;
  }

  & > div:nth-child(2) {
    margin-right: 5px;
  }
`;

export const BasketWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #f65656;
  background: #ffffff;
`;

export const NavName = styled.div``;
