// import "./App.css";
// import Navbar from "./Component/Navbar";
// import Hero from "./Component/Hero";
// import Featured from "./Component/Featured";




// function App() {
  

//   return (
//     <>
//       <div>
//       <Navbar />
//       <Hero />
//       <Featured />
      
//       </div>
      
//     </>
//   )
// }

// export default App
import {useState, useEffect} from "react";
import Navbar from "./Component/Navbar";
import Featured from "./Component/Featured";
import Mybag from "./Component/Mybag";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./Component/ProductComponent";
import Hero from "./Component/Hero";
function App() {
  
    const [currentCategory, setCurrentCategory] = useState("women's clothing");
  
    const changeCategory = (newCategory) => {
      setCurrentCategory(newCategory);
      
    };


  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          
          <Navbar />
         
         

          <Routes>
            <Route path="/" element={<Product category= {currentCategory} changeCategory= {changeCategory}  />} />
            <Route path="/cart" element={<Mybag />} />
          </Routes>

        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
