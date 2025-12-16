import { ArrowRight, ChevronDown} from "lucide-react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1400&q=80"
        alt="Delicious burger"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl text-white">
          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border border-orange-500 text-orange-400">
            Premium Comfort Food
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Indulge Your <br />
            <span className="text-[var(--primary)]">Cravings</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
            From wagyu smash burgers to artisan pizzas. We elevate the food you
            love to a royal standard.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex gap-4">
              {/* Order Now → Menu */}
              <Link
                to="/menu"
                className="bg-[var(--primary)] text-white px-6 py-3 rounded-full text-sm font-medium
               hover:bg-orange-600 transition inline-flex items-center gap-2"
              >
                Order Now <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Our Story → About */}
              <Link
                to="/about"
                className="border border-white/60 text-white px-6 py-3 rounded-full text-sm font-medium
               hover:border-white transition"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator w-[2px] h-10 bg-white/60 rounded-full"></div>
    </section>
  );
}
