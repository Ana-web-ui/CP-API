import fetch from "node-fetch";

const method = { method: "GET" };
const url = "https://jsonplaceholder.typicode.com";
const usersResource = "/posts";
const id = "/2"

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

function handleData(user) {
  console.log(user);
}

function run() {
  fetch(url + usersResource + id, method)
    .then(handleResponse)
    .then(handleData);
}

run();
