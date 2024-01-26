import React from "react";
import productImg from "../assets/Offers/productImg.png";
import { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Featured = () => {
  let productList = [
    {
      id: 1,
      img: productImg,
      name: "Co Ord Sets",
      offer: "Get 50% on Winter sets",
      price: 1000,
    },
    {
      id: 1,
      img: productImg,
      name: "Co Ord Sets",
      offer: "Get 50% on Winter sets",
      price: 1000,
    },
    {
      id: 1,
      img: productImg,
      name: "Co Ord Sets",
      offer: "Get 50% on Winter sets",
      price: 1000,
    },
    {
      id: 1,
      img: productImg,
      name: "Co Ord Sets",
      offer: "Get 50% on Winter sets",
      price: 1000,
    },
  ];

  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    console.log(product);
  };

  const filterItems = (cateItem)=>{
    const updatedItems = products.filter((curItem)=>{
      return curItem.category === cateItem
    })
    setProducts(updatedItems)
  } 

  return (
    <div className="wrapper">
      <div className="offerSection">
        <div className="categoryBox">
          <div className="Category_leftChild">
            <p>BEST OFFERS</p>
            <p>Featured</p>
          </div>
          {/* <div className="category">
          <button className="border-2 border-purple-500 px-8 hover:bg-purple-500 rounded-md hover:text-white" onClick={()=>filterItems("women's clothing")}>Women's</button>
          <button className="border-2 border-purple-500 px-8 hover:bg-purple-500 rounded-md hover:text-white" onClick={()=>filterItems("men's clothing")}>Men's</button>
          <button className="border-2 border-purple-500 px-8 hover:bg-purple-500 rounded-md hover:text-white" onClick={()=>filterItems("electronics")}>Electronics </button>
          </div> */}
          <div className="category">
          <button className onClick={()=>filterItems("women's clothing")}>Women's</button>
          <button className onClick={()=>filterItems("men's clothing")}>Men's</button>
          <button className onClick={()=>filterItems("electronics")}>Electronics </button>
          </div>
        </div>
        <div className="CateoryProducts">
          {products.map((item) => {
            return (
              <div key={item.id} className="product">
                <img src={item.img} alt="" className="productImg" />
                <p style={{ fontWeight: "bolder" }}>{item.name}</p>
                <p>{item.offer}</p>
                <div className="pricebox">
                  <p id="productPrice">₹ {item.price}</p>
                  <button
                    className="bg-purple-500 p-2 rounded-xl my-4 flex justify-center items-center"
                    onClick={() => handleAdd(product)}
                  >
                    Add to Cart
                  </button>                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;