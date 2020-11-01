export async function PostData(type, requestData) {
  let ApiUrl = "http://localhost:3000";
  const response = await fetch(ApiUrl + type, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(requestData),
  });
  return response.json();
}
