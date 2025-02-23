"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import jwt from "jsonwebtoken";
import { parseCookies } from "nookies";
import { obterToken } from "./actions";
import { Box, Flex, Spinner } from "@chakra-ui/react";

export interface UserSession {
  sub: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

interface AuthContextType {
  user: UserSession | null;
}

const AuthContext = createContext<AuthContextType>({
  user: {
    email: "teste",
    exp: 0,
    iat: 0,
    role: "",
    sub: "",
  },
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = await obterToken();

        if (token) {
          const decodedUser = jwt.decode(token.value) as UserSession;
          setUser(decodedUser);
        }
      } catch (error) {
        console.error("Error getting token or decoding it", error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? (
        <Flex alignItems="center" justifyContent="center" height="100vh">
          <Spinner size={{ base: "lg" }} />
        </Flex>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);
