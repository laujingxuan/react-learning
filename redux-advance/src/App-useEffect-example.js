import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

//set outside the App function to ensure that the variable is not reinitialize during rerendering
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showUI = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      const response = await fetch("http://localhost:8080/post", {
        method: "POST",
        body: JSON.stringify(cart),
      });
      console.log(cart);
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Send cart data successfully!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    });

    // const responseData = await response.json()
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showUI && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
