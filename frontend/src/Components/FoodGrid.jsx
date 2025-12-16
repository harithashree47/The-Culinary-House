import FoodCard from "./FoodCard";


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
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
    description:
      "Artisan sourdough crust topped with spicy pepperoni and hot honey drizzle.",
  },
];

export default function FoodGrid() {
  return (
    <section className="bg-[#fff6ec] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold">Fan Favorites</h2>
          <p className="mt-2 text-gray-600">
            The dishes everyone is talking about.
          </p>
          <div className="mt-4 h-1 w-16 bg-[var(--primary)] mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((food) => (
            <FoodCard key={food.id} {...food} />
          ))}
        </div>
      </div>
    </section>
  );
}
