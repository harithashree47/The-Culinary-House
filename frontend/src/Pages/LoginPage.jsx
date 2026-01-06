import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginApi, meApi, tokenStore, userStore } from "../api/auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const email = form.email.trim();
    if (!email || !form.password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const payload = { email, password: form.password };

      const { accessToken } = await loginApi(payload);
      tokenStore.set(accessToken);

      const me = await meApi(accessToken);
      userStore.set(me);

      navigate(me.role === "ADMIN" ? "/admin" : "/user", { replace: true });
    } catch (err) {
      tokenStore.clear();
      userStore.clear();
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-lg px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-extrabold text-slate-900">
            Login to your account
          </h1>

          {error ? (
            <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-800">
              {error}
            </div>
          ) : null}

          <form onSubmit={onSubmit} className="mt-5 space-y-3">
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Email <span className="text-orange-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="john@example.com"
                autoComplete="email"
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Password <span className="text-orange-500">*</span>
              </label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 focus-within:border-orange-300 focus-within:ring-4 focus-within:ring-orange-100">
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  value={form.password}
                  onChange={onChange}
                  placeholder="Your password"
                  autoComplete="current-password"
                  className="w-full py-3 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((s) => !s)}
                  className="rounded-lg p-2 text-slate-600 hover:bg-slate-50"
                >
                  {showPass ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-extrabold text-white shadow-sm transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="pt-2 text-center text-sm text-slate-600">
              Don’t have an account?{" "}
              <NavLink
                to="/register"
                className="font-bold text-[var(--primary)] hover:underline"
              >
                Create one
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}