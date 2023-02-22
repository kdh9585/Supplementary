import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

interface IFormData {
  email: string;
  password: string;
}

export const useLoginUser = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const loginUserSubmit = async (data: IFormData) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다!");
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      alert("환영합니다.");
      void router.push("/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    loginUserSubmit,
  };
};
