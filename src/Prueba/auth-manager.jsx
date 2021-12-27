const auth = (action, email, password) => {
  const login = "http://localhost:3004/login";
  const signup = "http://localhost:3004/users";
  const controller = new AbortController();
  const options = {
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }),
    signal: controller.signal,
    method: "POST",
  };
  setTimeout(() => controller.abort(), 5000);
  return fetch(action === "login" ? login : signup, options)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default auth;
