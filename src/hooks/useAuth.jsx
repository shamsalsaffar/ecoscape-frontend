import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);

  // kasta error om hooken används någonstans utanför AuthProvider
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;

};


/* export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return {
    user: context.currentUser, // هذا مهم!
    login: context.login,
    logout: context.logout,
    register: context.register,
    checkAuthStatus: context.checkAuthStatus,
  };
}; */
