import { LoginCredentials } from "@/types/auth";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_HERAFY_BASE_URL;

export const login = async (loginCredentials: LoginCredentials) => {
  const rse = await axios.post(`${BASE_URL}/api/auth/login`, loginCredentials, {
    withCredentials: true,
  });
  return rse;
};
