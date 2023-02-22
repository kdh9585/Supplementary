import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGEDIN } from "../query/useFetchUserLoggedIn";

const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
    }
  }
`;

export const useCreatePointTransactionOfBuyingAndSelling = () => {
  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const createPointTransactionOfBuyingAndSellingSubmit = async (
    useritemId: string
  ) => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId,
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGEDIN,
          },
        ],
      });
      if (result?.data === null || result?.data === undefined) return;
      alert(
        `${result?.data.createPointTransactionOfBuyingAndSelling.name}상품을 구매 하셨습니다`
      );
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    createPointTransactionOfBuyingAndSellingSubmit,
  };
};
