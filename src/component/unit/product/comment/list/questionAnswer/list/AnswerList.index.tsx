import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { getDate } from "../../../../../../../commons/library/util";
import { infoUserState } from "../../../../../../../commons/stores";
import { useDeleteQuestionAnswer } from "../../../../../../commons/hooks/mutation/useDeleteQuestionAnswer";
import { useFetchUseditemQuestionAnswers } from "../../../../../../commons/hooks/query/useFetchUseditemQuestionAnswers";
import { useFetchUseditemQuestions } from "../../../../../../commons/hooks/query/useFetchUseditemQuestions";
import { WriteBtn } from "../../../write/CommentWrite.styles";
import { CloseIcon, EditIcon } from "../../CommentList.styles";
import AnswerWrite from "../write/AnswerWrite.index";
import { CancleBtn } from "../write/AnswerWrite.styles";
import * as S from "./AnswerList.styles";

interface IProps {
  useditemQuestionId: string;
  createdAt: string;
}

export default function QuestionAnswer(props: IProps) {
  const router = useRouter();
  const { data } = useFetchUseditemQuestionAnswers(props.useditemQuestionId);
  const { deleteQuestionAnswer } = useDeleteQuestionAnswer();
  const [isEditRelply, setIsEditRelply] = useState(false);
  const [infoUser] = useRecoilState(infoUserState);
  const onClickToggleEdit = () => {
    setIsEditRelply((prev) => !prev);
    // console.log(infoUser?._id);
    // console.log(data?.fetchUseditemQuestionAnswers);
    console.log(isEditRelply);
  };

  return (
    <>
      {data?.fetchUseditemQuestionAnswers ? (
        data.fetchUseditemQuestionAnswers.map((el, idx) => (
          <S.ReplyWrapper key={el._id}>
            {!isEditRelply ? (
              <>
                <S.ReplyTitle>답변</S.ReplyTitle>
                {infoUser._id ===
                  data?.fetchUseditemQuestionAnswers[idx].user._id && (
                  <>
                    <EditIcon onClick={onClickToggleEdit} />
                    <CloseIcon
                      onClick={deleteQuestionAnswer(
                        String(data.fetchUseditemQuestionAnswers[idx]._id),
                        props.useditemQuestionId
                      )}
                    />
                  </>
                )}
                <S.ReplyDate>{getDate(el.createdAt)}</S.ReplyDate>
                <S.ReplyContent>{el?.contents}</S.ReplyContent>
              </>
            ) : (
              <>
                <AnswerWrite
                  defaultValue={data.fetchUseditemQuestionAnswers[idx].contents}
                  isEditRelply={isEditRelply}
                  setIsEditRelply={setIsEditRelply}
                  QuestionAnswerId={data.fetchUseditemQuestionAnswers[idx]._id}
                />
              </>
            )}
          </S.ReplyWrapper>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
