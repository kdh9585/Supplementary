import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCreateQuestionAnswer } from "../../../../../../commons/hooks/mutation/useCreateQuestionAnswer";
import { useUpdateQuestionAnswer } from "../../../../../../commons/hooks/mutation/useUpdateQuestionAnswer";
import { WriteBtn } from "../../../write/CommentWrite.styles";
import * as S from "./AnswerWrite.styles";

export default function AnswerWrite(props) {
  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      contents: "",
    },
  });
  const { createSubmit } = useCreateQuestionAnswer();
  const { updateQuestionAnswer } = useUpdateQuestionAnswer();

  const onClickSubmit = (data) => {
    if (props.isEditReply === true) {
      void updateQuestionAnswer(data, props.QuestionAnswerId);
      props.setIsEditReply(false);
    } else {
      void createSubmit(data, props.useditemQuestionId);
      props.setIsReply((prev) => !prev);
    }
  };

  useEffect(() => {
    if (props.defaultValue) {
      const resetData = {
        contents: props.defaultValue,
      };
      reset({ ...resetData });
    }
  }, [props.defaultValue]);

  return (
    <>
      {props.isEditRelply ? (
        <>
          <S.ReplyTextBox onSubmit={handleSubmit(onClickSubmit)}>
            <S.ReplyTextarea
              placeholder="내용을 입력해주세요"
              {...register("contents")}
              defaultValue={props.defaultValue}
            />
            <S.ReplyBtnBox>
              <S.CancleBtn type="button">취소하기</S.CancleBtn>
              <WriteBtn>수정하기</WriteBtn>
            </S.ReplyBtnBox>
          </S.ReplyTextBox>
        </>
      ) : (
        <>
          <S.ReplyTextBox onSubmit={handleSubmit(onClickSubmit)}>
            <S.ReplyTextarea
              placeholder="내용을 입력해주세요"
              {...register("contents")}
              defaultValue={props.defaultValue}
            />
            <S.ReplyBtnBox>
              <S.CancleBtn
                type="button"
                onClick={
                  props.isEditReply
                    ? () => props.setIsEditRelply(false)
                    : props.onClickReply("")
                }
              >
                취소하기
              </S.CancleBtn>
              <WriteBtn>작성하기</WriteBtn>
            </S.ReplyBtnBox>
          </S.ReplyTextBox>
        </>
      )}
    </>
  );
}
