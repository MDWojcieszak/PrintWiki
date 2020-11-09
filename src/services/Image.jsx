export async function PostImage(requestData) {
  let ApiUrl = "http://localhost:3000/upload";
  const response = await fetch(ApiUrl, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: requestData,
  });
  return response.json();
}

export async function DeleteImage(imagePath) {
  let ApiUrl = "http://localhost:3000/upload";
  const response = await fetch(ApiUrl + "/" + imagePath, {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.json();
}
