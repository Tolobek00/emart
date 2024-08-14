import React, { useEffect, useState, useRef } from "react";
import "./product.scss";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { addCart } from "../../redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function addToCart(product) {
    dispatch(addCart(product));
    toast.success("succesfilly");
  }
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
        console.log(response);
      }
    };

    getProducts();

    return () => {
      componentMounted = true;
    };
  }, []);

  const Loading = () => {
    return (
      <div className="product-container">
        <div className="products">
          <Skeleton />
        </div>
        <div className="products">
          <Skeleton />
        </div>
        <div className="products">
          <Skeleton />
        </div>
        <div className="products">
          <Skeleton />
        </div>
      </div>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons">
          <button
            className="btn btn-outline-dark"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        <div className="product-container">
          {filter.map((product) => {
            return (
              <div className="products" key={product.id}>
                <div className="img-div">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-text">
                  <h5>{product.title.substring(0, 12)}...</h5>
                  <p>${product.price}</p>
                  <div className="btns">
                    <Link to={`/product/${product.id}`} className="buy-btn">
                      Buy Now
                    </Link>
                    <Link
                      // to={`/product/${product.id}`}
                      className="buy-btn"
                      onClick={() => addToCart(product)}
                    >
                      add to cart
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="products">
      <div className="containers">
        <div className="rows">
          <div className="col-12">
            <h1>Latest Products</h1>
          </div>
        </div>
        <div className="rows">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </div>
  );
};

export default Product;
