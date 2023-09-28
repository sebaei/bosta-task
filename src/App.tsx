import "./App.scss";
import Details from "./components/details.tsx";
import Navbar from "./components/navbar.tsx";
import Status from "./components/status.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Status />
        <Details />
      </div>
    </>
  );
}

export default App;
