import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOption = ({ pricingPromise, carts, setCarts }) => {
  const pricingData = use(pricingPromise);
  console.log(pricingData);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-5 px-10 ">
      {pricingData.map((card) => (
        <PricingCard
          carts={carts}
          setCarts={setCarts}
          key={card.id}
          card={card}
        ></PricingCard>
      ))}
    </div>
  );
};

export default PricingOption;
