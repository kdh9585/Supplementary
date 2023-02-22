import { useAuth } from "../../../src/component/commons/hooks/custom/useAuth";
import ProductDetail from "../../../src/component/unit/product/detail/ProductDetail.container";

export default function ProductDetailPage() {
  useAuth();
  return <ProductDetail />;
}
