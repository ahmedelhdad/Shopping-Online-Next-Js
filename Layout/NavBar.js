import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux"
import {useRouter} from 'next/router'
const NavBar = () => {
  const state = useSelector((state) => state.cart.counter)
  const roter = useRouter()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand fs-3">Oline Shopping</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className={`nav-item ${roter.pathname === "/Products/Products" ? "active":''}`}>
              <Link href="/Products/Products">
                <a className="nav-link fs-5" aria-current="page">
                  Products
                </a>
              </Link>
            </li>
            <li className={`nav-item ${roter.pathname === "/Products/Men" ? "active":''}`}>
              <Link href="/Products/Men">
                <a className="nav-link fs-5" aria-current="page">
                  Men s clothing
                </a>
              </Link>
            </li>
            <li className={`nav-item ${roter.pathname === "/Products/Women" ? "active":''}`}>
              <Link href="/Products/Women">
                <a className="nav-link fs-5" aria-current="page">
                Women s clothing
                </a>
              </Link>
            </li>
            <li className={`nav-item ${roter.pathname === "/Products/Jewelery" ? "active":''}`}>
              <Link href="/Products/Jewelery">
                <a className="nav-link fs-5" aria-current="page">
                Jewelery
                </a>
              </Link>
            </li>
            <li className={`nav-item ${roter.pathname === "/Products/Electronic" ? "active":''}`}>
              <Link href="/Products/Electronic">
                <a className="nav-link fs-5" aria-current="page">
                Electronic
                </a>
              </Link>
            </li>
          </ul>
          <form className="d-flex gap-2">
            <button className="btn btn-outline-success px-4" type="submit">
              <i className="fa fa-sign-in me-1"></i>
              Login
            </button>
            <Link href='/Cart/Cart'>
            <button className="btn btn-outline-success px-4" type="submit">
            <i className="fa fa-cart-plus fs-4" aria-hidden="true"></i>
            <span className="fs-4">({state})</span>
          </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
