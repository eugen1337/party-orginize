import { BASE_URL, getResponse } from "api/base";

export const queryLogin = async (login: string, password: string) => {
  const url = `${BASE_URL}/login`;
  const res = await getResponse(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      password,
    }),
  });
  return res
};
