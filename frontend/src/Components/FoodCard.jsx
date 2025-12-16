import PrimaryButton from "./PrimaryButton";


export default function FoodCard({ image, tag, title, description, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
      {/* Image */}
      <div className="relative h-52">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <span className="absolute top-3 right-3 bg-white/90 text-xs px-3 py-1 rounded-full font-semibold">
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-[var(--primary)] font-semibold">${price}</span>
        </div>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

        <div className="mt-5">
          <PrimaryButton>+ Add to Cart</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
