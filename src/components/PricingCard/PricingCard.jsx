import React from "react";
import Feature from "../Feature/Feature";

const PricingCard = ({ card }) => {
  console.log(card);
  const { icon, tagType, price, name, description, period, features } = card;
  return (
    <div className="my-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-10">
        {/* card-1 */}
        <div className="card w-80 bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="flex justify-between items-center w-full">
              <div className="w-12 h-12 rounded-full bg-white shadow-lg flex justify-center items-center border-zinc-500">
                {icon}
              </div>
              <span className="badge badge-xs badge-warning">{tagType}</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold">{name}</h2>
              <p className="mt-2 text-xs">{description}</p>
              <p className="text-xl mt-3 font-bold">
                ${price} <span className="text-xs font-normal">/{period}</span>
              </p>
              <div>
                {features.map((feature, index) => (
                  <Feature key={index} feature={feature}></Feature>
                ))}
              </div>
            </div>

            <div className="mt-6 ">
              <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl btn-block flex-1">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
