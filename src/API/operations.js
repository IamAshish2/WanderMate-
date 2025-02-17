
export const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("expiresIn");
    if (!localStorage.getItem("token")) {
      return true;
    }
  };