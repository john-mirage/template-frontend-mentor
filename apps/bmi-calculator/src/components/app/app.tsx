import BmiExplanation from "../bmi-explanation";
import BmiLimitation from "../bmi-limitation";
import Form from "../form";
import Hero from "../hero";

export function App() {
  return (
    <div className="pb-96">
      <div className="relative">
        <Hero />
        <Form />
      </div>
      <BmiExplanation />
      <BmiLimitation />
    </div>
  );
}

export default App;
