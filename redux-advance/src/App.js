import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const showUI = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("http://localhost:8080/post", {
      method: "POST",
      body: JSON.stringify(cart),
    });
    console.log(cart);
  }, [cart]);

  return (
    <Layout>
      {showUI && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
