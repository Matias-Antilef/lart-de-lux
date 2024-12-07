import { ProductCardModel } from "@/models/product.model";
import { addToFavorites } from "@/redux/favoritesSlice";
import { PublicRoutes } from "@/routes/routes";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Heart } from "lucide-react";

function Card({
  image_main,
  category,
  stock,
  id,
  title,
  price,
}: ProductCardModel) {
  const dispatch = useDispatch();

  const heartFavorites = () => {
    dispatch(
      addToFavorites({ id: 1, imageMain: "nose", price: 20, title: "hola" })
    );
  };
  return (
    <article className=" w-[360px] relative overflow-hidden">
      <Link href={`/${PublicRoutes.PRODUCT_INFO}/${id}`}>
        <div className="w-full h-[300px] relative ">
          <Image
            src={image_main}
            alt="js"
            fill
            className="h-full w-full object-cover"
          />
        </div>
      </Link>

      <button
        onClick={heartFavorites}
        className="absolute top-2 right-2 border-none text-transparent outline-none"
      >
        <Heart className=" fill-red-200 hover:fill-red-300 transition-colors  rounded-full overflow-hidden h-10 w-10" />
      </button>
      <div>
        <h5>{title} </h5>
        <span> {price} </span>
        <button>Añadir al carrito</button>
      </div>
    </article>
  );
}
export default Card;
