import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bgcontainer flex justify-center items-center">
      <div className="rounded-lg h-[25rem] w-[25rem] flex justify-center ml-9 mt-3">
        <form className="flex flex-col gap-4" onSubmit={() => navigate("home")}>
          <img
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png"
            alt="img"
            width="200px"
            draggable="false"
            className="mx-auto rounded-lg flex justify-between items-center "
            rounded-lg
          />
          <input
            type="text"
            placeholder="Type a letter..."
            className="bg-white text-black p-2 rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Type a letter..."
            className="bg-white text-black
            p-2
            rounded-lg"
            required
          />
          <button className="rounded-lg bg-red-500 font-bold text-white w-[5rem] mx-auto p-1">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
