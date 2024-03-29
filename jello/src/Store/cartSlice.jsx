import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  cartItems: localStorage.getItem("CartItems")
    ? JSON.parse(localStorage.getItem("CartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add items
    add(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `Increase "${state.cartItems[itemIndex].title}" cart quantity`,

          {
            position: "bottom-left",
          }
        );
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`Added "${temp.title}" to cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("CartItems", JSON.stringify(state.cartItems));
    },

    // remove items
    remove(state, action) {
      const itemIndex = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = itemIndex;
      toast.error(`Removed "${action.payload.title}" to cart`, {
        position: "bottom-left",
      });
      localStorage.setItem("CartItems", JSON.stringify(state.cartItems));
    },

    // increase Items
    increase(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity >= 1) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`Increase  "${action.payload.title}" to cart`, {
          position: "bottom-left",
        });
        localStorage.setItem("CartItems", JSON.stringify(state.cartItems));
      }
    },

    // decrease items
    decrease(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity === 1) {
        const itemIndex = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = itemIndex;
        toast.error(`Removed "${action.payload.title}" to cart`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.error(`Decrease  "${action.payload.title}" to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("CartItems", JSON.stringify(state.cartItems));
    },

    // clear cart

    clearCart(state) {
      state.cartItems = [];
      toast.error(` "Clear Cart"`, {
        position: "bottom-left",
      });

      localStorage.setItem("CartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { add, remove, increase, decrease, clearCart } = cartSlice.actions;
export default cartSlice.reducer;