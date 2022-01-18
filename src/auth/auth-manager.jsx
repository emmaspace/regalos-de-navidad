import Cookies from "universal-cookie";

const cookies = new Cookies();

const auth = async (action, email, password, name) => {
  const login = "http://localhost:3004/login";
  const signup = "http://localhost:3004/users";
  const controller = new AbortController();
  const options = {
    headers: { "content-type": "application/json" },
    body:
      action === "login"
        ? JSON.stringify({ email, password })
        : JSON.stringify({ email, password, name }),
    signal: controller.signal,
    method: "POST",
  };
  setTimeout(() => controller.abort(), 5000);
  try {
    const auth = await (
      await fetch(action === "login" ? login : signup, options)
    ).json();
    const id = auth.user.id;
    const name = auth.user.name;
    const email = auth.user.email;
    cookies.set("id", id, "/");
    cookies.set("name", name, "/");
    cookies.set("email", email, "/");
    return { email, id, name };
  } catch {
    return null;
  }
};

export const logout = () => {
  cookies.remove("id");
  cookies.remove("name");
  cookies.remove("email");
};

export default auth;
