const mainBtn = document.getElementById("mainBtn");
const result = document.getElementById("result");
const img = document.getElementById("img");

mainBtn.addEventListener("click", function() {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://api.chucknorris.io/jokes/random
`,
    true
  );
  request.onload = function() {
    if (request.status === 200) {
      let response = JSON.parse(request.responseText);
      result.textContent = response.value;
      img.src = response.icon_url;
    }
  };
  request.send();
});
