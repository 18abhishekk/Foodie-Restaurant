import { LOGO_URL } from "./utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="header flex justify-between px-10 shadow-lg">
      <div className="logo-container">
        <img className="logo w-56" src={LOGO_URL}></img>
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-2xl">
            Online Status:{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 text-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-2xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-2xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-2xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-2xl font-bold">
            <Link to="/cart">Cart-{cart.length}</Link>
          </li>
          <button
            className="login px-4 bg-green-400 rounded-lg"
            onClick={() => {
              if (btnName === "Login") {
                setBtnName("Logout");
              } else {
                setBtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
          {btnName === "Logout" ? (
            <li className="px-4 text-2xl font-bold">{loggedInUser}</li>
          ) : (
            <li></li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
