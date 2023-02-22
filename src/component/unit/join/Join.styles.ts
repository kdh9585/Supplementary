import styled from "@emotion/styled";

export const Wrapper = styled.form`
  padding: 94px 91px 101px;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 114px;
  border-bottom: 3px solid #555555;
  font-size: 40px;
  font-weight: 400;
`;

export const FormWrapper = styled.div`
  padding: 40px 50px;
  border-bottom: 2px solid #555555;
  display: flex;
  flex-direction: column;

  & > div {
    padding-bottom: 31px;
  }
  & > div:last-child {
    padding-bottom: 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputTitle = styled.div`
  width: 12%;
  font-weight: 400;
  font-size: 24px;
`;

export const IdInput = styled.input`
  width: 611px;
  padding: 19px 18px;
  border: none;
  background: #e9e9e9;
  font-size: 15px;
  font-weight: 400;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 68px 0 0;
  gap: 21px;
`;

export const BackButton = styled.button`
  font-weight: 700;
  font-size: 20px;
  background: #ffffff;
  padding: 12px 73px;
  border: 1px solid #000000;
  cursor: pointer;
`;

export const SignButton = styled.button`
  font-weight: 700;
  font-size: 20px;
  background: #000000;
  padding: 12px 73px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;
