import Cookies from "universal-cookie"

const cookies = new Cookies();

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
    const auth = await (
      await fetch(action === "login" ? login : signup, options)
    ).json();
    const id = cookies.set("id", auth.user.id, "/");
    const name = cookies.set("name", auth.user.name, "/");
    const email = cookies.set("email", auth.user.email, "/");
    console.log({ email, id, name });
    return {email, id, name};
  } catch {
    return null;
  }
};

export const logout = () => {
  cookies.remove("id");
  cookies.remove("name");
  cookies.remove("email");
}

export default auth;
