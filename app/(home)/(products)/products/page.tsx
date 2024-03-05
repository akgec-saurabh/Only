import BottomFooter from "@/components/BottomFooter";
import CollectionGrid from "@/components/CollectionGrid";
import Filter from "@/components/Filter/Filter";
import MobileFilterNav from "@/components/Filter/MobileFilterNav";
import ProductGrid from "@/components/ProductGrid";
import ProductGridNav from "@/components/ProductGridNav";

export default function Home({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  return (
    <div className="mx-auto lg:max-w-screen-lg xl:max-w-screen-2xl xl:px-10 ">
      {/* <CollectionGrid /> */}
      <div className="flex  ">
        <Filter />
        <div className="my-4 w-full justify-between">
          <ProductGridNav />
          <ProductGrid page={searchParams.page} />
        </div>
      </div>
    </div>
  );
}
