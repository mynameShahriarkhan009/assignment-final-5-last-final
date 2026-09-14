const footerLinks = [
  { title: "PRODUCT", items: ["Home", "Technologies", "Projects"] },
  { title: "COMPANY", items: ["About", "Contact", "Careers"] },
  { title: "LEGAL", items: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-10 py-14 flex justify-between">
        {/* brand block */}
        <div className="max-w-[300px]">
          <img src="/images/logo-text.png" alt="Dev Stack" className="w-auto h-8" />
          <p className="text-sm text-gray-500 leading-relaxed mt-4">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4 text-sm text-gray-600 mt-5">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        {/* link groups */}
        <div className="flex gap-20">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold text-gray-800 tracking-wide">
                {group.title}
              </p>
              <ul className="flex flex-col gap-2.5 mt-4">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-800">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-10 py-5 flex justify-between text-xs text-gray-400">
          <span>© {year} Dev Stack. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
