import { useState, useContext } from "react";
import Logo from "../assets/img/logo.jpg";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const loggedInUser = () =>{
  return true;
}

export const Title = () => (
  <h1 id="title">
    <a href="/">
      <img data-testid="logo"
        className="h-16 px-2 pt-4" 
        src={Logo}
        alt="The Food Village"
      />
    </a>
  </h1>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {user} = useContext(UserContext);

  const cartItems = useSelector(store=>store.cart.items);

  return (
    <div className="flex justify-between shadow-lg bg-gray-300">
      <Title />
      <div className="flex">
        <ul className="flex py-8">
        <Link to="/">
          <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
          <li className="px-2">About Us</li>
          </Link>
          <Link to="/contact">
          <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
          <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
          <li className="px-2" data-testid="cart">Cart-{cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      <span className="p-10 font-bold text-red-700">{user.name}</span>
      {
        (isLoggedIn)?<button className="btn" onClick={()=>setIsLoggedIn(false)}>Login</button>:
        <button className="btn" onClick={()=>setIsLoggedIn(true)}>Logout</button>
      }
    </div>
  );
};
export default Header;