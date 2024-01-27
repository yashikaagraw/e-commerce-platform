import { useSelector, useDispatch } from "react-redux";
import { remove, increase, decrease } from "../store/cartSlice";
import emptyCart from "../assets/empty-cart.svg";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (product) => {
    dispatch(remove(product));
    console.log(product);
  };

  const handleIncrease = (product) => {
    dispatch(increase(product));
    console.log(product);
  };
  const handledecrease = (product) => {
    dispatch(decrease(product));
    console.log(product);
  };

  console.log(products.cartItems);
  return (
    <div className="wrapper">
      {products.cartItems.length === 0 ? (
        <div className="cartContainer">
          <p style={{ fontSize: "31px", fontWeight: "bold" }}>
            YOUR CART IS EMPTY{" "}
          </p>
          <img src={emptyCart} style={{ width: "50%" }} alt="" />
        </div>
      ) : (
        <div className="cartContainer">
          <p style={{ color: "#eb6d27" }}>SELECTED ITEMS</p>
          <p style={{ fontSize: "31px", fontWeight: "bold" }}>CART ITEMS</p>

          <div className="cartItemRow">
            {products.cartItems.map((item) => {
              return (
                <div className="cartItemContainer" key={item.id}>
                  <div className="cartItem">
                    <div className="cartItemImg">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="cartItemDetails">
                      <p style={{ fontSize: "18px" }}> {item.title} </p>
                      <p style={{ fontSize: "12px" }}> {item.category} </p>
                      <p style={{ fontSize: "16px", color: "#eb6d27" }}>
                        {" "}
                        ${item.price * item.cartQuantity}{" "}
                      </p>
                    </div>
                    <div className="cartCounter">
                      <button onClick={() => handleIncrease(item)}>+</button>
                      {item.cartQuantity}
                      <button onClick={() => handledecrease(item)}>-</button>
                    </div>
                  </div>
                  <button id="removeItem" onClick={() => handleRemove(item)}>
                    X
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
