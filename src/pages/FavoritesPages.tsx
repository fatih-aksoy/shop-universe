import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import Card from "../components/Card";
import { Product, VoidFunc } from "../models/models";
import { removeFavorites } from "../features/productsSlice";
import { toastSuccessNotify } from "../helper/ToastNotify";
import Navbar from "../components/Navbar";


const FavoritesPages = () => {
  const { favorites } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  console.log(favorites);

  const handleRemove: VoidFunc = (product) => {
    const newData: Product[] = favorites.filter(
      (item) => item.id !== product.id
    );

    dispatch(removeFavorites(newData));
    toastSuccessNotify("Product has been removed...");
  };

  return (
    
    <div>
      <Navbar/>
      <h1 className="font-bold text-2xl text-violet-700 text-center m-3">
        My Favorites Products
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-5 p-5">
        {favorites.map((item) => (
          <Card
            key={item.id}
            text="Remove"
            item={item}
            handleFunc={handleRemove}
          />
        ))}
        {favorites.length === 0 && (
          <h3 className="font-bold text-2xl text-pink-950 text-center m-5">
            No favorites...
          </h3>
        )}
      </div>
    </div>
  );
};

export default FavoritesPages;
