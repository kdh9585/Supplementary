import styled from "@emotion/styled";
import { css } from "@emotion/react";
interface IButtonColorTypes {
  black?: {
    bgColor: string;
    borderColor: string;
    color: string;
  };
  yellow?: {
    bgColor: string;
    borderColor: string;
    color: string;
  };
  gray?: {
    bgColor: string;
    borderColor: string;
    color: string;
  };
  lightGray?: {
    bgColor: string;
    borderColor: string;
    color: string;
  };
  white?: {
    bgColor: string;
    borderColor: string;
    color: string;
  };
  [prop: string]: any;
}

const BUTTON_COLOR: IButtonColorTypes = {
  black: {
    bgColor: "#000000",
    borderColor: "#000000",
    color: "#ffffff",
  },
  yellow: {
    bgColor: "#FFE004",
    borderColor: "#FFE004",
    color: "#000000",
  },
  gary: {
    bgColor: "#a0a0a0",
    borderColor: "#a0a0a0",
    color: "#ffffff",
  },
  lightGray: {
    bgColor: "#c9c9c9",
    borderColor: "#c9c9c9",
    color: "#ffffff",
  },
  white: {
    bgColor: "#ffffff",
    borderColor: "#000000",
    color: "#000000",
  },
};

export const PointBtn = styled.button`
  padding: 14px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: #bdbdbd;
  transition: all 0.2s;
  ${(props) =>
    props.color !== undefined &&
    css`
      background-color: ${BUTTON_COLOR[props.color].bgColor};
      color: ${BUTTON_COLOR[props.color].color};
      border-color: ${BUTTON_COLOR[props.color].borderColor};
    `}
`;
