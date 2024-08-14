import React, { useEffect, useState } from "react";
import "./products.scss";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux";

function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };
  const ShowProduct = () => {
    return (
      <div className="container-products">
        <div className="container_id-product">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product_id-text">
          <h4>{product.category}</h4>
          <h1>{product.title}</h1>
          <p>
            Rating {product.rating && product.rating.rate}
            <FaStar className="star" />
          </p>
          <h3>${product.price}</h3>
          <p>{product.description}</p>

          <Link className="btn" onClick={() => addProduct(product)}>
            Add To Cart
          </Link>
          <Link className="btn btn-2" to={"/cart"}>
            Go To Cart
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="rows">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
}

export default Products;
