import styled from "@emotion/styled";

export const WriteQAForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 17px;
  padding-bottom: 17px;
  /* border-bottom: 1px solid #c0c0c0; */
`;

export const EditQAForm = styled.form`
  width: 1652px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 17px;
  padding-bottom: 17px;
  /* border-bottom: 1px solid #c0c0c0; */
`;

export const QandATextarea = styled.textarea`
  height: 231px;
  width: 100%;
  padding: 36px 0 0 40px;
  background: #e9e9e9;
  resize: none;
  /* color: #a9a9a9; */
  font-weight: 400;
  font-size: 15px;
  border: none;
`;

export const CancleBtn = styled.button`
  padding: 22px 0;
  width: 195px;
  color: #000000;
  background: #ffffff;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

export const WriteBtn = styled.button`
  padding: 24px 0;
  width: 195px;
  border: none;
  background: #000000;
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;
