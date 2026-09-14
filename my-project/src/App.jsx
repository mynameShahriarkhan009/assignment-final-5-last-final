import { useState, useEffect } from "react";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TechGrid from "./components/TechGrid.jsx";

function App() {
  const [techList, setTechList] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // load the technology data once, from public/data so nothing is hardcoded
  useEffect(() => {
    fetch("/data/techData.json")
      .then((res) => res.json())
      .then((data) => setTechList(data))
      .catch((err) => console.error("Failed to load tech data:", err))
      .finally(() => setLoading(false));
  }, []);

  const addToStack = (tech) => {
    const isDuplicate = stack.some((item) => item.id === tech.id);
    if (isDuplicate) return;
    setStack((prev) => [...prev, tech]);
  };

  return (
    <div>
      <Header />
      <Hero />

      {loading ? (
        <div className="flex flex-col gap-3 items-center py-24">
          <div className="w-8 h-8 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
          <p className="text-sm text-gray-400">Loading technologies...</p>
        </div>
      ) : (
        <TechGrid
          techList={techList}
          stack={stack}
          onAddToStack={addToStack}
          sidebar={null}
        />
      )}
    </div>
  );
}

export default App;
