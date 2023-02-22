import styled from "@emotion/styled";

export const ReplyTextBox = styled.form`
  border-top: 1px dashed #c0c0c0;
  padding-top: 21px;
  margin-top: 21px;
`;

export const ReplyTextarea = styled.textarea`
  width: 100%;
  height: 152px;
  background: #e9e9e9;
  resize: none;
  font-weight: 400;
  font-size: 15px;
  border: none;
  padding: 10px;
`;

export const ReplyBtnBox = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const CancleBtn = styled.button`
  padding: 23px 0;
  width: 195px;
  color: #000000;
  border: 1px solid #000000;
  background: #ffffff;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  margin-right: 16px;
`;
