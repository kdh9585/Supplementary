import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  background: #ffffff;
`;
export const InnerWrapper = styled.form`
  margin: 0 auto;
  max-width: 1737px;
`;

export const WriteTitleBox = styled.div`
  padding: 104px 47px 31px;
  border-bottom: 1px solid #000000;
`;

export const WriteTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 46px 15px 46px 58px;
  border-bottom: 1px solid #999999;
`;

export const SubTitle = styled.div`
  color: #000000;
  font-size: 24px;
  font-weight: 500;
`;

export const FormInput = styled.input`
  width: 1419px;
  background: #e9e9e9;
  border: none;
  padding: 21px 0 21px 19px;
`;

export const Quill = styled(ReactQuill)`
  width: 1419px;
  height: 389px;
`;

export const AddrressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px 15px 26px 58px;
  border-bottom: 1px solid #999999;
`;

export const AddrressInputWrapper = styled.div`
  display: flex;
`;

export const KakaoMapWrapper = styled.div`
  width: 384px;
  height: 252px;
`;

export const AddrressSort = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: calc(100% - 384px);
  padding-left: 26px;
  font-weight: 400;
`;

export const ZipWrapper = styled.div`
  display: flex;
`;

export const ZipcodeInput = styled.input<{ zipcode: boolean }>`
  width: 77px;
  padding: 14px 0;
  font-size: 16px;
  margin-right: 16px;

  color: ${(props) => (props.zipcode ? "#000000" : "#bdbdbd")};
  border: 1px solid #bdbdbd;
  text-align: center;
`;

export const ZipBtn = styled.button`
  padding: 17px 24px;
  font-weight: 500;
  background: #000000;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

export const ZoneInput = styled.input`
  /* height: 56px; */
  padding: 16px 10px;
  background: #e9e9e9;
  border: none;
  font-size: 16px;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;

export const UploadWrapper = styled.div`
  border-bottom: 3px solid #555555;
  padding: 26px 15px 26px 58px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 73px 0 113px 0;
`;

export const CancelBtn = styled.button`
  padding: 24px 79px;
  font-weight: 700;
  font-size: 20px;
  background: #ffffff;
  border: 1px solid #000000;
  cursor: pointer;
`;

export const RegisBtn = styled.button`
  padding: 24px 79px;
  font-weight: 700;
  font-size: 20px;
  background: #000000;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
