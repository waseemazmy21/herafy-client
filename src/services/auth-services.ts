import {
  LoginCredentials,
  ClientRegistrationData,
  CraftsmanRegistrationData,
} from "@/types/auth";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_HERAFY_BASE_URL + "/api/auth";

export const login = async (loginCredentials: LoginCredentials) => {
  const rse = await axios.post(`${BASE_URL}/login`, loginCredentials, {
    withCredentials: true,
  });
  return rse;
};

export const registerClient = async (
  clientRegistrationData: ClientRegistrationData,
) => {
  const res = await axios.post(
    `${BASE_URL}/register-client`,
    clientRegistrationData,
    { withCredentials: true },
  );

  return res;
};
