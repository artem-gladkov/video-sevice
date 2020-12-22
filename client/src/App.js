import './App.css';
import useRoutes from "./routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const routes = useRoutes()
  return (
    <div className="App">
      <div className="container">
        <Header/>
        {routes}
        <Footer/>
      </div>

    </div>
  );
}

export default App;
