// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  //Link component allows us to switch to another page (change url) without refreshing the page (fake navigation)!
  //as if <a href> is used, we can also navigate to another page but refresh will occur due to request being sent! Not ideal since not single page application anymore
  //NavLink is similar to Link component but provide extra feature like allowing us to set activeClassName for css if class is active
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
            {/* <Link to="/welcome">Welcome</Link> */}
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
            {/* <Link to="/products">Products</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
