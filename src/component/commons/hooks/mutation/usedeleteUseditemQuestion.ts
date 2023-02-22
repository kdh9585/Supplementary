import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useFetchUseditemQuestions";

const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export const useDeleteUseditemQuestion = () => {
  const router = useRouter();

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const onClickdeleteUseditemQuestion =
    (useditemQuestionId: string) => async (event) => {
      try {
        await deleteUseditemQuestion({
          variables: {
            useditemQuestionId,
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
    onClickdeleteUseditemQuestion,
  };
};
