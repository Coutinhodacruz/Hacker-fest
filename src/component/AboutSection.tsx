import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="mx-auto my-16 max-w-6xl px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative">
          <div className="absolute top-5 left-0 rounded-xl bg-[#E0E1E3] p-2 shadow-lg z-50">
            <p className="text-sm font-medium text-gray-800">Web 3.0</p>
          </div>
          <div className="relative w-full max-w-[350px] aspect-square overflow-hidden rounded-full bg-[#0A1739]">
            <Image
              src="/about-sui-image.svg"
              alt="Smiling woman with laptop"
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
          </div>
          <div className="absolute -bottom-3 right-48 rounded-xl bg-[#E0E1E3] p-2 shadow-lg">
            <p className="text-sm font-medium text-gray-800">Blockchain Tech</p>
          </div>
        </div>
        <div className="md:pl-4 lg:pl-8">
          <h2 className="mb-4 text-xl md:text-2xl font-bold text-blue-600">
            About SUI Lagos Hacker House
          </h2>
          <div className="space-y-4 text-sm md:text-base">
            <p>
              <span className="font-semibold text-blue-600">Sui Lagos Hacker House</span> is a 6-day event that brings together developers, engineers, builders, innovators, and blockchain enthusiasts interested in building on the Sui blockchain.
            </p>
            <p>
              The event features workshops, mentorship sessions, hacking, and networking opportunities to encourage innovation. Attendees will learn about Sui blockchain, develop skills to build robust solutions, and prepare for the{' '}
              <span className="font-semibold text-blue-600">Sui Overflow 2023 Hackathon</span>, a global competition with over $500,000 in prizes.
            </p>
            <p>
              Implemented by{' '}
              <span className="font-semibold text-blue-600 underline hover:no-underline cursor-pointer">
                Semicolon
              </span>{' '}
              and sponsored by{' '}
              <span className="font-semibold text-blue-600 underline hover:no-underline cursor-pointer">
                Sui Foundation
              </span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;