import { PublicRoutes } from "@/routes/routes";
import Image from "next/image";
import Link from "next/link";

function CategoryCard({
  image_main,
  title,
  category,
}: {
  image_main: string;
  title: string;
  category: string;
}) {
  return (
    <article className="w-full h-[90vh] relative">
      <Link href={`/${PublicRoutes.SEARCH}/${category}`}>
        <div className="relative w-full h-full  ">
          <Image
            src={image_main}
            fill
            alt="js"
            className="h-full w-full object-cover z-10 "
          />
          <div>
            <h3>{title}</h3>
          </div>
        </div>
      </Link>
    </article>
  );
}
export default CategoryCard;
