import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        {/* if without Switch, all the matched routes will be rendered at the same time. For example, Products and ProductDetail will be rendered together when accessing product-detail Page */}
        {/* With switch, only the first matching found will be rendered */}
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          {/* exact prop means that the component will only be rendered for exact match */}
          <Route path="/products" exact>
            <Products />
          </Route>
          {/* with path parameter productId, with : means placeholder */}
          <Route path="/products/product-detail/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
