import { useParams } from "react-router";

const ProductDetail = () => {
  //useParams hook allows us to retrieve the path parameter
  const params = useParams();
  //productId is the var we named the path param
  console.log(params.productId);
  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
