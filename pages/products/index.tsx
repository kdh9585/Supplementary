import { useAuth } from "../../src/component/commons/hooks/custom/useAuth";
import Brand from "../../src/component/unit/brand/Brand.container";

export default function BrandPage() {
  useAuth();
  return <Brand />;
}
