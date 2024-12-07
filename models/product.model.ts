export type ProductModel = {
  id: number;
  image_main: string;
  images: Image[] | Image;
  title: string;
  description: string;
  price: number;
  category: Category[] | Category;
  stock: number;
};

export type Image = {
  id: number;
  url: string;
};

export type Category = {
  id: number;
  name: string;
};

export type ProductCardModel = Omit<ProductModel, "images" | "description">;
