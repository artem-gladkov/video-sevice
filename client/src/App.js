import './App.scss';
import useRoutes from "./routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const routes = useRoutes()
  return (
    <div className="app">
      <Header/>
      <div className="container">
        <div className="app__body">
          <Navigation/>
          {routes}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
