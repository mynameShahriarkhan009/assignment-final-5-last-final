const badgeColors = {
  green: "bg-emerald-50 text-emerald-600",
  orange: "bg-orange-50 text-orange-600",
  blue: "bg-sky-50 text-sky-600",
  red: "bg-red-50 text-red-600",
  yellow: "bg-yellow-50 text-yellow-700",
  brown: "bg-orange-50 text-orange-800",
  cyan: "bg-cyan-50 text-cyan-600",
};

export default function TechCard({ tech, isAdded, onAdd }) {
  const badgeClass =
    badgeColors[tech.badgeColor] || "bg-gray-100 text-gray-600";

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <div className="flex justify-between items-start">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-8 h-8 object-contain"
        />
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${badgeClass}`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold mt-3">{tech.name}</h3>
      <p className="text-sm text-gray-500 leading-relaxed min-h-[60px] mt-1">
        {tech.description}
      </p>

      <div className="flex gap-2 items-center text-xs mt-4">
        <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
          {tech.category}
        </span>
        <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
          {tech.difficulty}
        </span>
        <span className="ml-auto flex gap-1 items-center text-gray-600">
          ★ {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={
          "w-full mt-4 py-2.5 rounded-md text-sm font-medium transition-colors " +
          (isAdded
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800")
        }
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
