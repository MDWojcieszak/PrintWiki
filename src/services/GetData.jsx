export async function GetData(card, token) {
  let ApiUrl = "http://localhost:3000" + card;
  const response = await fetch(ApiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + token,
    },
  });
  return response.json();
}
