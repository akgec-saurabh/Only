import { setSessionStatus } from "@/utils/session";
import { createContext, useContext, useEffect, useState } from "react";

interface UserProps {
  email: string;
  name: { firstName: ""; lastName: "" };
  token: string;
}

interface AuthContextValueProps {
  // todo : i think i need to add more to user with jwt
  user: UserProps;
  isAuthOpen: boolean;
  openAuth: () => void;
  closeAuth: () => void;
  login: (userData: UserProps) => void;
  logout: () => void;
}

export const useAuth = () => {
  const { user } = useContext(AuthContext);

  return { user };
};

const AuthContext = createContext<AuthContextValueProps>({
  user: { email: "", name: { firstName: "", lastName: "" }, token: "" },
  isAuthOpen: false,
  openAuth: () => {},
  closeAuth: () => {},
  login: (userData: UserProps) => {},
  logout: () => {},
});

export default AuthContext;

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProps>(() => {
    // const userData =
    // typeof window !== "undefined" ? localStorage.getItem("userData") : null;
    const userData = window.localStorage.getItem("userData");
    if (userData) {
      const data = JSON.parse(userData);
      return {
        email: data.email,
        token: data.token,
        name: { firstName: data.name.firstName, lastName: data.name.lastName },
      };
    } else
      return {
        email: "",
        name: { firstName: "", lastName: "" },
        token: "",
      };
  });

  if (user.token) {
    setSessionStatus(true);
  } else {
    setSessionStatus(false);
  }

  // useEffect(() => {
  //   const userData = localStorage.getItem("userData");
  //   if (userData) {
  //     const data = JSON.parse(userData);
  //     setUser({
  //       email: data.email,
  //       token: data.token,
  //       name: { firstName: data.name.firstName, lastName: data.name.lastName },
  //     });
  //   }
  // }, []);

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

  const logoutHandler = () => {
    localStorage.removeItem("userData");
    setUser({ email: "", name: { firstName: "", lastName: "" }, token: "" });
  };

  const contextValue: AuthContextValueProps = {
    user,
    isAuthOpen,
    openAuth: openAuthHandler,
    closeAuth: closeAuthHandler,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
