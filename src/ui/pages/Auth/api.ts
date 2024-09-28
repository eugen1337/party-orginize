import { BASE_URL, getResponse } from "api/base";

export const queryLogin = async (login: string, password: string) => {
  // const url = `${BASE_URL}login?${login}&${password}`;
  // const res = await getResponse(url, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  let res = "";

  if (login === password) res = "login";
  return res;
};
