import Image from 'next/image';

const EligibilitySection = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 my-8">
      <div className="relative rounded-xl bg-[#0A1739] overflow-hidden md:overflow-visible">
        <div className="grid md:grid-cols-2 items-center relative">
          <div className="p-16 z-10 relative">
            <h3 className="mb-6 text-xl font-bold text-cyan-500">Eligibility Criteria</h3>
            <ul className="space-y-4">
              <li className="text-white">
                <span className="font-semibold text-cyan-500">Team Size:</span> Maximum of 4 (individuals are eligible to apply but will be paired to make the team)
              </li>
              <li className="text-white">
                <span className="font-semibold text-cyan-500">Participants:</span> Open to developers, designers, entrepreneurs, and blockchain enthusiasts
              </li>
            </ul>
          </div>
          <div className="relative md:static">
            <Image
              src="/eligibility-image.svg"
              alt="Team members smiling"
              width={500}
              height={350}
              className="w-full h-auto md:hidden"
            />
            <Image
              src="/eligibility-image.svg"
              alt="Team members smiling"
              width={600}
              height={450}
              className="hidden md:block absolute lg:-top-12 md:-top-0 md:right-0 md:translate-x-10 md:-translate-y-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;