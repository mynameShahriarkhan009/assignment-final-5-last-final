export default function Hero() {
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-24 flex justify-between items-center">
      <div className="max-w-[540px]">
        <h1 className="text-5xl font-extrabold leading-tight">
          Build Your Ideal
          <br />
          <span className="text-gradient">Development Stack</span>
        </h1>

        <p className="text-gray-500 text-[15px] leading-relaxed mt-6">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="flex gap-4 items-center mt-8">
          <a
            href="#technologies"
            className="btn-gradient px-6 py-3 rounded-md font-medium text-white"
          >
            Explore Technologies
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-md border border-gray-200 font-medium text-gray-800 hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </div>

      <img
        src="/images/hero-stack.png"
        alt="Illustration of a stacked dev tech platform"
        className="w-[340px]"
      />
    </section>
  );
}
