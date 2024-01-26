import React, { useState, useEffect } from "react";
import Hero from "./Hero"
import { add } from "../Store/cartSlice";
import { useDispatch } from "react-redux";
const Product = ({category, changeCategory}) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = () => {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((json) => setProducts(json));
    };
    fetchProducts();
  }, [category]);

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
    <div className="bg-purple-200 w-full h-full">

    <Hero />


   {/* <div className="grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-5 gap-7 px-4 md:px-8 xl:px-14">
   <button className="border-2 border-purple-500 px-8  hover:bg-purple-500 rounded-md hover:text-white" onClick={()=>setProducts(products)}>All </button>
   <button className="border-2 border-purple-500 px-8 hover:bg-purple-500 rounded-md hover:text-white" onClick={()=>filterItems("men's clothing")}>Men's</button>
    <button className="border-2 border-purple-500 px-8 hover:bg-purple-500 rounded-md hover:text-white" onClick={()=>filterItems("women's clothing")}>Women's</button>
    <button className="border-2 border-purple-500 px-8 hover:bg-purple-500 rounded-md hover:text-white" onClick={()=>filterItems("jewelery")}>Jewellery </button>
    <button className="border-2 border-purple-500 px-8 hover:bg-purple-500 rounded-md hover:text-white" onClick={()=>filterItems("electronics")}>Electronics </button>
   
   </div> */}
      <button onClick={() => changeCategory('electronics')}>Electronics</button>
      <button onClick={() => changeCategory("women's clothing")}>Men</button>
      <button onClick={() => changeCategory("men's clothing")}>Women</button>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:p-16 p-6">




        {products.map((product) => {
          return (
            <>
              <div className="">
                <div className="bg-white p-10 text-center rounded-3xl shadow-md w-full h-full">
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-72 mb-4"
                  />
                  <p>{product.title}</p>
                  <p className="my-2">{product.category}</p>
                  <p>${product.price}
                  &nbsp;
                  <span className="line-through text-red-400"> ${product.price*2}  </span>
                  </p>

                  <div className="flex justify-center items-center">

                  <button
                    className="bg-purple-500 p-2 rounded-xl my-4 flex justify-center items-center"
                    onClick={() => handleAdd(product)}
                  >
                    Add to bag
                  </button>

                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div></div>
    </div>
  );
};

export default Product;