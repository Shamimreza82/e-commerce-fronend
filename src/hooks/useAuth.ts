import http from "@/lib/http";
import { useQuery } from "@tanstack/react-query";


const fetchUser = async () => {
  const res = await http.get("/auth/profile"); // this endpoint checks the cookie
  return res.data;
};

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: fetchUser,
    retry: false,        // don’t retry on 401
    refetchOnWindowFocus: false,
  });
};
