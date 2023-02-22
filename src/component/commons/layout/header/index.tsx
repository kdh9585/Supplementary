import { useRouter } from "next/router";
import { useState } from "react";
import CreditModal from "../../../unit/creadit/Creadit.container";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import { useLogoutUser } from "../../hooks/mutation/useLogoutUser";
import { Content1, Title } from "../../typeFace";
import * as S from "./index.styles";

interface IProps {
  infoUser: string;
}

export default function Header(props: IProps) {
  const router = useRouter();
  const { logoutUser } = useLogoutUser();

  const { onClickMoveToPage } = useMoveToPage();
  const staticBrand = [
    {
      name: "BRAND",
      url: "/products",
    },
    {
      name: "CATEGORY",
      url: "/products",
    },
    {
      name: "LIFE",
      url: "/products",
    },
    {
      name: "BEAUTY",
      url: "/products",
    },
  ];
  const dynamicProduct = [
    {
      name: "#STYLE",
      url: "/products",
    },
    {
      name: "EVENT",
      url: "/products",
    },
  ];

  const onClickMoveToStatic = (path: string) => () => {
    void router.push(path);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleCredit = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper>
        <S.InnerWrapper>
          <S.ImgDiv onClick={onClickMoveToPage("/")}>
            <img src="/header/dingco-logo.png" alt="Logo" />
          </S.ImgDiv>
          <S.UserInfoWrapper infoUser={props?.infoUser?.name}>
            {props?.infoUser?.name ? (
              <>
                <S.LoginBox>
                  <S.Content2 style={{ marginRight: "3%" }}>
                    {props?.infoUser?.name}님 포인트
                  </S.Content2>
                  <S.Content2 style={{ marginRight: "7%" }}>
                    <S.Point>{props.infoUser?.userPoint?.amount}</S.Point>{" "}
                    <S.PointText>P</S.PointText>
                  </S.Content2>
                  <S.CreatePoint onClick={handleCredit}>충전</S.CreatePoint>
                </S.LoginBox>
                <S.Logout onClick={logoutUser}>로그아웃</S.Logout>
                <S.Content2>장바구니</S.Content2>
                <S.BasketWrapper>0</S.BasketWrapper>
              </>
            ) : (
              <>
                <Content1 onClick={onClickMoveToPage("/login")}>
                  로그인
                </Content1>
                <Content1 onClick={onClickMoveToPage("/join")}>
                  회원가입
                </Content1>
                <Content1>장바구니</Content1>
                <S.BasketWrapper>0</S.BasketWrapper>
              </>
            )}
          </S.UserInfoWrapper>
        </S.InnerWrapper>
      </S.Wrapper>
      <S.NavWrapper>
        <S.NavInnerWrapper>
          {staticBrand.map((el, idx) => (
            <S.NavName key={idx} onClick={onClickMoveToStatic(el.url)}>
              <Title style={{ cursor: "pointer" }}>{el.name}</Title>
            </S.NavName>
          ))}
          <Title>|</Title>
          {dynamicProduct.map((el, idx) => (
            <S.NavName key={idx} onClick={onClickMoveToStatic(el.url)}>
              <Title style={{ cursor: "pointer" }}>{el.name}</Title>
            </S.NavName>
          ))}
        </S.NavInnerWrapper>
      </S.NavWrapper>
      <CreditModal
        isOpen={isOpen}
        infoUser={props?.infoUser}
        setIsOpen={setIsOpen}
        handleCradit={handleCredit}
      />
    </>
  );
}
