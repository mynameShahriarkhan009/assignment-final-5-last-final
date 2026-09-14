import TechCard from "./TechCard.jsx";

export default function TechGrid({ techList, stack, onAddToStack, sidebar }) {
  const addedIds = stack.map((item) => item.id);

  return (
    <section id="technologies" className="max-w-[1400px] mx-auto px-10 pb-24">
      <h2 className="text-3xl font-extrabold">
        Explore the <span className="text-gradient">Technologies</span>
      </h2>
      <p className="text-gray-500 mt-2">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex items-start gap-5 mt-8">
        <div className="flex-1 grid grid-cols-3 gap-5">
          {techList.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              isAdded={addedIds.includes(tech.id)}
              onAdd={onAddToStack}
            />
          ))}
        </div>

        <div className="w-[280px] shrink-0 sticky top-24">{sidebar}</div>
      </div>
    </section>
  );
}
