const FeaturesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-16 px-4 sm:px-6 lg:px-8"> {/* Set gap to 0 */}
      
      <div className="bg-blue-50 p-8 lg:p-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
            Features of the Hacker House
          </h2>
          <ul className="grid gap-3 list-none pl-0">
            {[
              "Brainstorming and Ideation Sessions",
              "Workshops and Tutorials",
              "Coaching and Mentorship from Move Experts, including the Sui Foundation's Head of Developer Relations",
              "Access to Resources",
              "Networking Opportunities",
              "Solution Demonstrations"
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500 self-start">•</span>
                <span className="text-sm md:text-base">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#f2f6fb] p-8 lg:p-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
            Benefits for Participating Teams
          </h2>
          <ul className="grid gap-3 list-none pl-0">
            {[
              "Access Mentorship & Coaching",
              "Engage with the Sui Foundation",
              "Hands-On Learning",
              "Strengthen solutions that can be used to compete in global hackathons, enter accelerator programs, and become viable businesses",
              "Connect with other developers & potential mentors and partners",
              "All participants who successfully complete the Hacker House are eligible for a reward worth the equivalent of $100",
              "Participants would build robust solutions using Sui and prepare for the Sui Overflow 2025 Hackathon, a virtual global competition with over $500,000 in combined prizes."
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500 self-start">•</span>
                <span className="text-sm md:text-base">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;