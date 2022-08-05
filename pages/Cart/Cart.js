import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dalet, getCartTotal, increase, decrease,clearAll } from "../../Redux/SliceCart";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const CartItems = useSelector((state) => state.cart.productsCart);
  const Total = useSelector((state) => state.cart.TotalPrice);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [CartItems]);

  const Handler = CartItems.map((item) => {
    return (
      <div className="col-12 my-5" key={item.id}>
        <div className="row align-items-center justify-content-center">
          <div className=" col-md-12 col-lg-4 align-items-center">
            <Image src={item.image} alt={item.title} width={250} height={250} />
          </div>
          <div className=" col-md-6  col-lg-6 ">
            <h5>{item.title}</h5>
            <p>{item.description}</p>
            <h4>Price: ${item.price}</h4>
            <div className="control-cart btn btn-outline-primary my-3">
              <span onClick={() => dispatch(decrease(item))}>-</span>
              <span>{item.amount}</span>

              <span onClick={() => dispatch(increase(item))}>+</span>
            </div>
            <h4>Total: ${item.price * item.amount}</h4>
          </div>
          <div className=" col-md-6 col-lg-2">
            <button
              className="btn btn-outline-primary"
              onClick={() => dispatch(Dalet(item))}
            >
              Dalet
            </button>
          </div>
        </div>
      </div>
    );
  });
  const Box = () => {
    if (CartItems.length >= 1) {
      return (
        <Fragment>
          <div className="row ">{Handler}</div>
          <hr />
          <div className="d-flex justify-content-around">
            <button className="btn btn-outline-primary" onClick={() => dispatch(clearAll())}>Clear All</button>
            <h1>Total:${Total}</h1>
          </div>
        </Fragment>
      );
    } else {
      setTimeout(() => {
        router.push(`/Products/Products`);
      }, 4000);
      return (
        <div className="shopping">
          <Link href="/Products/Products">Go Shopping</Link>
        </div>
      );
    }
  };
  return <div className="container py-5 my-5">{Box()}</div>;
};

export default Cart;
