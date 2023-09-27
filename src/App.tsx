import "./App.css";
import Details from "./components/details.tsx";
import Navbar from "./components/navbar.tsx";
import Status from "./components/status.tsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Status />
      <Details />
    </div>
  );
}

export default App;
