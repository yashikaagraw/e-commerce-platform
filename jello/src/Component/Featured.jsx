import { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa6";

const Featured = () => {
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("women's clothing");

  useEffect(() => {
    const fetchProducts = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setAllProducts(json);
          setFilteredProducts(
            json.filter((item) => item.category === selectedCategory)
          );
        });
    };
    fetchProducts();
  }, [selectedCategory]);

  const handleAdd = (product) => {
    dispatch(add(product));
    console.log(product);
  };

  const filterItems = (cateItem) => {
    setSelectedCategory(cateItem);
  };

  return (
    <div className="wrapper">
      <div className="offerSection">
        <div className="categoryBox">
          <div className="Category_leftChild">
            <p>BEST OFFERS</p>
            <p>Featured</p>
          </div>
          <div className="category">
            <button
              className={`categoryBtn ${
                selectedCategory === "women's clothing" ? "active" : ""
              }`}
              style={{
                background:
                  selectedCategory === "women's clothing" ? "#eb6d27" : "",
                color: selectedCategory === "women's clothing" ? "white" : "",
              }}
              onClick={() => filterItems("women's clothing")}
            >
              Women
            </button>
            <button
              className={`categoryBtn ${
                selectedCategory === "men's clothing" ? "active" : ""
              }`}
              style={{
                background:
                  selectedCategory === "men's clothing" ? "#eb6d27" : "",
                color: selectedCategory === "men's clothing" ? "white" : "",
              }}
              onClick={() => filterItems("men's clothing")}
            >
              Men
            </button>
            <button
              className={`categoryBtn ${
                selectedCategory === "electronics" ? "active" : ""
              }`}
              style={{
                background: selectedCategory === "electronics" ? "#eb6d27" : "",
                color: selectedCategory === "electronics" ? "white" : "",
              }}
              onClick={() => filterItems("electronics")}
            >
              Electronics
            </button>
          </div>
        </div>
        <div className="CateoryProducts">
          {filteredProducts.slice(0, 4).map((item) => {
            return (
              <div key={item.id} className="product">
                <img src={item.image} alt="" className="productImg" />
                <p style={{ fontWeight: "bolder" }}>{item.title}</p>
                <div className="productRating">
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    Ratings : {item.rating.rate} <FaStar color="gold" />
                  </p>
                  <p>Count : {item.rating.count}</p>
                </div>
                <div className="pricebox">
                  <p id="productPrice">$ {item.price}</p>
                  <button id="addToCartBtn" onClick={() => handleAdd(item)}>
                    Add to Cart
                  </button>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
