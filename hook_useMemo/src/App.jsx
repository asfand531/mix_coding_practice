import FactorialCalculator from "./components/FactorialCalculator";
import ListSorting from "./components/ListSorting";
import SearchFiltering from "./SearchFiltering";
import "./App.css";

function App() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default App;
