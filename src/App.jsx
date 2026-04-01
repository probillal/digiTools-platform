import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/Heading/Heading";
import Stats from "./components/Stats/Stats";
import Steps from "./components/StepsSection/Steps";
import PricingSection from "./components/PricingSection/PricingSection";
import WorkFlowSection from "./components/WorkFlowSection/WorkFlowSection";
import Footer from "./components/Footer/Footer";
import PricingOption from "./components/PricingOption/PricingOption";
import { useState } from "react";
import Carts from "./components/Carts/Carts";
const fetchPricing = async () => {
  const res = await fetch("/pricingCardData.json");
  return res.json();
};

const pricingPromise = fetchPricing();
function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]);
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Stats></Stats>
        <Heading></Heading>
        <div className="tabs tabs-box justify-center bg-transparent shadow-none">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-40 ${activeTab === "product" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}
            aria-label="Products"
            onClick={() => setActiveTab("product")}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-40  ${activeTab === "cart" ? "bg-linear-to-r to-[#9514FA] from-[#4F39F6] text-white" : ""}`}
            aria-label={`Cart (${carts.length})`}
            onClick={() => setActiveTab("cart")}
          />
        </div>
        {activeTab === "product" ? (
          <PricingOption
            carts={carts}
            setCarts={setCarts}
            pricingPromise={pricingPromise}
          ></PricingOption>
        ) : (
          <Carts carts={carts} setCarts={setCarts}></Carts>
        )}

        <Steps></Steps>
        <PricingSection></PricingSection>
        <WorkFlowSection></WorkFlowSection>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
