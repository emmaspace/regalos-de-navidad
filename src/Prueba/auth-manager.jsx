const auth = async (action, email, password) => {
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
  try {
    const userInfo = await (await fetch(action === "login" ? login : signup, options)).json();
    console.log(userInfo)
    return userInfo;
  }
  catch {
    console.log("no jaló")
    return "Pos chale"
  }
};

export default auth;
