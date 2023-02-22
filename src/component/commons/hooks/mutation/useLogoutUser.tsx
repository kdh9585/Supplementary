import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";

export const useLogoutUser = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const logoutUser = async () => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
    alert("로그아웃 하셨습니다.");
    location.reload();
  };

  return {
    logoutUser,
  };
};
