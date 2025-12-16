import { ShoppingBag, Flame, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

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
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <ShoppingBag className="w-5 h-5" />
            </button>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
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
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

/* NAV ITEM */
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
