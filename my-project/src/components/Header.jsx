const navItems = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] h-[72px] mx-auto px-10 flex justify-between items-center">
        {/* brand */}
        <img
          src="/images/logo-text.png"
          alt="Dev Stack"
          className="w-auto h-8"
        />

        {/* main nav */}
        <nav className="flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={
                item === "Home"
                  ? "text-sm font-medium text-pink-600"
                  : "text-sm text-gray-600 hover:text-gray-900"
              }
            >
              {item}
            </a>
          ))}
        </nav>

        {/* sign in / sign up */}
        <div className="flex gap-5 items-center">
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
            Sign In
          </a>
          <button className="btn-gradient px-5 py-2 rounded-full text-sm font-medium text-white">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
