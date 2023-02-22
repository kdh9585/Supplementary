import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { PointBtn } from "../../../commons/styles/commonsStypes";

interface IIsSelectLists {
  isSelectLists: boolean;
}

export const CraditModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
  }
`;
export const CreaditWrap = styled.div`
  padding: 52px 16px 16px;
`;
export const CreaditTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
`;
export const CreaditSelectWrap = styled.div`
  > div > button {
    position: relative;
    padding: 16px;
    width: 100%;
    display: flex;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    background: transparent;
    border: none;
    border-bottom: 3px solid #000000;

    ::after {
      content: "";
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%) rotate(135deg);
      width: 12px;
      height: 12px;
      border-width: 2px 2px 0 0;
      border-style: solid;
      border-color: #000000;
      cursor: pointer;
    }
  }
  > ul {
    height: ${(props: IIsSelectLists) => (props.isSelectLists ? "210px" : "0")};
    transition: all 0.2s;
    overflow: hidden;
    margin-top: 16px;
    padding-left: 0;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    > li + li {
      border-top: 1px solid #e9e9e9;
    }
    > li > button {
      background: transparent;
      border: none;
      padding: 16px;
      width: 100%;
      display: flex;
      color: #e0e0e0;
      :hover {
        font-weight: 700;
        color: #000000;
        cursor: pointer;
      }
    }
  }
`;

export const CreaditBtn = styled(PointBtn)`
  width: 100%;
  text-align: center;
  border-radius: 10px;
  :disabled {
    background-color: #bdbdbd;
    color: #ffffff;
    border: 1px solid #bdbdbd;
  }
  cursor: pointer;
`;
