import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/product-detail/book">A book</Link>
        </li>
        <li>
          <Link to="/products/product-detail/carpet">A carpet</Link>
        </li>
        <li>
          <Link to="/products/product-detail/online-course">
            An online course
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
