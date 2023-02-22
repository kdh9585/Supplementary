import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_USED_ITEMS,
  useFetchUseditems,
} from "../query/useFetchUseditems";

const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useDeleteUseditem = () => {
  const router = useRouter();
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const onClickDeleteItem = (useditemId: string) => async (event) => {
    try {
      await deleteUseditem({
        variables: {
          useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
            variables: {
              page: 1,
            },
          },
        ],
      });
      Modal.success({
        content: "삭제됐습니다!",
        afterClose() {
          void router.push("/products");
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickDeleteItem,
  };
};
