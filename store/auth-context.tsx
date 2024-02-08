import { createContext, useEffect, useState } from "react";

interface UserProps {
  email: string;
  name: { firstName: ""; lastName: "" };
  token: string;
}

interface AuthContextValueProps {
  // todo : i think i need to add more to user with jwt
  user: UserProps;
  isAuthenticated: boolean;
  isAuthOpen: boolean;
  openAuth: () => void;
  closeAuth: () => void;
  login: (userData: UserProps) => void;
}

const AuthContext = createContext<AuthContextValueProps>({
  user: { email: "", name: { firstName: "", lastName: "" }, token: "" },
  isAuthenticated: false,
  isAuthOpen: false,
  openAuth: () => {},
  closeAuth: () => {},
  login: (userData: UserProps) => {},
});

export default AuthContext;

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const userData =
    typeof window !== "undefined" ? localStorage.getItem("userData") : null;

  const [user, setUser] = useState<UserProps>({
    email: "",
    name: { firstName: "", lastName: "" },
    token: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const data = JSON.parse(userData);
      setUser({
        email: data.email,
        token: data.token,
        name: { firstName: data.name.firstName, lastName: data.name.lastName },
      });
    }
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);

  const openAuthHandler = () => {
    setIsAuthOpen(true);
  };

  const closeAuthHandler = () => {
    setIsAuthOpen(false);
  };

  const loginHandler = async (userData: UserProps) => {
    setUser({
      email: userData.email,
      name: {
        firstName: userData.name.firstName,
        lastName: userData.name.lastName,
      },
      token: userData.token,
    });

    localStorage.setItem(
      "userData",
      JSON.stringify({
        email: userData.email,
        token: userData.token,
        name: userData.name,
      }),
    );
  };

  const contextValue: AuthContextValueProps = {
    user,
    isAuthenticated,
    isAuthOpen,
    openAuth: openAuthHandler,
    closeAuth: closeAuthHandler,
    login: loginHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
