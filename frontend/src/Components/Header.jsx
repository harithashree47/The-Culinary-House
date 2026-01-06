import {
  ShoppingBag,
  Flame,
  Menu,
  X,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { tokenStore, userStore } from "../api/auth";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Re-check auth whenever route changes (after login/register redirect)
  useEffect(() => {
    const token = tokenStore.get(); // localStorage: accessToken
    const u = userStore.get();      // localStorage: tch_user

    setIsAuthed(Boolean(token));
    setUser(u);
  }, [location.pathname]);

  const handleLogout = () => {
    tokenStore.clear();
    userStore.clear();
    setIsAuthed(false);
    setUser(null);
    setOpen(false);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-2">
            <div
              className="h-9 w-9 rounded-xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              The <span style={{ color: "var(--primary)" }}>Culinary</span>
              <span className="font-bold">House</span>
            </span>
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavItem label="Home" to="/" />
            <NavItem label="About" to="/about" />
            <NavItem label="Food" to="/menu" />
            <NavItem label="Contact" to="/contact" />
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100 transition" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
            </button>

            {/* Right corner auth (desktop) */}
            <div className="hidden md:flex items-center gap-3">
              {isAuthed ? (
                <>
                  {user?.name ? (
                    <span className="text-sm text-gray-700">
                      Hello, <span className="font-semibold">{user.name}</span>
                    </span>
                  ) : null}

                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-gray-800 border border-gray-200 hover:bg-gray-50"
                  >
                    <LogIn className="h-4 w-4" />
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    <UserPlus className="h-4 w-4" />
                    Register
                  </NavLink>
                </>
              )}
            </div>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <nav className="md:hidden border-t border-gray-200 mt-2 pb-4">
            <ul className="flex flex-col gap-4 pt-4 text-base font-medium">
              <NavItem label="Home" to="/" mobile setOpen={setOpen} />
              <NavItem label="About" to="/about" mobile setOpen={setOpen} />
              <NavItem label="Food" to="/menu" mobile setOpen={setOpen} />
              <NavItem label="Contact" to="/contact" mobile setOpen={setOpen} />

              <li className="pt-2 flex flex-col gap-2">
                {isAuthed ? (
                  <>
                    {user?.name ? (
                      <div className="px-2 text-sm text-gray-700">
                        Hello, <span className="font-semibold">{user.name}</span>
                      </div>
                    ) : null}

                    <button
                      onClick={handleLogout}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-white"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      onClick={() => setOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-gray-800 border border-gray-200 hover:bg-gray-50"
                    >
                      <LogIn className="h-4 w-4" />
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      onClick={() => setOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-white"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      <UserPlus className="h-4 w-4" />
                      Register
                    </NavLink>
                  </>
                )}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

function NavItem({ label, to, mobile, setOpen }) {
  return (
    <NavLink
      to={to}
      onClick={() => setOpen && setOpen(false)}
      className={({ isActive }) =>
        `
        tracking-wide transition
        ${mobile ? "px-2" : ""}
        ${
          isActive
            ? "text-[var(--primary)] font-semibold"
            : "text-gray-800 hover:text-[var(--primary)]"
        }
      `
      }
    >
      {label}
    </NavLink>
  );
}