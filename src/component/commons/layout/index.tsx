import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../commons/stores";
import { useFetchUserLoggedIn } from "../hooks/query/useFetchUserLoggedIn";
import AccountHeader from "./account";
import Footer from "./footer";
import Header from "./header";

interface ILayoutProps {
  children: JSX.Element;
}

const HIDDEN_HEADER = ["/join", "/login"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const [infoUser, setInfoUser] = useRecoilState(infoUserState);

  const { data } = useFetchUserLoggedIn();
  useEffect(() => {
    setInfoUser({ ...data?.fetchUserLoggedIn });
  }, [data]);

  return (
    <>
      {!isHiddenHeader && <Header infoUser={infoUser} />}
      {!!isHiddenHeader && <AccountHeader infoUser={infoUser} />}
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
