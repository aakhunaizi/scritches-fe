import { Helmet, HelmetProvider } from "react-helmet-async";

// Components
import NavBar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Scritches</title>
      </Helmet>
      <NavBar />
      <Routes />
    </HelmetProvider>
  );
}

export default App;
