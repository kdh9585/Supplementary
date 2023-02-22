import { useForm } from "react-hook-form";
import { useCreateUseditemQuestion } from "../../../../commons/hooks/mutation/useCreateUseditemQuestion";
import { useUpdateUseditemQuestion } from "../../../../commons/hooks/mutation/useupdateUseditemQuestion";
import * as S from "./CommentWrite.styles";

export default function CommentWrite(props) {
  const { register, setValue, handleSubmit, reset } = useForm({
    mode: "onChange",
  });
  const { createSubmit } = useCreateUseditemQuestion();
  const { updateUseditemQuestionSubmit } = useUpdateUseditemQuestion();
  const onClickSubmit = (data) => {
    if (props.isEdit) {
      void updateUseditemQuestionSubmit(data, props?.useditemQuestionId);
      props.setUploadId();
    } else {
      void createSubmit(data);
    }
    setValue("contents", "");
  };
  return (
    <>
      {props.isEdit ? (
        <S.EditQAForm onSubmit={handleSubmit(onClickSubmit)}>
          <S.QandATextarea
            placeholder="내용을 입력해 주세요"
            {...register("contents")}
            defaultValue={props.defaultValue}
          />
          {props.isEdit ? (
            <div>
              <S.CancleBtn
                type="button"
                onClick={props.onClickUpdateComment("")}
                style={{ marginRight: "15px" }}
              >
                취소하기
              </S.CancleBtn>
              <S.WriteBtn>수정하기</S.WriteBtn>
            </div>
          ) : (
            <S.WriteBtn>작성하기</S.WriteBtn>
          )}
        </S.EditQAForm>
      ) : (
        <S.WriteQAForm onSubmit={handleSubmit(onClickSubmit)}>
          <S.QandATextarea
            placeholder="내용을 입력해 주세요"
            {...register("contents")}
            defaultValue={props.defaultValue}
          />
          <S.WriteBtn>작성하기</S.WriteBtn>
        </S.WriteQAForm>
      )}
    </>
  );
}

// <S.WriteQAForm onSubmit={handleSubmit(onClickSubmit)}>
//   <S.QandATextarea
//     placeholder="내용을 입력해 주세요"
//     {...register("contents")}
//     defaultValue={props.defaultValue}
//   />
//   {props.isEdit ? (
//     <div>
//       <S.CancleBtn type="button" onClick={props.onClickUpdateComment("")}>
//         취소하기
//       </S.CancleBtn>
//       <S.WriteBtn>수정하기</S.WriteBtn>
//     </div>
//   ) : (
//     <S.WriteBtn>작성하기</S.WriteBtn>
//   )}
// </S.WriteQAForm>
