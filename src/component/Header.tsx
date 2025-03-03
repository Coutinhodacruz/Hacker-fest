import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-[#051027] to-[#071a3e] text-white rounded-bl-[100px]">
      <div className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-8">
        <div className="absolute inset-0 z-0 opacity-20"></div>
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-16 flex items-center justify-center gap-4">
            <div className="text-xl font-semibold text-white">
              <Image
                alt="Semicolon logo"
                src="/semicolon-logo.svg"
                width={150}
                height={30}
                className="h-6 w-auto object-contain"
              />
            </div>
            <span className="text-xl">|</span>
            <div>
              <Image
                alt="Sui logo"
                src="/sui-logo.svg"
                width={150}
                height={30}
                className="h-6 w-auto object-contain"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              alt="Hacker House"
              src="/HackerHouseNew.svg"
              width={500}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8">
            <p className="text-semibold text-center text-3xl italic text-cyan-400 my-8">
              Road to Sui Overflow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;