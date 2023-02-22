import { useAuth } from "../../../src/component/commons/hooks/custom/useAuth";
import ProductWrite from "../../../src/component/unit/product/write/ProductWrite.index";

export default function ProductWritePage() {
  useAuth();
  return <ProductWrite isEdit={false} />;
}
