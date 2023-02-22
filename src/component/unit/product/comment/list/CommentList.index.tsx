import { useState } from "react";
import * as S from "./CommentList.styles";
import { useDeleteUseditemQuestion } from "../../../../commons/hooks/mutation/usedeleteUseditemQuestion";
import { useFetchUseditemQuestions } from "../../../../commons/hooks/query/useFetchUseditemQuestions";
import { DetailTitle } from "../../detail/ProductDetail.styles";
import { getDate } from "../../../../../commons/library/util";
import CommentWrite from "../write/CommentWrite.index";
import QuestionAnswer from "./questionAnswer/list/AnswerList.index";
import { ReplyContent } from "./questionAnswer/list/AnswerList.styles";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../../commons/stores";
import AnswerWrite from "./questionAnswer/write/AnswerWrite.index";
import InfiniteScroll from "react-infinite-scroller";

interface IProps {
  useditemId: string;
}

export default function ProductComment(props: IProps) {
  const { data, fetchMore } = useFetchUseditemQuestions(props?.useditemId);
  const [uploadId, setUploadId] = useState("");
  const [infoUser] = useRecoilState(infoUserState);
  const [isReply, setIsReply] = useState("");
  const { onClickdeleteUseditemQuestion } = useDeleteUseditemQuestion();

  const onClickUpdateComment = (updateId: string) => (event) => {
    setUploadId(updateId);
  };

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  const onClickReply = (data: any) => () => {
    setIsReply(data);
    console.log(data);
  };
  console.log(isReply);
  console.log(data?.fetchUseditemQuestions[0]);
  return (
    <S.QandAWrapper>
      <DetailTitle>Q & A</DetailTitle>
      <S.QandAInnerWrapper>
        <CommentWrite />
        <InfiniteScroll pageStart={1} loadMore={onLoadMore} hasMore={true}>
          {data?.fetchUseditemQuestions ? (
            data?.fetchUseditemQuestions?.map((el, idx) => (
              <S.CommentWrapper key={el._id}>
                {uploadId !== el._id ? (
                  <>
                    <S.CommentName>{el.user?.name}</S.CommentName>
                    <S.CommentContentWrapper>
                      <S.ContentInnerWrapper>
                        <ReplyContent>{el.contents}</ReplyContent>
                        <S.CommentBtnWrapper>
                          <span>{getDate(el?.createdAt)}</span>
                          {infoUser._id ===
                            data?.fetchUseditemQuestions[idx].user._id && (
                            <>
                              <S.EditIcon
                                onClick={onClickUpdateComment(el._id)}
                              />
                              <S.CloseIcon
                                onClick={onClickdeleteUseditemQuestion(el._id)}
                              />
                            </>
                          )}
                          {infoUser._id !==
                            data?.fetchUseditemQuestions[idx].user._id && (
                            <>
                              <S.ReplyIcon onClick={onClickReply(el._id)} />
                            </>
                          )}
                        </S.CommentBtnWrapper>
                      </S.ContentInnerWrapper>
                      <div>
                        <QuestionAnswer
                          createdAt={el.createdAt}
                          useditemQuestionId={el?._id}
                        />
                        {isReply === data?.fetchUseditemQuestions[idx]._id ? (
                          <AnswerWrite
                            useditemQuestionId={el._id}
                            setIsReply={setIsReply}
                            onClickUpdateComment={onClickUpdateComment}
                            onClickReply={onClickReply}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </S.CommentContentWrapper>
                  </>
                ) : (
                  <CommentWrite
                    isEdit={true}
                    defaultValue={el.contents}
                    onClickUpdateComment={onClickUpdateComment}
                    setUploadId={setUploadId}
                    useditemQuestionId={uploadId}
                  />
                )}
              </S.CommentWrapper>
            ))
          ) : (
            <></>
          )}
        </InfiniteScroll>
      </S.QandAInnerWrapper>
    </S.QandAWrapper>
  );
}
