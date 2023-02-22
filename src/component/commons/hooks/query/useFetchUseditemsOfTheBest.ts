import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    _id
    name
    remarks
    price
    tags
    images
    seller {
      _id
      name
    }
  }
`;

export const useFetchUseditemsOfTheBest = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">
  >(FETCH_USED_ITEMS_OF_THE_BEST);
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
