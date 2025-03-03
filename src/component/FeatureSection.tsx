const FeaturesSection = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '4rem' }}>
      <div style={{ backgroundColor: '#DBEAFE', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563EB', marginBottom: '1.5rem' }}>Features of the Hacker House</h2>
          <ul style={{ display: 'grid', gap: '0.75rem' }}>
            {['Brainstorming and Ideation Sessions', 'Workshops and Tutorials', 'Coaching and Mentorship from Move Experts, including the Sui Foundation\'s Head of Developer Relations', 'Access to Resources', 'Networking Opportunities', 'Solution Demonstrations'].map((text, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: '#3B82F6', marginTop: '0.25rem' }}>•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ backgroundColor: 'rgba(191, 219, 254, 0.3)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563EB', marginBottom: '1.5rem' }}>Benefits for Participating Teams</h2>
          <ul style={{ display: 'grid', gap: '0.75rem' }}>
            {['Access Mentorship & Coaching', 'Engage with the Sui Foundation', 'Hands-On Learning', 'Strengthen solutions that can be used to compete in global hackathons, enter accelerator programs, and become viable businesses', 'Connect with other developers & potential mentors and partners', 'All participants who successfully complete the Hacker House are eligible for a reward worth the equivalent of $100', 'Participants would build robust solutions using Sui and prepare for the Sui Overflow 2025 Hackathon, a virtual global competition with over $500,000 in combined prizes.'].map((text, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: '#3B82F6', marginTop: '0.25rem' }}>•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
