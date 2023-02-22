import * as S from "./ProductDetail.styles";
import { PriceReg } from "../../../../commons/library/util";
import { useEffect, useState } from "react";
import { useFetchUseditem } from "../../../commons/hooks/query/useFetchUseditem";
import { useRouter } from "next/router";
import { useToggleUseditemPick } from "../../../commons/hooks/mutation/useToggleUseditemPick";
import { v4 as uuidv4 } from "uuid";
import { useCreatePointTransactionOfBuyingAndSelling } from "../../../commons/hooks/mutation/useCreatePointTransactionOfBuyingAndSelling";
import { useDeleteUseditem } from "../../../commons/hooks/mutation/useDeleteUseditem";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import ProductComment from "../comment/list/CommentList.index";

export default function ProductDetail() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickTogglePick } = useToggleUseditemPick();
  const { data } = useFetchUseditem();
  const { onClickDeleteItem } = useDeleteUseditem();
  const { createPointTransactionOfBuyingAndSellingSubmit } =
    useCreatePointTransactionOfBuyingAndSelling();
  console.log(data);

  const [likeLists, setLikeLists] = useState([]);
  useEffect(() => {
    const likeItems = JSON.parse(localStorage.getItem("likeLists") ?? "[]");
    setLikeLists(likeItems);
  }, [data?.fetchUseditem?.pickedCount]);

  const onClickBuy = (useditemId: any) => () => {
    void createPointTransactionOfBuyingAndSellingSubmit(useditemId);
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.ItemWrapper>
          <S.ItemImg>
            <img
              src={
                data?.fetchUseditem.images[0]
                  ? `https://storage.googleapis.com/${data?.fetchUseditem?.images[0]}`
                  : "Detail/noImage.jpeg"
              }
              alt="이미지"
              style={{ width: "863px", height: "611px" }}
            />
          </S.ItemImg>
          <S.ItemInfoWrapper>
            <S.ItemCateWrapper>
              <S.ItemCate>{data?.fetchUseditem?.seller?.name}</S.ItemCate>
              <S.IconBox>
                <S.EditIcon
                  onClick={onClickMoveToPage(
                    `/products/${data?.fetchUseditem?._id}/edit`
                  )}
                />
                <S.CloseIcon
                  onClick={onClickDeleteItem(data?.fetchUseditem._id)}
                />
              </S.IconBox>
            </S.ItemCateWrapper>
            <S.ItemName>{data?.fetchUseditem?.name}</S.ItemName>
            <S.PriceWrapper>
              <S.PriceBox>
                <span>판매가</span>
                <span>{PriceReg(String(data?.fetchUseditem?.price))}</span>
                <span>원</span>
              </S.PriceBox>
              <S.DibsWrapper>
                <span>MY</span>
                {likeLists.includes(data?.fetchUseditem?._id) ? (
                  <S.FillHeart
                    onClick={onClickTogglePick(data?.fetchUseditem?._id)}
                  />
                ) : (
                  <S.EmptyHeart
                    onClick={onClickTogglePick(data?.fetchUseditem?._id)}
                  />
                )}

                <span>Product</span>
              </S.DibsWrapper>
            </S.PriceWrapper>
            <S.ItemExpl>{data?.fetchUseditem?.remarks}</S.ItemExpl>
            <S.TagBox>{data?.fetchUseditem?.tags[0] ?? ""}</S.TagBox>
            <S.BtnBox>
              <S.BuyBtn
                onClick={onClickBuy(data?.fetchUseditem?._id)}
                id={data?.fetchUseditem?._id}
              >
                BUY NOW
              </S.BuyBtn>
              <S.BagBtn>SHOPPING BAG</S.BagBtn>
            </S.BtnBox>
          </S.ItemInfoWrapper>
        </S.ItemWrapper>

        <S.DetailTitle>DETAIL</S.DetailTitle>
        <S.ContentInnerWrapper>
          <div>
            {data?.fetchUseditem?.images?.map(
              (el) =>
                el !== "" && (
                  <img
                    key={uuidv4()}
                    src={`https://storage.googleapis.com/${el}`}
                    style={{ display: "block", margin: "50px auto 0" }}
                  />
                )
            )}
          </div>
          <S.DetailMap>
            <S.DetailContent
              dangerouslySetInnerHTML={{
                __html: data?.fetchUseditem.contents ?? "",
              }}
            ></S.DetailContent>

            <S.MapTitle>배송/교환/반품/AS 관련 유의사항</S.MapTitle>
            <div>
              상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음
              안내사항보다 우선 적용됩니다.
            </div>
            <div>Map</div>
            <ul>
              <li>
                상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이
                달라집니다.
              </li>
              <li>
                상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은
                배송이 불가합니다.
              </li>
              <li
                style={{
                  fontWeight: "700",
                }}
              >
                상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품
                택배비 고객부담으로 왕복택배비가 발생합니다. (전자상거래
                등에서의 소비자보호에 관한 법률 제18조(청약 철회 등) 9항에 의거
                소비자의 사정에 의한 청약 철회 시 택배비는 소비자 부담입니다.)
              </li>
              <li>
                주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는
                점 양해 부탁드립니다.
              </li>
              <li>
                반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내에 접수하여
                주십시오.
              </li>
              <li>
                제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG 보증서, 상품
                부자재가 제거 혹은 분실된 경우, 밀봉포장을 개봉했거나 내부
                포장재를 훼손 또는 분실한 경우(단, 제품확인을 위한 개봉 제외)
                반품/교환이 불가합니다.
              </li>
              <li>
                A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련
                문의는 에이블리 고객센터를 통해 부탁드립니다.
              </li>
              <li>
                상품불량에 의한 반품,교환, A/S, 환불, 품질보증 및 피해보상 등에
                관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에 따라
                받으실 수 있습니다.
              </li>
            </ul>
          </S.DetailMap>
          <ProductComment useditemId={data?.fetchUseditem?._id} />
        </S.ContentInnerWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
