import { PriceReg } from "../../../commons/library/util";
import { Title } from "../../commons/typeFace";
import * as S from "./Brand.styles";
import InfiniteScroll from "react-infinite-scroller";
import { useFetchUseditems } from "../../commons/hooks/query/useFetchUseditems";
import styled from "@emotion/styled";
import { ProductImg } from "../product/list/ProductList.styles";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { useRouter } from "next/router";
import { useFetchUseditemsOfTheBest } from "../../commons/hooks/query/useFetchUseditemsOfTheBest";
import { useEffect, useState } from "react";

const Infinitescroller = styled(InfiniteScroll)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 98px;
  justify-content: center;
  & > div:nth-child(4n + 0) {
    margin-right: 0;
  }
`;

export default function Brand() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const { data, fetchMore } = useFetchUseditems();
  const { data: BestItems } = useFetchUseditemsOfTheBest();
  console.log(BestItems);

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: {
        page: Number(Math.ceil(data?.fetchUseditems.length / 10) + 1),
      },
      updateQuery(prev, { fetchMoreResult }) {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveToDetail = (event) => {
    console.log(event.currentTarget.id);
    void router.push(`/products/${event.currentTarget.id}`);
  };

  const [likeLists, setLikeLists] = useState([]);

  useEffect(() => {
    const likeItems = JSON.parse(localStorage.getItem("likeLists") ?? "[]");
    setLikeLists(likeItems);
  }, []);

  return (
    <S.Wrapper>
      <S.BestItemWrapper>
        <S.BestItemInnerWrapper>
          <Title
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            BEST
          </Title>
          <S.BestContentWapper style={{ paddingTop: "86px" }}>
            {data?.fetchUseditems.slice(0, 4).map((el, idx) => (
              <S.ProductBestWrapper
                key={el._id}
                id={el._id}
                onClick={onClickMoveToDetail}
              >
                <S.ProductImg>
                  <ProductImg
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
                </S.ProductImg>
                <S.ProductInfoWrapper>
                  <S.ProductTagBox>
                    <span>7%</span>
                    <span>{PriceReg(String(el.price))}</span>
                  </S.ProductTagBox>
                  <S.Seller>{el.name}</S.Seller>
                  <S.ProductInfo>{el.remarks}</S.ProductInfo>
                </S.ProductInfoWrapper>
              </S.ProductBestWrapper>
            ))}
          </S.BestContentWapper>
        </S.BestItemInnerWrapper>
      </S.BestItemWrapper>
      <S.WriteWrapper>
        <S.WriteBtn onClick={onClickMoveToPage("/products/new")}>
          상품 등록
        </S.WriteBtn>
        <S.SearchBox>
          <S.SearchInput type="text" />
          <S.SearchIcon></S.SearchIcon>
        </S.SearchBox>
      </S.WriteWrapper>
      <S.ContentWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          loader={<div className="loader" key={0}></div>}
        >
          <S.ContentInnerWapper>
            {data?.fetchUseditems.map((el, idx) => (
              <S.ProductWrapper
                key={el._id}
                id={el._id}
                onClick={onClickMoveToDetail}
              >
                <S.ProductImg>
                  <ProductImg
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
                </S.ProductImg>
                <S.ProductInfoWrapper>
                  <S.ProductTagBox>
                    <span>7%</span>
                    <span>{PriceReg(String(el.price))}</span>
                  </S.ProductTagBox>
                  <S.Seller>{el.name}</S.Seller>
                  <S.ProductInfo>{el.remarks}</S.ProductInfo>
                </S.ProductInfoWrapper>
              </S.ProductWrapper>
            ))}
          </S.ContentInnerWapper>
        </InfiniteScroll>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
