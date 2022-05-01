import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../features/user/userSlice";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import CrwnLogo from "../../assets/crown.svg?component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import "./navigation.styles.scss";

const Navigation = () => {
  const user = useSelector((state) => state.user.user);
  const isCartOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {!!user ? (
            <span onClick={() => dispatch(logOut())} className="nav-link">
              LOG OUT
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
