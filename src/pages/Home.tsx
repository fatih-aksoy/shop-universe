import { useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../app/hook";
import {
  getSuccessProduct,
  // Product,
  fetchFail,
  fetchStart,
  addFavorites,
} from "../features/productsSlice";
import { EventFunc, Product, Products } from "../models/models";
import Card from "../components/Card";
import { toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";
import Navbar from "../components/Navbar";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const { loading, error, productsList, favorites } = useAppSelector(
    (state) => state.products
  );

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get<Products>(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(data.products);
      dispatch(getSuccessProduct(data.products));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  const handleChange: EventFunc = (e) => {
    setSearch(e.target.value);
  };

  const handleAdd = (product: Product) => {
    if (favorites.filter((item) => item.id === product.id).length === 0) {
      dispatch(addFavorites(product));
      toastSuccessNotify("The Product is added to favorites!");
    } else {
      toastWarnNotify(" The Product has already been added!");
    }
  };

  return (
    <div>
      <Navbar />
      <SearchComp handleChange={handleChange} />
      {loading ? (
        <div className="mt-52">
          <p className="text-center font-bold text-red-900">
            Products are loading...
          </p>
        </div>
      ) : error ? (
        <div className="mt-52">
          <p className="text-center text-red-900">Something went wrong</p>
        </div>
      ) : (
        <div className="flex justify-center font-bold items.center flex-wrap gap-5 p-5">
          {productsList.map((item) => (
            <Card
              key={item.id}
              item={item}
              text="Add to favorites"
              handleFunc={handleAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
