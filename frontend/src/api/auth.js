const API_BASE = import.meta.env.VITE_API_BASE_URL 

async function request(path, { method = "GET", body, token } = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const msg = Array.isArray(data?.message)
      ? data.message.join(", ")
      : data?.message || "Request failed";
    throw new Error(msg);
  }

  return data;
}

export async function registerApi(payload) {
  // payload = { name, email, password }
  return request("/auth/register", { method: "POST", body: payload });
}

export async function loginApi(payload) {
  // payload = { email, password }
  return request("/auth/login", { method: "POST", body: payload });
}

export async function meApi(token) {
  return request("/auth/me", { method: "GET", token });
}

export const tokenStore = {
  set(token) {
    localStorage.setItem("accessToken", token);
  },
  get() {
    return localStorage.getItem("accessToken");
  },
  clear() {
    localStorage.removeItem("accessToken");
  },
};

export const userStore = {
  set(user) {
    localStorage.setItem("tch_user", JSON.stringify(user));
  },
  get() {
    const u = localStorage.getItem("tch_user");
    return u ? JSON.parse(u) : null;
  },
  clear() {
    localStorage.removeItem("tch_user");
  },
};