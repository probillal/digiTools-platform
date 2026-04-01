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
const fetchPricing = async () => {
  const res = await fetch("/pricingCardData.json");
  return res.json();
};

const pricingPromise = fetchPricing();
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Stats></Stats>
        <Heading></Heading>
        <PricingOption pricingPromise={pricingPromise}></PricingOption>
        <Steps></Steps>
        <PricingSection></PricingSection>
        <WorkFlowSection></WorkFlowSection>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
