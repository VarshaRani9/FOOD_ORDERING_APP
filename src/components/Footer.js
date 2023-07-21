import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const {user} = useContext(UserContext);
    return (
      <div className="flex fixed inset-x-0 bottom-0 justify-between shadow-lg bg-gray-300">
      <span className="p-5 font-bold text-black-300">This site is developed by {user.name}</span>
      <span className="p-5 font-bold text-black-300">{user.email}</span>
      </div>
    );
  };
export default Footer;