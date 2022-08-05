import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {addCart,getCartTotal} from '../../Redux/SliceCart'
import { useDispatch,useSelector} from "react-redux";
export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: { products: data },
  };
};

const Products = ({ products }) => {
  const dispatch =useDispatch()
  const CartItems =useSelector((state) => state.cart.productsCart)
  useEffect(() => {
    dispatch(getCartTotal())
  },[CartItems])
  const HandlerProducts = products.map((item) => {
    return (
      <div className="col-md-4 col-lg-3" key={item.id}>
        <div className="card p-4 text-center">
        <Image src={item.image} className="card-img-top" alt={item.title} height={250} width={250} />          <div className="card-body">
            <h5 className="card-title">{item.title.substring(0, 12)}</h5>
            <p className="card-text fs-3">${item.price}</p>
            <Link href={`/Products/${item.id}`}>
              <a className="btn btn-primary m-2">Buy Now</a>
            </Link>
            <button className="btn btn-primary" onClick={() => dispatch(addCart(item))}>Add Cart</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="loading">
      <div className="container">
        <div className="row">{HandlerProducts}</div>
      </div>
    </div>
  );
};

export default Products;
