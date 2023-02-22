import { HeartFilled, HeartOutlined, SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  background: #f8f6f6;
`;

export const BestItemWrapper = styled.div`
  padding-top: 40px;
`;

export const BestTitle = styled.div``;

export const BestItemInnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1737px;
  background: #ffffff;
  /* box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.35); */
`;

export const WriteWrapper = styled.div`
  margin: 0 auto;
  max-width: 1660px;
  border-bottom: 1px solid #555555;
  padding: 30px 10px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WriteBtn = styled.button`
  padding: 23px 69px;
  border: 1px solid #000000;
  color: #000000;
  background: #ffffff;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

export const SearchBox = styled.div`
  position: relative;
  padding-right: 10px;
`;

export const SearchInput = styled.input`
  border: none;
  border-bottom: 3px solid #000000;
  width: 534px;
  background: transparent;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const SearchIcon = styled(SearchOutlined)`
  font-size: 20px;
  position: absolute;
  right: 3%;
  bottom: 28%;
`;

export const BestContentWapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 98px;
  justify-content: center;
  & > div:nth-child(4n + 0) {
    margin-right: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentInnerWapper = styled.div`
  padding: 92px 82px 131px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductBestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 348px;
  margin-right: 87px;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 348px;
  /* margin-right: 87px; */
  margin-bottom: 50px;
  cursor: pointer;
`;

export const ProductImg = styled.div`
  height: 466px;
  background-color: #c4c4c4;
  position: relative;
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
