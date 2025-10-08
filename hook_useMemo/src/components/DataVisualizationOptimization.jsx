import { useEffect, useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function DataVisualizationOptimization() {
  const [salesData, setSalesData] = useState([]);
  const [filterYear, setFilterYear] = useState("2024");

  useEffect(() => {
    const fetchData = async () => {
      const fakeSales = [
        { month: "Jan", sales: 4000, year: "2024" },
        { month: "Feb", sales: 3000, year: "2024" },
        { month: "Mar", sales: 5000, year: "2024" },
        { month: "Apr", sales: 2500, year: "2024" },
        { month: "May", sales: 4200, year: "2025" },
        { month: "Jun", sales: 6100, year: "2025" },
        { month: "Jul", sales: 3900, year: "2025" },
      ];

      setTimeout(() => setSalesData(fakeSales), 1000);
    };

    fetchData();
  }, []);

  const processedData = useMemo(() => {
    console.log("Processing sales data...");

    const filtered = salesData.filter((item) => item.year === filterYear);

    const monthsOrder = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const sorted = filtered.sort(
      (a, b) => monthsOrder.indexOf(a.month) - monthsOrder.indexOf(b.month)
    );

    return sorted.map((item) => ({
      ...item,
      label: `${item.month} (${item.year})`,
    }));
  }, [salesData, filterYear]);

  const [counter, setCounter] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Sales Visualization</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>Select Year: </label>
        <select
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
        >
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>

        <button onClick={() => setCounter((c) => c + 1)}>
          Unrelated State +
        </button>
        <p>Counter: {counter}</p>
      </div>

      <ResponsiveContainer width="80%" height={300}>
        <BarChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DataVisualizationOptimization;
