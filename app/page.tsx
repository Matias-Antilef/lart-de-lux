"use client";
import HeroVideo from "@/components/HeroVideo";
import CategoryCard from "@/components/ui/CategoryCard";
import ProductCard from "@/components/ui/ProductCard";
import useFetch from "@/hooks/useFetch";
import { ProductCardModel } from "@/models/product.model";

function HomePage() {
  const { fetchData } = useFetch<ProductCardModel>({
    url: "/products.json",
  });
  return (
    <>
      <HeroVideo />

      <section className="flex  justify-between px-3  py-10 bg-dark text-white">
        {Array.isArray(fetchData) &&
          fetchData.map((res) => (
            <ProductCard
              id={res.id}
              category={res.category}
              image_main={res.image_main}
              price={res.price}
              stock={res.stock}
              title={res.title}
              key={res.id}
            />
          ))}
      </section>

      <section className="w-full flex px-3 gap-2">
        <CategoryCard image_main="/js.png" title="jsconf" category="bolso" />
        <CategoryCard image_main="/js.png" title="jsconf" category="bolso" />
      </section>
    </>
  );
}
export default HomePage;
