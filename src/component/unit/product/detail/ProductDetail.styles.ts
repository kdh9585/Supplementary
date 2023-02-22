import styled from "@emotion/styled";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

export const Wrapper = styled.div`
  padding: 68px 0 0px 0;
`;

export const InnerWrapper = styled.div`
  width: 1784.5px;
  margin: 0 auto;
`;

export const ItemWrapper = styled.div`
  display: flex;
`;

export const ItemImg = styled.div`
  width: 863px;
  height: 611px;
  background: #a0a0a0; ;
`;

export const ItemInfoWrapper = styled.div`
  width: calc(100% - 863px);
  display: flex;
  flex-direction: column;
  padding: 15px 0 0px 57px;
`;

export const ItemCateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 26px;
  align-items: center;
`;

export const ItemCate = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #000000;
`;

export const IconBox = styled.div`
  color: #bdbdbd;
`;

export const EditIcon = styled(ModeEditOutlineOutlinedIcon)`
  margin-right: 10px;
  cursor: pointer;
`;

export const CloseIcon = styled(CloseOutlinedIcon)`
  cursor: pointer;
`;

export const ItemName = styled.div`
  font-weight: 700;
  font-size: 40px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 96px 0 23px;
  border-bottom: 3px solid #555555;
`;

export const PriceBox = styled.div`
  font-weight: 400;
  font-size: 12px;

  & > span:nth-child(2) {
    font-weight: 700;
    font-size: 14px;
    padding: 0 2px 0 62px;
  }
`;

export const DibsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 30px;
  font-weight: 700;
  font-size: 12px;
`;

export const EmptyHeart = styled(FavoriteBorderOutlinedIcon)`
  color: #bdbdbd;
  cursor: pointer;
`;
export const FillHeart = styled(FavoriteOutlinedIcon)`
  color: red;
  cursor: pointer;
`;

export const ItemExpl = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin: 22px 15px 30px;
  padding: 10px;
  letter-spacing: -0.05em;
`;

export const TagBox = styled.div`
  color: #f65656;
  font-weight: 500;
  font-size: 16px;
  padding-left: 32px;
  padding-bottom: 14px;
  border-bottom: 1px solid #c0c0c0;
`;

export const BtnBox = styled.div`
  margin: 31px auto;
`;

export const BuyBtn = styled.button`
  font-weight: 400;
  font-size: 30px;
  padding: 26px 85px;
  cursor: pointer;
  background: #000000;
  color: #ffffff;
  border: none;
  margin-right: 9px;
`;

export const BagBtn = styled.button`
  font-weight: 400;
  font-size: 30px;
  padding: 26px 85px;
  cursor: pointer;
  color: #ffffff;
  background: #bdbdbd;
  border: none;
  margin-left: 10px;
`;

export const DetailTitle = styled.div`
  border-bottom: 3px solid #555555;
  font-weight: 700;
  font-size: 32px;
  color: #000000;
  padding: 170px 19px 19px 50px;
`;

export const ContentInnerWrapper = styled.div`
  width: 1695px;
  margin: 0 auto;
`;

export const DetailContent = styled.div`
  padding: 0 0 50px 0;
`;

export const DetailMap = styled.div`
  padding: 97px 0 0 0;
  width: 1476px;
  margin: 0 auto;
  font-weight: 400px;
  font-size: 24px;
`;

export const MapTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
`;
