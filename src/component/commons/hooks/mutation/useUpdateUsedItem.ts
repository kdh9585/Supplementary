import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM } from "../query/useFetchUseditem";

const CREATE_USED_ITEM = gql`
  mutation updateUseditem(
    $useditemId: ID!
    $updateUseditemInput: UpdateUseditemInput!
  ) {
    updateUseditem(
      useditemId: $useditemId
      updateUseditemInput: $updateUseditemInput
    ) {
      _id
      name
      remarks
      contents
      price
      tags
      images
    }
  }
`;

export const useUpdateUsedItem = () => {
  const router = useRouter();
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(CREATE_USED_ITEM);

  const updateSubmit = async (useditemId, data, resultUrls) => {
    try {
      const result = await updateUseditem({
        variables: {
          useditemId,
          updateUseditemInput: {
            ...data,
            images: resultUrls,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId,
            },
          },
        ],
      });
      // console.log(result.data);
      void router.push(`/products/${useditemId}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    updateSubmit,
  };
};
