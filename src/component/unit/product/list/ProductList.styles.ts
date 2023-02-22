import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 92px 82px 131px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 98px;
  justify-content: space-between;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
  width: 348px;
  cursor: pointer;

  & > div:nth-child(4n + 0) {
    background-color: red;
  }
`;

export const ProductImgDiv = styled.div`
  width: 348px;
  height: 466px;
  background-color: #c4c4c4;
  position: relative;
`;

export const ProductImg = styled.img`
  width: 348px;
  height: 466px;
`;

export const EmptyHeart = styled(HeartOutlined)`
  position: absolute;
  right: 5%;
  top: 5%;
  color: #555555;
  cursor: pointer;
`;

export const FilledHeart = styled(HeartFilled)`
  position: absolute;
  right: 5%;
  top: 5%;
  color: red;
  cursor: pointer;
`;

export const ProductInfoWrapper = styled.div`
  padding: 18px 18px 0;
`;

export const ProductTagBox = styled.div`
  font-family: "Noto Sans KR";
  font-weight: 700px;
  font-size: 20px;
  padding-bottom: 6px;

  & > span:first-child {
    color: #f65656;
    padding-right: 14px;
  }
`;

export const Seller = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: #555555;
  padding-bottom: 8px;
`;

export const ProductInfo = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #555555;
  font-size: 0.8rem;
  font-weight: 400;
`;
