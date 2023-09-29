import "./App.scss";
import "./fonts/Cairo-Regular.ttf";
import "./fonts/Cairo-Bold.ttf";
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
