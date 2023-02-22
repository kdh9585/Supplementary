import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../commons/types/generated/types";
import { FETCH_USER_LOGGEDIN } from "../../commons/hooks/query/useFetchUserLoggedIn";
import * as S from "./Creadit.styles";

declare const window: typeof globalThis & {
  IMP: any;
};

const CREATE_POINT_TRANSACTION_OF_LOADIng = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
    }
  }
`;

export default function CreditModal(props) {
  const [isSelectLists, setIsSelectLists] = useState<boolean>(false);
  const [selectPrice, setSelectPrice] = useState<number>(0);
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADIng);
  const router = useRouter();

  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const requestPay = (price) => {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        name: "충전 금액",
        amount: price,
        buyer_email: props?.infoUser?.email,
        buyer_name: props?.infoUser?.name,
        m_redirect_url: "http://localhost:3000/",
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [
              {
                query: FETCH_USER_LOGGEDIN,
              },
            ],
          });
          props.setIsOpen(false);
          if (rsp.success) router.push("/");
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  const onSelectlist = (price) => () => {
    setSelectPrice(price);
    setIsSelectLists((prev) => !prev);
  };
  const onSelectListShow = () => {
    setIsSelectLists((prev) => !prev);
  };
  const onSubmit = () => {
    requestPay(selectPrice);
  };
  return (
    <S.CraditModal
      centered={true}
      open={props.isOpen}
      onCancel={props.handleCradit}
      footer={
        <S.CreaditBtn
          color="black"
          onClick={onSubmit}
          disabled={selectPrice === 0}
        >
          충전하기
        </S.CreaditBtn>
      }
    >
      <S.CreaditWrap>
        <S.CreaditTitle>충전하실 금액을 선택해주세요!</S.CreaditTitle>
        <S.CreaditSelectWrap isSelectLists={isSelectLists}>
          <div>
            <button onClick={onSelectListShow}>
              {selectPrice !== 0 ? selectPrice : "포인트 선택"}
            </button>
          </div>
          <ul>
            <li>
              <button onClick={onSelectlist(100)}>100</button>
            </li>
            <li>
              <button onClick={onSelectlist(500)}>500</button>
            </li>
            <li>
              <button onClick={onSelectlist(2000)}>2,000</button>
            </li>
            <li>
              <button onClick={onSelectlist(5000)}>5,000</button>
            </li>
          </ul>
        </S.CreaditSelectWrap>
      </S.CreaditWrap>
    </S.CraditModal>
  );
}
