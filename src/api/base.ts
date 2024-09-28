export const BASE_URL = "http://localhost:3010/";

export const getResponse = async (url: string, params: RequestInit) => {
  let response = await fetch(url, params);

  let json;
  if (response.ok) {
    json = await response.json();
    return json;
  } else {
    console.log("Ошибка HTTP: " + response.status);
  }
};
