import { useState } from "react";
import FoodCard from "../Components/FoodCard";


const foods = [
  {
    id: 1,
    title: "The Royal Smash",
    tag: "BURGERS",
    price: "18.50",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    description:
      "Double wagyu beef patties, aged cheddar, caramelized onions, and secret royal sauce.",
  },
  {
    id: 2,
    title: "Truffle Parmesan Fries",
    tag: "SIDES",
    price: "9.00",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    description:
      "Hand-cut fries tossed in black truffle oil and shaved parmesan.",
  },
  {
    id: 3,
    title: "Hot Honey Pepperoni",
    tag: "PIZZA",
    price: "22.00",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
    description:
      "Artisan sourdough crust topped with spicy pepperoni and hot honey drizzle.",
  },
];

const categories = ["ALL", "BURGERS", "SIDES", "PIZZA"];

const MenuPage = () => {
  const [active, setActive] = useState("ALL");

  const filteredFoods =
    active === "ALL" ? foods : foods.filter((food) => food.tag === active);

  return (
    <section className="bg-[#fff6ec] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Menu
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover our carefully curated selection of dishes, crafted to
            perfection.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  active === cat
                    ? "bg-gray-900 text-white"
                    : "bg-white border hover:border-gray-900"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FOOD GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} {...food} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
