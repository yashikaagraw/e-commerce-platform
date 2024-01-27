import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="wrapper">
      <nav>
        <div className="logo">
          <h1 style={{ color: "#eb6d27" }}>
            <Link to={"/"} style={{ color: "#eb6d27", textDecoration: "none" }}>
              jello
            </Link>
          </h1>
        </div>
        <div className="cart">
          <Link
            to={"/cart"}
            style={{
              textDecoration: "none",
              display: "flex",
              gap: 15,
              alignItems: "center",
            }}
          >
            <div className="cartIcon">
              <FaCartShopping color="#EB6D27" size={40} />
              <span id="cartItemCountNav">{items.cartItems.length}</span>
            </div>
            <p>Cart</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
