import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerApi } from "../api/auth"; // adjust path if needed

export default function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const name = form.name.trim();
    const email = form.email.trim();
    const password = form.password;
    const confirmPassword = form.confirmPassword;

    // Frontend validations
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agree) {
      setError("Please accept the Terms & Privacy Policy.");
      return;
    }

    try {
      setLoading(true);

      // payload for NestJS: RegisterDto { name, email, password }
      const payload = { name, email, password };
      await registerApi(payload);

      // go to login after successful register
      navigate("/login", { replace: true });
    } catch (err) {
      setError(err?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-lg px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-extrabold text-slate-900">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Register with your name, email and password.
          </p>

          {error ? (
            <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-800">
              {error}
            </div>
          ) : null}

          <form onSubmit={onSubmit} className="mt-5 space-y-3">
            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Name <span className="text-orange-500">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="John Doe"
                autoComplete="name"
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            {/* Email */}
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

            {/* Password */}
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
                  placeholder="Min 8 characters"
                  autoComplete="new-password"
                  className="w-full py-3 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((s) => !s)}
                  className="rounded-lg p-2 text-slate-600 hover:bg-slate-50"
                  aria-label={showPass ? "Hide password" : "Show password"}
                  title={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm password */}
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Confirm password <span className="text-orange-500">*</span>
              </label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 focus-within:border-orange-300 focus-within:ring-4 focus-within:ring-orange-100">
                <input
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={onChange}
                  placeholder="Re-enter password"
                  autoComplete="new-password"
                  className="w-full py-3 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((s) => !s)}
                  className="rounded-lg p-2 text-slate-600 hover:bg-slate-50"
                  aria-label={
                    showConfirm ? "Hide confirm password" : "Show confirm password"
                  }
                  title={
                    showConfirm ? "Hide confirm password" : "Show confirm password"
                  }
                >
                  {showConfirm ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 pt-1 text-sm text-slate-600">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[var(--primary)] focus:ring-orange-200"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span>
                I agree to the{" "}
                <button
                  type="button"
                  className="font-semibold text-[var(--primary)] hover:underline"
                  onClick={() => alert("Terms page")}
                >
                  Terms
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="font-semibold text-[var(--primary)] hover:underline"
                  onClick={() => alert("Privacy page")}
                >
                  Privacy Policy
                </button>
                .
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-extrabold text-white shadow-sm transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              {loading ? "Creating..." : "Create account"}
            </button>

            <p className="pt-2 text-center text-sm text-slate-600">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="font-bold text-[var(--primary)] hover:underline"
              >
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}