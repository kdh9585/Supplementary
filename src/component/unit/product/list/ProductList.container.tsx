import Slick from "../../../commons/slick";
import { Title } from "../../../commons/typeFace";
import { PriceReg } from "../../../../commons/library/util";
import * as S from "./ProductList.styles";
import { HeartOutlined } from "@ant-design/icons";
import { useFetchUseditems } from "../../../commons/hooks/query/useFetchUseditems";
import { useRouter } from "next/router";
import { useToggleUseditemPick } from "../../../commons/hooks/mutation/useToggleUseditemPick";
import { useEffect, useState } from "react";

export default function ProductList() {
  const router = useRouter();
  const { data } = useFetchUseditems();

  console.log(data);

  const [likeLists, setLikeLists] = useState([]);

  useEffect(() => {
    const likeItems = JSON.parse(localStorage.getItem("likeLists") ?? "[]");
    setLikeLists(likeItems);
  }, []);

  const onClickMoveToDetail = (event: any) => {
    console.log(event.currentTarget.id);
    void router.push(`/products/${event.currentTarget.id}`);
  };

  return (
    <div style={{ maxWidth: "1920px", margin: "0 auto" }}>
      <Slick />
      <S.Wrapper>
        <Title>New Arrival</Title>
        <S.ContentWapper>
          {data?.fetchUseditems.slice(0, 8).map((el, idx) => (
            <S.ProductWrapper
              key={el._id}
              id={el._id}
              onClick={onClickMoveToDetail}
            >
              <S.ProductImgDiv>
                <S.ProductImg
                  src={
                    el.images[0]
                      ? `https://storage.googleapis.com/${el.images[0]}`
                      : "Detail/noImage.jpeg"
                  }
                />
                {likeLists.includes(el._id) ? (
                  <S.FilledHeart />
                ) : (
                  <S.EmptyHeart />
                )}
              </S.ProductImgDiv>
              <S.ProductInfoWrapper>
                <S.ProductTagBox>
                  <span>
                    {el?.tags[0] !== undefined
                      ? "#" +
                        el?.tags[0]
                          .split("#")
                          .filter((text: string) => text !== "")[0]
                      : ""}
                  </span>
                  <span>{PriceReg(String(el.price))}</span>
                </S.ProductTagBox>
                <S.Seller>{el.name}</S.Seller>
                <S.ProductInfo>{el.remarks}</S.ProductInfo>
              </S.ProductInfoWrapper>
            </S.ProductWrapper>
          ))}
        </S.ContentWapper>
      </S.Wrapper>
    </div>
  );
}
