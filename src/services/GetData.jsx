export async function GetData(card) {
  let ApiUrl = "http://localhost:3000"+card;
  const response = await fetch(ApiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.json();
}
