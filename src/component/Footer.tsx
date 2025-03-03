const Footer = () => {
  return (
    <footer style={{ marginTop: "3rem", backgroundColor: "#051027", padding: "3rem 0", color: "white" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gap: "2rem", padding: "0 1rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        <div>
          <h4 style={{ marginBottom: "1rem", fontSize: "1.125rem", fontWeight: "bold", color: "#06b6d4" }}>Logistics</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "Accommodation will be provided for teams from outside Lagos",
              "Meals will be provided"
            ].map((item, index) => (
              <li key={index} style={{ display: "flex", alignItems: "start", gap: "0.5rem" }}>
                <span style={{ marginTop: "0.25rem", color: "#06b6d4" }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: "1rem", fontSize: "1.125rem", fontWeight: "bold", color: "#06b6d4" }}>Resources and Support</h4>
          <p style={{ marginBottom: "1rem" }}>
            Semicolon is providing free training on Sui Move, sponsored by the Sui Foundation. It isn’t too late to register for the current round of classes. Click on this link to register: 
            <a href="https://bit.ly/SC-SUI-Training" target="_blank" rel="noopener noreferrer" style={{ color: "#06b6d4", textDecoration: "underline" }}>
              https://bit.ly/SC-SUI-Training
            </a>
          </p>
          <p>
            Semicolon is a workforce development company that is solving the problem of youth unemployment by training software engineers and techpreneurs. Through our one-year techpreneurship program, we help individuals develop required skills to compete as software engineers in the global market. To learn more about Semicolon, please visit 
            <a href="https://www.semicolon.africa" target="_blank" rel="noopener noreferrer" style={{ color: "#06b6d4", textDecoration: "underline" }}>
              www.semicolon.africa
            </a>
          </p>
        </div>
      </div>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        <div>
          <div style={{ margin: "3rem auto 0", display: "flex", alignItems: "center", gap: "4rem", maxWidth: "72rem", padding: "0 1rem" }}>
            <div>
              <img
                alt="Semicolon logo"
                src="/semicolon-logo.svg"
                width={120}
                height={30}
                style={{ height: "1.5rem", width: "auto", objectFit: "contain", color: "transparent" }}
              />
            </div>
            <span style={{ fontSize: "1.25rem" }}>|</span>
            <div>
              <img
                alt="Sui logo"
                src="/sui-logo.svg"
                width={120}
                height={30}
                style={{ height: "1.5rem", width: "auto", objectFit: "contain", color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
