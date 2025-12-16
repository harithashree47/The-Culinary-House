const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-[#0b0b0b] text-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              The Culinary
              <span className="text-[#ff7a00]">House</span>
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Where cravings meet luxury.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-8 text-sm">
            <a
              href="#"
              className="text-gray-300 hover:text-[#ff7a00] transition"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#ff7a00] transition"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#ff7a00] transition"
            >
              Instagram
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-xs text-gray-500">
            © {new Date().getFullYear()} The Culinary House. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
