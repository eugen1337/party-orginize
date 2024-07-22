export const BASE_URL = "http://localhost:3010/";

export const getResponse = async (url: string, params: RequestInit) => {
  let response = await fetch(url, params);

  let text;
  if (response.ok) {
    text = await response.text();
    return text;
  } else {
    console.log("Ошибка HTTP: " + response.status);
  }
};
