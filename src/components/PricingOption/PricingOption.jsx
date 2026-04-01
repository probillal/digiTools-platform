import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOption = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  console.log(pricingData);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
      {pricingData.map((card) => (
        <PricingCard key={card.id} card={card}></PricingCard>
      ))}
    </div>
  );
};

export default PricingOption;
