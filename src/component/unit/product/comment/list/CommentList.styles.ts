import styled from "@emotion/styled";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

export const QandAWrapper = styled.div`
  padding: 86px 0 145px 0;
`;

export const QandAInnerWrapper = styled.div`
  padding: 71px 0 0 0;
  width: 1652px;
  margin: 0 auto;
`;

export const CommentWrapper = styled.div`
  padding: 39px 0 5px 10px;
  border-top: 1px solid #c0c0c0;
  display: flex;
  border-bottom: 1px solid #c0c0c0;
`;

export const CommentName = styled.div`
  background: #000000;
  color: #ffffff;
  font-weight: 400;
  font-size: 15px;
  width: 103px;
  height: 27px;
  text-align: center;
`;

export const CommentContentWrapper = styled.div`
  max-width: 1460px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

export const ContentInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 15px;
  padding-bottom: 35px;
`;

export const CommentBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const EditIcon = styled(ModeEditOutlineOutlinedIcon)`
  margin-right: 10px;
  font-size: 18px;
  cursor: pointer;
  color: #bdbdbd;
  margin-left: 33px;
`;

export const CloseIcon = styled(CloseOutlinedIcon)`
  cursor: pointer;
  font-size: 18px;
  color: #bdbdbd;
`;

export const ReplyIcon = styled(QuestionAnswerIcon)`
  cursor: pointer;
  font-size: 18px;
  color: #bdbdbd;
  margin-left: 20px;
  margin-right: 5px;
`;
