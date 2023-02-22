import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import { useAuth } from "../../../../src/component/commons/hooks/custom/useAuth";
import ProductWrite from "../../../../src/component/unit/product/write/ProductWrite.index";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      createdAt
      seller {
        _id
        name
      }
    }
  }
`;

export default function ProductEditPage() {
  const router = useRouter();
  useAuth();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });

  return (
    <ProductWrite
      isEdit={true}
      data={data}
      useditemId={String(router.query.productId)}
    />
  );
}
