// Components
import NavBar from "./components/Navbar";
import Routes from "./components/Routes";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Scritches</title>
      </Helmet>
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
