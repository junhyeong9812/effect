import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const xAxis = keyframes`
  100% {
    transform: translateX(calc(50vw - 105px));
  }
`;

const yAxis = keyframes`
  100% {
    transform: translateY(calc(-50vh + 75px));
  }
`;

const shakeCart = keyframes`
  25% {
    transform: translateX(6px)
  }
  50% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const CartButton = styled.button`
  padding: 10px 30px;
  border: none;
  background: #484d70;
  position: relative;
  border-radius: 5px;

  .cart-item {
    position: absolute;
    height: 24px;
    width: 24px;
    top: -10px;
    right: -10px;
    display: none;

    &:before {
      content: "1";
      display: block;
      line-height: 24px;
      height: 24px;
      width: 24px;
      background: #2bd156;
      color: white;
      border-radius: 20px;
      text-align: center;
    }
  }

  &.sendtocart .cart-item {
    display: block;
    animation: ${xAxis} 1s forwards cubic-bezier(1, 0.44, 0.84, 0.165);

    &:before {
      animation: ${yAxis} 1s alternate forwards
        cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }
`;

const Cart = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: #292d48;
  display: grid;
  place-items: center;
  border-radius: 5px;

  i {
    font-size: 25px;
    color: white;
  }

  &:before {
    content: "${(props) => props.totalItems}";
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    top: -12px;
    right: -12px;
    background: #2bd156;
    line-height: 24px;
    padding: 0 5px;
    height: 24px;
    min-width: 24px;
    color: white;
    text-align: center;
    border-radius: 24px;
  }

  &.shake {
    animation: ${shakeCart} 0.4s ease-in-out forwards;
  }
`;

const ShoppingCart = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleAddToCart = () => {
    setAnimate(true);
    setTimeout(() => {
      setTotalItems((prev) => prev + 1);
      setAnimate(false);
    }, 1000);
  };

  return (
    <>
      <Cart totalItems={totalItems} className={animate ? "shake" : ""}>
        <i>🛒</i>
      </Cart>
      <PageWrapper>
        <CartButton
          onClick={handleAddToCart}
          className={animate ? "sendtocart" : ""}
        >
          Add to Cart
          <span className="cart-item"></span>
        </CartButton>
      </PageWrapper>
    </>
  );
};

export default ShoppingCart;
