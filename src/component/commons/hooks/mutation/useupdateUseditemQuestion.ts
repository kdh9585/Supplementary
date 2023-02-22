import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useFetchUseditemQuestions";

export const UPDATE_USER_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $useditemQuestionId: ID!
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
  ) {
    updateUseditemQuestion(
      useditemQuestionId: $useditemQuestionId
      updateUseditemQuestionInput: $updateUseditemQuestionInput
    ) {
      _id
    }
  }
`;

export const useUpdateUseditemQuestion = () => {
  const router = useRouter();
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USER_ITEM_QUESTION);

  const updateUseditemQuestionSubmit = async (data, useditemQuestionId) => {
    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId,
          updateUseditemQuestionInput: {
            ...data,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: String(router.query.productId),
              page: 1,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    updateUseditemQuestionSubmit,
  };
};
