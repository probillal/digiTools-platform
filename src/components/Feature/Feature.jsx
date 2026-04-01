import React from "react";
import { FaCheck } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <div className="">
      <p className="flex gap-2 mt-2 items-center">
        <FaCheck className="text-green-300" /> {feature}
      </p>
    </div>
  );
};

export default Feature;
