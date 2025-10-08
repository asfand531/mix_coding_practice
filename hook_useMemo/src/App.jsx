import FactorialCalculator from "./components/FactorialCalculator";
import ListSorting from "./components/ListSorting";
import SearchFiltering from "./SearchFiltering";
import Un_necessaryChildRenders from "./components/Un_necessaryChildRenders";
import ApiData from "./components/ApiData";
import FormValidation from "./components/FormValidation";
import DataVisualizationOptimization from "./components/DataVisualizationOptimization";
import "./App.css";

function App() {
  return (
    <>
      {/* <div>
        <h1 className="h1">Solution # 1</h1>
        <FactorialCalculator />
      </div>
      <div>
        <h1 className="h1">Solution # 2</h1>
        <ListSorting />
      </div>
      <div>
        <h1 className="h1">Solution # 3</h1>
        <SearchFiltering />
      </div> */}
      <div>
        <h1 className="h1">Solution # 4</h1>
        {/* <Un_necessaryChildRenders /> */}
      </div>
      <div>
        <h1 className="h1">Solution # 5</h1>
        {/* <ApiData /> */}
      </div>
      <div>
        <h1 className="h1">Solution # 6</h1>
        <FormValidation />
      </div>
      <div>
        <h1 className="h1">Solution # 7</h1>
        <DataVisualizationOptimization />
      </div>
    </>
  );
}

export default App;
