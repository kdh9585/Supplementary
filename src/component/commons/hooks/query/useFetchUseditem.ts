import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
// import { useAuth } from "../customs/useAuth";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      seller {
        _id
        name
      }
    }
  }
`;

export const useFetchUseditem = () => {
  const router = useRouter();
  const { data, error, loading } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });

  useEffect(() => {
    if (loading) return;
    if (error?.message === "상품이 존재하지 않습니다.") {
      alert(error?.message);
    }
  }, [loading]);

  return {
    data,
    error,
    loading,
  };
};
