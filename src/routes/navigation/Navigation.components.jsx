import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../features/user/userSlice";

import CrwnLogo from "../../assets/crown.svg?component";
import "./navigation.styles.scss";

const Navigation = () => {
  const user = useSelector((state) => state.user.user);
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
