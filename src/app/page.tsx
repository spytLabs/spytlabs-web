export default function Home() {
  const assets = {
    heroBg: "/figma-assets/hero-bg.jpg",
    logo: "/figma-assets/logo.png",
    google: "/figma-assets/google.png",
    amazon: "/figma-assets/amazon.png",
    oracle: "/figma-assets/oracle.png",
    ebay: "/figma-assets/ebay.png",
    netflix: "/figma-assets/netflix.png",
    roiIcon: "/figma-assets/roi-icon.svg",
    aiIcon: "/figma-assets/ai-icon.svg",
  };

  const partners = [
    { src: assets.google, alt: "Google" },
    { src: assets.amazon, alt: "Amazon" },
    { src: assets.oracle, alt: "Oracle" },
    { src: assets.ebay, alt: "eBay" },
    { src: assets.netflix, alt: "Netflix" },
  ];

  return (
    <main className="spyt-page" data-node-id="7:402">
      <section className="hero-shell" data-node-id="2:93">
        <div
          className="hero"
          style={{ backgroundImage: `url(${assets.heroBg})` }}
          data-node-id="1:399"
        >
          <header className="hero-nav" data-node-id="2:92">
            <img src={assets.logo} alt="spytLabs" className="hero-logo" />
            <nav className="hero-links" aria-label="Primary">
              <a href="#">Design</a>
              <a href="#">Automation</a>
              <a href="#">Production</a>
              <a href="#">Technology</a>
              <a href="#" className="hero-cta">
                Contact Us
              </a>
            </nav>
          </header>

          <p className="hero-tagline" data-node-id="2:46">
            BEYOND MARKETING. INTO THE FUTURE
          </p>
          <h1 className="hero-title" data-node-id="2:3">
            <span>We don&apos;t follow trends</span>
            <span>-we create them.</span>
          </h1>
        </div>
      </section>

      <section className="partners" data-node-id="2:108" aria-label="Partners">
        {partners.map((partner) => (
          <img key={partner.alt} src={partner.src} alt={partner.alt} className="partner-logo" />
        ))}
      </section>

      <section className="ecosystem" data-node-id="2:137">
        <div className="ecosystem-head" data-node-id="7:407">
          <h2 data-node-id="2:109">
            Our <span>Ecosystem</span>
          </h2>
          <p data-node-id="2:115">
            To Push The Boundaries of Digital Marketing and Offer Brands a 360-degree Growth
            Experience, We&apos;ve Built a Powerful Ecosystem of Innovation, Strategy, and
            Technology.
          </p>
        </div>

        <div className="metrics" data-node-id="3:182">
          <article className="metric-card" data-node-id="3:178">
            <img src={assets.roiIcon} alt="ROI icon" className="metric-icon" />
            <div className="metric-main" data-node-id="3:174">
              <div className="metric-number" data-node-id="3:173">
                3.2<span>x</span>
              </div>
              <div className="metric-label" data-node-id="3:177">
                Avg. ROI Delivered
              </div>
            </div>
            <p className="metric-copy" data-node-id="3:179">
              A clear measure of the business value generated through our automation systems,
              reflecting real financial impact and performance gains across client operations.
            </p>
          </article>

          <article className="metric-card" data-node-id="3:183">
            <img src={assets.aiIcon} alt="AI icon" className="metric-icon" />
            <div className="metric-main" data-node-id="3:186">
              <div className="metric-number" data-node-id="3:187">
                1.2<span>K+</span>
              </div>
              <div className="metric-label" data-node-id="3:188">
                AI Processing Hours
              </div>
            </div>
            <p className="metric-copy" data-node-id="3:189">
              The total volume of intelligent processing power delivered through our systems,
              representing continuous automation, execution, and optimization across workflows.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
