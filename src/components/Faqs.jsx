import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css';

const Faqs = () => {
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
                <Link to="/" className="pod-nav-link" onClick={() => setIsNavOpen(false)}>Home</Link>
              </li>
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
        <section className="pod-section pod-section-muted" id="faq-page">
          <div className="container py-5 py-md-6">
            <div className="row g-4 mb-4">
              <div className="col-md-6" data-aos="fade-right">
                <h1 className="pod-section-title mb-3">Frequently asked questions</h1>
                <p className="text-muted mb-0">
                  Answers to common questions about launching and running your print‑on‑demand store
                  with PrintStore.
                </p>
              </div>
              <div className="col-md-6 d-flex align-items-md-end" data-aos="fade-left">
                <p className="text-muted mb-0">
                  Can’t find what you’re looking for? Reach out to our support team and we’ll be happy
                  to help you plan your next launch.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-12 col-lg-6" data-aos="fade-up" data-aos-delay="0">
                <div className="pod-faq-list">
                  <details className="pod-faq-item" open>
                    <summary>Do I need to pay for inventory upfront?</summary>
                    <p className="text-muted mb-0">
                      No. With print‑on‑demand, products are only printed after a customer places an
                      order, so you don’t carry stock or risk unsold items.
                    </p>
                  </details>
                  <details className="pod-faq-item">
                    <summary>Which ecommerce platforms can I connect?</summary>
                    <p className="text-muted mb-0">
                      PrintStore can integrate with popular platforms using apps, plugins, or manual
                      order export/import workflows.
                    </p>
                  </details>
                  <details className="pod-faq-item">
                    <summary>How are shipping rates calculated?</summary>
                    <p className="text-muted mb-0">
                      Shipping rates depend on product type, weight, and destination. You can pass
                      shipping costs to customers or include them in your pricing.
                    </p>
                  </details>
                </div>
              </div>

              <div className="col-12 col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="pod-faq-list">
                  <details className="pod-faq-item" open>
                    <summary>Can I use my own branding on packaging?</summary>
                    <p className="text-muted mb-0">
                      Yes. Many products support branded packaging inserts, stickers, or labels so
                      your customers see your brand first.
                    </p>
                  </details>
                  <details className="pod-faq-item">
                    <summary>What’s the typical fulfillment time?</summary>
                    <p className="text-muted mb-0">
                      Most orders are printed and shipped within 2–5 business days, depending on the
                      product and production location.
                    </p>
                  </details>
                  <details className="pod-faq-item">
                    <summary>Can I test products before launching a full collection?</summary>
                    <p className="text-muted mb-0">
                      Absolutely. You can order samples to check quality, then publish products to your
                      store and test them with small, low‑risk drops.
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

export default Faqs;
