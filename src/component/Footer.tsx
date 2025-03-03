const Footer = () => {
  return (
    <footer className="mt-12 bg-[#051027] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {/* Logistics Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#06b6d4]">Logistics</h4>
            <ul className="space-y-2">
              {[
                "Accommodation will be provided for teams from outside Lagos",
                "Meals will be provided"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 text-white">•</span>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#06b6d4]">Resources and Support</h4>
            <div className="space-y-4 text-sm sm:text-base">
              <p>
                Semicolon is providing free training on Sui Move, sponsored by the Sui Foundation. It isn’t too late to register for the current round of classes. Click on this link to register: 
                <a
                  href="https://bit.ly/SC-SUI-Training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words text-[#06b6d4] underline"
                >
                  https://bit.ly/SC-SUI-Training
                </a>
              </p>
              <p>
                Semicolon is a workforce development company that is solving the problem of youth unemployment by training software engineers and techpreneurs. Through our one-year techpreneurship program, we help individuals develop required skills to compete as software engineers in the global market. To learn more about Semicolon, please visit 
                <a
                  href="https://www.semicolon.africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#06b6d4] underline"
                >
                  www.semicolon.africa
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12   pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex items-center gap-4 sm:gap-8">
              <img
                alt="Semicolon logo"
                src="/semicolon-logo.svg"
                className="h-6 w-auto object-contain"
              />
              <span className="hidden text-xl sm:inline-block">|</span>
              <img
                alt="Sui logo"
                src="/sui-logo.svg"
                className="h-6 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;