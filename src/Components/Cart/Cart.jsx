import React from "react";
import "./cart.scss";
import { useNavigate } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const { cartCount } = useSelector((state) => state.cartItem);

  return (
    <div className="container cart">
      <div>
        <div className="cart-category">
          <ul>
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>
        </div>
        <div className="gamepad">
          {cartCount.map((item) => (
            <div className="gamepad-container" key={item.id}>
              <section className="game-img">
                {/* <button>
                <MdDeleteSweep />
              </button> */}
                <img src={item.image} alt="img" />
                <h1>{item.title}</h1>
              </section>
              <section className="price">
                <h1>${item.price}</h1>
              </section>
              <section className="counter">
                <h1>qty</h1>
                <div className="count-cart">
                  <RiArrowDropUpLine className="lineDown" />
                  <RiArrowDropDownLine className="lineDown" />
                </div>
              </section>
              <section className="subtotal">
                <h1>$151</h1>
              </section>
            </div>
          ))}
        </div>
        <div className="retUp-container">
          <button className="return-btn" onClick={() => navigate("/")}>
            Return To Shop
          </button>
          <button className="update-btn">Update Cart</button>
        </div>
        <div className="bottom-container">
          <div className="coupon-item">
            <input type="text" placeholder="Coupon-Code" />
            <button>Apply Coupon</button>
          </div>
          <div className="cart-total">
            <h1 className="totals">Cart Total</h1>
            <span>
              <h1>Subtotal:</h1> <h1>$1750</h1>
            </span>
            <hr />
            <span>
              <h1>Shipping:</h1> <h1>Free</h1>
            </span>
            <hr />
            <span>
              <h1>Total:</h1> <h1>$1750</h1>
            </span>
            <button>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
