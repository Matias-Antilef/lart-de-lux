"use client";

import HeroVideo from "@/components/HeroVideo";
import { addToFavorites } from "@/redux/favoritesSlice";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();

  const heartFavorites = () => {
    dispatch(
      addToFavorites({ id: 1, imageMain: "nose", price: 20, title: "hola" })
    );
  };

  return (
    <>
      <HeroVideo />

      <section className="flex justify-center py-10 bg-slate-700 text-white">
        <article className=" w-[360px] relative overflow-hidden">
          <div className="w-full h-[300px] relative ">
            <Image
              src="/js.png"
              alt="js"
              fill
              className="h-full w-full object-cover"
            />
          </div>

          <button
            onClick={heartFavorites}
            className="absolute top-2 right-2 border-none text-transparent outline-none"
          >
            <Heart className=" fill-red-200 hover:fill-red-300 transition-colors  rounded-full overflow-hidden h-10 w-10" />
          </button>
          <div>
            <h5>Ropa Luxe</h5>
            <button>Añadir al carrito</button>
          </div>
        </article>
      </section>
    </>
  );
}
export default HomePage;
