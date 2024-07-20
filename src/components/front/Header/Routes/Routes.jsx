import React from "react";
import Products from "../../Products/Products";
import Signup from "../../Signup/Signup";
import Cart from "../../Cart/Cart";
import { Route, Routes } from "react-router-dom";

const AppRoutes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartclearance,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartclearance={handleCartclearance}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
