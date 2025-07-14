import { AuthContext } from "@/contexts";
import { useContext } from "react";

export default function useAuth() {
  const data = useContext(AuthContext);

  return data;
}
