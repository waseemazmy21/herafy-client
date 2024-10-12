import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_HERAFY_BASE_URL;

export const login = async (name, email) => {
  const rse = axios.post(`${BASE_URL}/auth/login`, {
    name,
    email,
  });
  return rse.data;
};
