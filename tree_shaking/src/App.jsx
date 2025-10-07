import Counter from "./Counter";
import { add } from "./math";
import "./App.css";

function App() {
  // Tree Shaking
  console.log("Tree shaking >>> ", add(5, 5));

  return (
    <>
      <div>
        <h1>Tree Shaking </h1>
        <p>
          For tree shaking demo you need to start the app on build (npm run
          build). And then see for dist/index
        </p>
      </div>
      <Counter />
    </>
  );
}

export default App;
