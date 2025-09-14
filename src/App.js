import "./App.css";
import { Header } from "./components/SearchBar.js";
import { useApiRequest } from "./components/useApiRequest.js";

function App() {
  const { loading, error, data, fetchData } = useApiRequest();
  return (
    <div className="App">
      <Header onSearch={fetchData} />
    </div>
  );
}

export default App;
