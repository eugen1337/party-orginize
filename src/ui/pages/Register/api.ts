import { BASE_URL, getResponse } from "api/base";
import { UserRegisterData } from "./types";

export const queryRegister = async (data: UserRegisterData) => {
  const url = `${BASE_URL}login`;
  const res = await getResponse(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res;
};
