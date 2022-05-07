import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../features/user/userSlice";

import CartDropdown from "../../components/cart-dropdown/CartDropdown.component";
import CrwnLogo from "../../assets/crown.svg?component";
import CartIcon from "../../components/cart-icon/CartIcon.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const user = useSelector((state) => state.user.user);
  const isCartOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {!!user ? (
            <NavLink
              as="span"
              onClick={() => dispatch(logOut())}
              className="nav-link"
            >
              LOG OUT
            </NavLink>
          ) : (
            <NavLink to="/sign-in">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
