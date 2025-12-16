export default function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-medium
                 hover:bg-[#ff7a00] transition flex items-center justify-center gap-2"
    >
      {children}
    </button>
  );
}
