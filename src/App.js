import "./App.css";
import { Header } from "./components/SearchBar.js";
import { useApiRequest } from "./components/useApiRequest.js";
import { MovieList } from "./components/MovieList.js";

function App() {
  const { loading, error, data, fetchData } = useApiRequest();

  function Loading({ loading }) {
    if (loading ? <p>Loading...</p> : null);
  }

  function ErrorHandle({ error }) {
    if (error ? <p>{error.message}</p> : null);
  }

  return (
    <div className="App">
      <Header onSearch={fetchData} />
      {loading && <Loading loading={loading} />}
      {error && <ErrorHandle error={error} />}
      {!loading && !error && <MovieList data={data} />}
    </div>
  );
}

export default App;
