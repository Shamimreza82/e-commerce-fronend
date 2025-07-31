/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services-api/authServices";

type DecodedUser = {
  userId: string;
  email: string;
  role: string;
};



export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => await getCurrentUser() ,
    // staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
