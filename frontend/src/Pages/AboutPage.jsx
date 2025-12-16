import { ChefHat, Beef } from "lucide-react";
import Breadcrumb from "../Components/BreadCrumb";


const About = () => {
  return (
    <>
    <Breadcrumb/>
    <section className="bg-[#fff6ec] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349"
              alt="Burger"
              className="h-56 w-full rounded-2xl object-cover shadow-lg md:-translate-y-6 hover:-translate-y-8 transition"
            />

            <img
              src= "https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
              alt="Pizza"
              className="h-56 w-full rounded-2xl object-cover shadow-lg md:translate-y-6 hover:translate-y-8 transition"
            />

            <img
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
              alt="Pasta"
              className="h-56 w-full rounded-2xl object-cover shadow-lg md:-translate-y-6 hover:-translate-y-8 transition"
            />

            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349"
              alt="Pizza Slice"
              className="h-56 w-full rounded-2xl object-cover shadow-lg md:translate-y-6 hover:translate-y-8 transition"
            />
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#ff7a00] mb-4">
              EST. {new Date().getFullYear()}
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Elevating The Art of <br />
              <span className="text-[#ff7a00]">Comfort Food</span>
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              At The Culinary House, we believe that a burger isn't just a
              sandwich—it’s an experience. We started with a simple mission: to
              take the fast food you crave and treat it with the respect of fine
              dining.
            </p>

            <p className="text-gray-700 mb-10 leading-relaxed">
              No shortcuts, no frozen patties, no compromises. Just the finest
              wagyu beef, 72-hour fermented pizza dough, and hand-cut potatoes.
              We’re obsessed with the details so you can be obsessed with the
              flavor.
            </p>

            {/* FEATURES */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 text-[#ff7a00] p-3 rounded-xl">
                  <ChefHat size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Gourmet Techniques</h4>
                  <p className="text-sm text-gray-600">
                    Fine dining skills applied to street food classics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 text-[#ff7a00] p-3 rounded-xl">
                  <Beef size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Premium Ingredients</h4>
                  <p className="text-sm text-gray-600">
                    Only the best meats, cheeses, and produce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
