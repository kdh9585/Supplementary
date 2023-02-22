import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useLoginUser } from "../../commons/hooks/mutation/useLoginUser";
import * as S from "./Login.styles";
import { IFormLoginData } from "./Login.types";
import { loginSchema } from "./Login.validation";

export default function Login() {
  const [accessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit, formState } = useForm<IFormLoginData>({
    resolver: yupResolver(loginSchema),
  });

  const { loginUserSubmit } = useLoginUser();

  const onSubmitForm = (data: IFormLoginData) => {
    void loginUserSubmit(data);
  };

  return (
    <S.Wrapper>
      <S.TitleWrapper>LOGIN</S.TitleWrapper>
      <S.LoginWrapper onSubmit={handleSubmit(onSubmitForm)}>
        <S.InputSort>
          <S.InputWrapper>
            <S.IdTitle>아이디</S.IdTitle>
            <S.IdInput
              type="text"
              placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
              {...register("email")}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.IdTitle>비밀번호</S.IdTitle>
            <S.IdInput
              type="password"
              placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
              {...register("password")}
            />
          </S.InputWrapper>
        </S.InputSort>
        <S.LoginButton>로그인</S.LoginButton>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
