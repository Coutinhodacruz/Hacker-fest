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
        <div>
          <h2 className="mb-6 text-2xl font-bold text-blue-600">About SUI Lagos Hacker House</h2>
          <p className="mb-4">
            <span className="font-semibold text-blue-600">Sui Lagos Hacker House</span> is a 6-day event that is designed to bring together developers, engineers, builders, innovators, and blockchain enthusiasts who are interested in building on the Sui blockchain.
          </p>
          <p className="mb-4">
            The event will feature workshops, mentorship and coaching sessions, hacking, and networking opportunities to encourage innovation and collaboration. Attendees will learn about the Sui blockchain, develop skills to build robust solutions using Sui and prepare for the <span className="font-semibold text-blue-600">Sui Overflow 2023 Hackathon</span>, a global competition with over $500,000 in combined prizes.
          </p>
          <p className="mb-4">
            The Sui Lagos Hacker House is implemented by <span className="font-semibold cursor-pointer underline">Semicolon</span> and sponsored by <span className="font-semibold cursor-pointer underline">Sui Foundation</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;