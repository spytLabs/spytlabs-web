export default function Home() {
  const assets = {
    heroBg:
      "https://www.figma.com/api/mcp/asset/6b5f6ec6-7d57-4532-bce3-a8571ec38a7f",
    logo: "https://www.figma.com/api/mcp/asset/3d1aae7f-9b4e-4035-9641-31b75268ca25",
    google: "https://www.figma.com/api/mcp/asset/a4c8f600-dfb9-426a-ba54-8505edc639c8",
    amazon: "https://www.figma.com/api/mcp/asset/2afadd2b-98ca-424d-83c4-197ccfa2a60e",
    oracle: "https://www.figma.com/api/mcp/asset/b7d7b157-8b2d-4df3-ab5b-7091ee863458",
    ebay: "https://www.figma.com/api/mcp/asset/0a697448-0a0c-4862-9f6a-88f54e455cf3",
    netflix: "https://www.figma.com/api/mcp/asset/6d817d34-4f67-4a52-871c-4d03070bc71b",
    roiIcon: "https://www.figma.com/api/mcp/asset/08730ae6-a225-41e4-9a1b-1df2c15c98d5",
    aiIcon: "https://www.figma.com/api/mcp/asset/7071741e-50d8-4321-9df2-3528ecd9cce3",
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
