import { useForm } from "react-hook-form";
import * as S from "./Join.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { joinSchema } from "./Join.valitation";
import { useCreateUser } from "../../commons/hooks/mutation/useCreateUser";
import { IFormJoinData } from "./Join.types";
import { useRouter } from "next/router";

export default function Join() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    // resolver: yupResolver(joinSchema),
  });
  const { createUserSubmit } = useCreateUser();
  const onSubmitForm = (data: IFormJoinData) => {
    void createUserSubmit(data);
  };

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmitForm)}>
      <S.TitleWrapper>JOIN MEMBER</S.TitleWrapper>
      <S.FormWrapper>
        <S.InputWrapper>
          <S.InputTitle>아이디</S.InputTitle>
          <S.IdInput
            type="text"
            placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
            {...register("email")}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>비밀번호</S.InputTitle>
          <S.IdInput
            type="password"
            placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
            {...register("password")}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>비밀번호 확인</S.InputTitle>
          <S.IdInput
            type="password"
            placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
            // {...register("passwordCheck")}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>이름</S.InputTitle>
          <S.IdInput
            type="text"
            placeholder="Ex) 홍길동"
            {...register("name")}
          />
        </S.InputWrapper>
      </S.FormWrapper>
      <S.ButtonWrapper>
        <S.BackButton type="button" onClick={router.back}>
          취소
        </S.BackButton>
        <S.SignButton>확인</S.SignButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
