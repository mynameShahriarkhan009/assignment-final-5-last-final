export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  const isEmpty = stack.length === 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <h3 className="text-lg font-bold">Your Stack</h3>
      <p className="text-sm text-gray-400 mt-0.5">
        {isEmpty ? "No technologies selected yet." : `${stack.length} Technology Selected`}
      </p>

      {isEmpty ? (
        <div className="mt-4 py-8 border border-dashed border-gray-200 rounded-lg text-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2.5 mt-4">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex justify-between items-center px-3 py-2.5 border border-gray-200 rounded-lg"
            >
              <div className="flex gap-2.5 items-center">
                <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                <div>
                  <p className="text-sm font-medium leading-tight">{tech.name}</p>
                  <p className="text-xs text-gray-400 leading-tight">{tech.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                className="text-gray-400 hover:text-gray-600"
                aria-label={`Remove ${tech.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {!isEmpty && (
        <button
          onClick={onRemoveAll}
          className="w-full mt-5 py-2.5 rounded-md border border-red-200 text-sm font-medium text-red-500 hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
