import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css';

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="pod-app bg-light text-dark min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <header className="pod-navbar shadow-sm bg-white">
        <nav className="container py-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <span className="pod-logo">PrintStore</span>
            </div>
            {/* Desktop nav */}
            <ul className="pod-nav-links d-none d-md-flex align-items-center mb-0 list-unstyled gap-4">
              <li>
                <Link to="/" className="pod-nav-link">Home</Link>
              </li>
              <li>
                <Link to="/products" className="pod-nav-link">Products</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="pod-nav-link">How it works</Link>
              </li>
              <li>
                <Link to="/about" className="pod-nav-link">About</Link>
              </li>
              <li>
                <Link to="/faq" className="pod-nav-link">FAQ</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-2">
              <Link to="/login" className="btn btn-outline-dark btn-sm d-none d-md-inline-flex">Log in</Link>
              <Link to="/start-selling" className="btn btn-dark btn-sm d-none d-md-inline-flex">Start selling</Link>
              {/* Mobile toggler */}
              <button
                className="btn btn-outline-dark btn-sm d-inline-flex d-md-none"
                type="button"
                onClick={() => setIsNavOpen((open) => !open)}
              >
                Menu
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          <div className={`pod-mobile-nav d-md-none ${isNavOpen ? 'd-block' : 'd-none'}`}>
            <ul className="list-unstyled mb-2">
              <li className="mb-2">
                <Link to="/products" className="pod-nav-link" onClick={() => setIsNavOpen(false)}>Products</Link>
              </li>
              <li className="mb-2">
                <Link to="/how-it-works" className="pod-nav-link" onClick={() => setIsNavOpen(false)}>How it works</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="pod-nav-link" onClick={() => setIsNavOpen(false)}>About</Link>
              </li>
              <li className="mb-3">
                <Link to="/faq" className="pod-nav-link" onClick={() => setIsNavOpen(false)}>FAQ</Link>
              </li>
            </ul>
            <div className="d-flex flex-column gap-2">
              <Link to="/login" className="btn btn-outline-dark btn-sm">Log in</Link>
              <Link to="/start-selling" className="btn btn-dark btn-sm">Start selling</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow-1">
        {/* Hero section */}
        <section className="pod-hero" id="home">
          <div className="container py-5 py-md-6 d-flex flex-column flex-md-row align-items-center gap-4">
            <div className="col-md-6" data-aos="fade-right">
              <h1 className="pod-hero-title mb-3">Launch your print-on-demand store in minutes.</h1>
              <p className="pod-hero-subtitle mb-4">
                Sell custom t-shirts, posters, mugs, and more. We handle printing, packing,
                and shipping on your behalf so you can focus on your brand.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-3">
                <Link to="/first-product" className="btn btn-dark btn-lg">Create your first product</Link>
                <Link to="/catalog" className="btn btn-outline-dark btn-lg">Browse catalog</Link>
              </div>
              <p className="pod-hero-meta mb-0 small text-muted">
                No upfront costs · Global shipping · Integrates with your favorite platforms
              </p>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div className="pod-hero-preview card border-0 shadow-sm">
                <div className="card-body">
                  <span className="badge bg-dark-subtle text-dark mb-3">Live preview</span>
                  <h5 className="card-title">Your merch, your way</h5>
                  <p className="card-text text-muted mb-4">
                    Upload designs, choose products, set prices, and publish to your store in a few clicks.
                  </p>
                  <div className="pod-product-grid row g-3">
                    <div className="col-4">
                      <div className="pod-product-card small">
                        <img
                          className="pod-product-thumb pod-product-thumb-tee"
                          src="data:image/jpeg;base64,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"
                          alt="Premium Tee"
                        />
                        <p className="mb-0 mt-2">Premium Tee</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="pod-product-card small">
                        <img
                          className="pod-product-thumb pod-product-thumb-mug"
                          src="data:image/jpeg;base64,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"
                          alt="Ceramic Mug"
                        />
                        <p className="mb-0 mt-2">Ceramic Mug</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="pod-product-card small">
                        <img
                          className="pod-product-thumb pod-product-thumb-poster"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zsC1PhUeyUBiForlSsFEMWRB6BN-oNckqA&s"
                          alt="Art Poster"
                        />
                        <p className="mb-0 mt-2">Art Poster</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products section */}
        <section className="pod-section" id="products">
          <div className="container py-5 py-md-6">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h2 className="pod-section-title mb-1">Popular print products</h2>
                <p className="text-muted mb-0">High‑quality products ready for your designs.</p>
              </div>
              <Link to="/catalog" className="btn btn-outline-dark d-none d-md-inline-flex">View full catalog</Link>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="0">
                <div className="pod-card pod-card-product h-100">
                  <img
                    className="pod-card-img pod-product-thumb-tee"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vLS0_TZGQjTDTmn9ar8Zr6S0muSDoPsp6p5jciXZXLhinN8PRws9_mi7J_dMsrCl2qg&usqp=CAU"
                    alt="T-Shirts & Hoodies"
                  />
                  <div className="pod-card-body">
                    <h5 className="pod-card-product-title">T‑Shirts & Hoodies</h5>
                    <p className="text-muted mb-2">
                      Soft, premium garments in multiple colors and sizes for every audience.
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <span className="pod-card-product-price">From $18.00</span>
                      <button className="btn btn-sm btn-outline-dark">View details</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="pod-card pod-card-product h-100">
                  <img
                    className="pod-card-img pod-product-thumb-mug"
                    src="https://m.media-amazon.com/images/I/71mBAnz9-hL._AC_UF894,1000_QL80_.jpg"
                    alt="Drinkware"
                  />
                  <div className="pod-card-body">
                    <h5 className="pod-card-product-title">Drinkware</h5>
                    <p className="text-muted mb-2">
                      Mugs, tumblers, and bottles that keep your brand in your customers' hands.
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <span className="pod-card-product-price">From $12.50</span>
                      <button className="btn btn-sm btn-outline-dark">View details</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="pod-card pod-card-product h-100">
                  <img
                    className="pod-card-img pod-product-thumb-poster"
                    src="https://m.media-amazon.com/images/I/71ynRexZGOL.jpg"
                    alt="Wall Art & Posters"
                  />
                  <div className="pod-card-body">
                    <h5 className="pod-card-product-title">Wall Art & Posters</h5>
                    <p className="text-muted mb-2">
                      Museum‑grade posters, canvas wraps, and framed prints.
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <span className="pod-card-product-price">From $15.00</span>
                      <button className="btn btn-sm btn-outline-dark">View details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="pod-section pod-section-muted" id="how-it-works">
          <div className="container py-5 py-md-6">
            <div className="text-center mb-5">
              <h2 className="pod-section-title mb-2">How print‑on‑demand works</h2>
              <p className="text-muted mb-0">Three simple steps from idea to shipped orders.</p>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="0">
                <div className="pod-step-card h-100">
                  <span className="pod-step-number">1</span>
                  <h5>Design your products</h5>
                  <p className="text-muted mb-0">
                    Upload your artwork, add it to products, and preview how everything looks in your store.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="pod-step-card h-100">
                  <span className="pod-step-number">2</span>
                  <h5>Publish and sell</h5>
                  <p className="text-muted mb-0">
                    Connect your online store, set your pricing, and start taking orders worldwide.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="pod-step-card h-100">
                  <span className="pod-step-number">3</span>
                  <h5>We print & ship</h5>
                  <p className="text-muted mb-0">
                    We automatically fulfill orders under your brand while you track performance from your dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About / trust section */}
        <section className="pod-section" id="about">
          <div className="container py-5 py-md-6">
            <div className="row g-4 align-items-center">
              <div className="col-md-6" data-aos="fade-right">
                <h2 className="pod-section-title mb-3">Built for creators, brands, and businesses.</h2>
                <p className="text-muted mb-3">
                  Whether you are a designer, content creator, or established brand, our print‑on‑demand
                  tools make it effortless to launch and scale your merch line.
                </p>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="pod-stat-card">
                      <h4>0 inventory</h4>
                      <p className="text-muted mb-0 small">Only pay when you sell. No stock risk.</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="pod-stat-card">
                      <h4>Global</h4>
                      <p className="text-muted mb-0 small">Ship to customers worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="pod-feature-list card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="mb-3">Why brands choose PrintStore</h5>
                    <ul className="pod-list">
                      <li>Fast, reliable production partners</li>
                      <li>Automatic syncing with online stores</li>
                      <li>Transparent margins and payouts</li>
                      <li>Brandable packaging and inserts</li>
                      <li>Dedicated support for growing shops</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ preview */}
        <section className="pod-section pod-section-muted" id="faq">
          <div className="container py-5 py-md-6">
            <div className="row g-4">
              <div className="col-md-4">
                <h2 className="pod-section-title mb-3">Questions, answered.</h2>
                <p className="text-muted mb-3">
                  Here are a few common questions about starting a print‑on‑demand store.
                </p>
                <Link to="/faq" className="btn btn-outline-dark">View full FAQ</Link>
              </div>
              <div className="col-md-8">
                <div className="pod-faq-list">
                  <details className="pod-faq-item" open>
                    <summary>Do I need to pay for inventory upfront?</summary>
                    <p className="text-muted mb-0">
                      No. With print‑on‑demand, products are only printed after a customer places an order.
                    </p>
                  </details>
                  <details className="pod-faq-item">
                    <summary>Which platforms can I connect?</summary>
                    <p className="text-muted mb-0">
                      Connect to popular platforms using integrations or manual order export/import workflows.
                    </p>
                  </details>
                  <details className="pod-faq-item">
                    <summary>How are shipping rates calculated?</summary>
                    <p className="text-muted mb-0">
                      Shipping rates are calculated based on product type, weight, and destination. You can
                      choose to pass costs on to customers or absorb them into your pricing.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pod-footer bg-dark text-light mt-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <h5 className="pod-logo mb-3 text-white">PrintStore</h5>
              <p className="text-white small mb-3">
                A modern print‑on‑demand platform for creators and brands who want to launch, test,
                and grow their merch without the hassle of inventory.
              </p>
              <p className="text-white small mb-0">© {new Date().getFullYear()} PrintStore. All rights reserved.</p>
            </div>

            <div className="col-6 col-md-2">
              <h6 className="text-white mb-3">Platform</h6>
              <ul className="list-unstyled pod-footer-list">
                <li><Link to="/products">Catalog</Link></li>
                <li><Link to="/how-it-works">Workflow</Link></li>
                <li><Link to="/about">Creators</Link></li>
                <li><Link to="/faq">Help center</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <h6 className="text-white mb-3">Resources</h6>
              <ul className="list-unstyled pod-footer-list">
                <li><Link to="/pricing">Pricing & margins</Link></li>
                <li><Link to="/shipping-guide">Shipping guide</Link></li>
                <li><Link to="/design-tips">Design tips</Link></li>
                <li><Link to="/partner-program">Partner program</Link></li>
              </ul>
            </div>

            <div className="col-12 col-md-3">
              <h6 className="text-white mb-3">Stay in the loop</h6>
              <p className="text-white small mb-3">
                Subscribe for product updates, launch guides, and creator case studies.
              </p>
              <form className="pod-footer-form d-flex flex-column gap-2">
                <input
                  type="email"
                  className="form-control form-control-sm bg-dark-subtle border-0 text-light"
                  placeholder="name@email.com"
                />
                <button type="submit" className="btn btn-light btn-sm align-self-start">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

