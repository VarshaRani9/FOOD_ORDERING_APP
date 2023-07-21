import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "DUMMY NAME",
    email: "dummy@gmail.com",
  },
});

export default UserContext;
