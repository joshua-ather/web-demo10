import api from "./api";

export async function login(username: string, password: string) {
  const res = await api.post("/auth/login", { username, password });
  return res.data; // { access_token }
}

export async function refreshToken() {
  const res = await api.post("/auth/refresh-token");
  return res.data; // { access_token }
}

export async function logout() {
  const res = await api.post("/auth/logout");
  return res.data;
}
