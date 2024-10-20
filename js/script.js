const method = { method: "GET" };
const url = "https://jsonplaceholder.typicode.com";
const usersResource = "/posts";

async function handleResponse(res) {
  const json = await res.json();

  class User {
    constructor(userId, id, title, body) {
      this.userId = userId;
      this.id = id;
      this.title = title;
      this.body = body;
    }
  }

  const user = new User(json.userId, json.id, json.title, json.body);

  return user;
}

function insertHTML(user) {
  document.querySelector("#text").innerHTML = `
    <p>UserId: ${user.userId}</p>
    <p>Id: ${user.id}</p>
    <p>Título: ${user.title}</p>
    <p>Conteúdo: ${user.body}</p>
`
}

function run() {
  let randomId = `/${
    Math.floor(Math.random() * 100 + 1) // +1 to take out the 0
  }`;

  fetch(url + usersResource + randomId, method)
    .then(handleResponse)
    .then(insertHTML);
}

document.querySelector("#button").addEventListener("click", () => {
  run();
});
