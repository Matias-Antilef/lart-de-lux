"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.items);

  console.log(favorites);
  return (
    <div>
      <h1>FavoritesPage</h1>
      <ul>
        {favorites.map((item) => (
          <li key={item.id}> {item.title} </li>
        ))}
      </ul>
    </div>
  );
}
export default FavoritesPage;
