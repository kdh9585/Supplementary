import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../query/useFetchUseditemQuestionAnswers";

const DELETE_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

interface IRef {
  __ref: string;
}

export const useDeleteQuestionAnswer = () => {
  const router = useRouter();

  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_QUESTION_ANSWER);

  const deleteQuestionAnswer =
    (useditemQuestionAnswerId, useditemQuestionId) => async (event) => {
      try {
        await deleteUseditemQuestionAnswer({
          variables: {
            useditemQuestionAnswerId,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTION_ANSWERS,
              variables: {
                page: Number(1),
                useditemQuestionId,
              },
            },
          ],
        });
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };
  return {
    deleteQuestionAnswer,
  };
};
