import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const Cart = ({ cart, carts, setCarts }) => {
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center gap-4 border p-4 rounded-3xl mt-8">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-2xl font-bold flex gap-2 items-center">
              {cart.name}
            </h2>
            <p className="font-semibold">$ {cart.price} /month</p>
          </div>
        </div>
        <button className="btn text-red-500 text-2xl">
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default Cart;
