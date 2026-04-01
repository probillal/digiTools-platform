import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/Heading/Heading";
import Stats from "./components/Stats/Stats";
import Steps from "./components/StepsSection/Steps";
import PricingSection from "./components/PricingSection/PricingSection";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Stats></Stats>
        <Heading></Heading>
        <Steps></Steps>
        <PricingSection></PricingSection>
      </div>
    </>
  );
}

export default App;
