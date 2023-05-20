import { toast } from "react-hot-toast";
import { BranchProduct } from "../../components/sections/Branch/BranchProducts/BranchProducts";
import {
  ADD_TO_CART,
  CHANGE_PRICE,
  CHANGE_QUANTITY,
} from "../../constants/reduxActionsNames/cart";
import { CartProduct } from "../../types/Product/ProductTypes";
import { ReduxAction } from "../redux";

const cartReducer = (
  state = {
    cart: [],
  },
  action: ReduxAction
) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = state.cart.find(
        (pd: CartProduct) => pd._id === action.payload._id
      );
      if (product) {
        toast.error("Product Already Available At Cart");
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }

    case CHANGE_QUANTITY: {
      return {
        ...state,
        cart: state.cart.map((pd: CartProduct) =>
          pd._id === action.payload._id ? action.payload : pd
        ),
      };
    }

    case CHANGE_PRICE: {
      return {
        ...state,
        cart: state.cart.map((pd: CartProduct) =>
          pd._id === action.payload._id ? action.payload : pd
        ),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
