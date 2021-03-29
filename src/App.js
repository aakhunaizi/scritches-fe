import { Helmet } from "react-helmet";

// Components
import NavBar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
  return (
    <>
      <Helmet>
        <title>Scritches</title>
      </Helmet>
      <NavBar />
      <Routes />
    </>
  );
}

export default App;
