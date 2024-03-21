import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const useUserContext = () => {
  const context = useContext(UserContext);
  if(!context) {
    throw new Error("User Context must be use in a user provider");
  }
  return context;
}

export default useUserContext;