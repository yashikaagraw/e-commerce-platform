import "./App.css";
import Navbar from "./Component/Navbar";
import Featured from "./Component/Featured";
import Mybag from "./Component/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./Component/Hero";
import Explore from "./Component/Explore";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <ToastContainer />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Featured />
                  <Explore />
                </>
              }
            />
            <Route path="/cart" element={<Mybag />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
