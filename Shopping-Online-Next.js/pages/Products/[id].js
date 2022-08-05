import React from "react";
import Image from "next/image";
import Link from "next/link";
export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await res.json();
  return { props: { product: data } };
};

const product = ({ product }) => {

  return (
    <div className="container loading text-center mt-2">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-4">
          <Image
            src={product.image}
            alt={product.title}
            height={350}
            width={350}
          />
        </div>
        <div className="col-lg-6">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h1>${product.price}</h1>
        </div>
        <div className="col-lg-2">
          <button className="btn btn-outline-primary m-3 ">Add Cart</button>
          <Link href='/Cart/Cart'>
          <button className="btn btn-outline-primary m-3">Go Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default product;
