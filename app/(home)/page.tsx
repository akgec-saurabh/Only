import BottomFooter from "@/components/BottomFooter";
import CollectionGrid from "@/components/CollectionGrid";
import ProductGrid from "@/components/ProductGrid";
import ProductView from "@/components/ProductView";

export default function Home() {
  return (
    <>
      <CollectionGrid />
      <ProductGrid />
      {/* <ProductView /> */}
      <BottomFooter />
    </>
  );
}
