import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css';

const Pricing = () => {
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
        <section className="pod-section" id="pricing-page">
          <div className="container py-5 py-md-6">
            <div className="text-center mb-5" data-aos="fade-up">
              <h1 className="pod-section-title mb-2">Pricing & margins</h1>
              <p className="text-muted mb-0">
                Understand how base costs, your margins, and final retail prices work with PrintStore.
              </p>
            </div>

            <div className="row g-4 mb-5" data-aos="fade-up" data-aos-delay="50">
              <div className="col-12 col-md-4">
                <div className="pod-card h-100 text-center">
                  <h5 className="mb-2">Starter</h5>
                  <p className="text-muted small mb-3">Perfect for new creators testing ideas.</p>
                  <h3 className="mb-1">$0</h3>
                  <p className="text-muted mb-3">per month</p>
                  <ul className="pod-list text-muted mb-4 text-start">
                    <li>Pay only base product + shipping per order.</li>
                    <li>Up to 50 active products.</li>
                    <li>Standard production & shipping speeds.</li>
                  </ul>
                  <Link to="/start-selling" className="btn btn-outline-dark w-100">Start free</Link>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="pod-card h-100 text-center border border-dark-subtle">
                  <span className="badge bg-dark text-light mb-2">Most popular</span>
                  <h5 className="mb-2">Growth</h5>
                  <p className="text-muted small mb-3">For growing brands and busy shops.</p>
                  <h3 className="mb-1">$29</h3>
                  <p className="text-muted mb-3">per month</p>
                  <ul className="pod-list text-muted mb-4 text-start">
                    <li>Lower base costs on top sellers.</li>
                    <li>Up to 500 active products.</li>
                    <li>Priority production in peak seasons.</li>
                  </ul>
                  <Link to="/start-selling" className="btn btn-dark w-100">Choose Growth</Link>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="pod-card h-100 text-center">
                  <h5 className="mb-2">Scale</h5>
                  <p className="text-muted small mb-3">For established brands and teams.</p>
                  <h3 className="mb-1">Talk to us</h3>
                  <p className="text-muted mb-3">custom pricing</p>
                  <ul className="pod-list text-muted mb-4 text-start">
                    <li>Volume‑based discounts across your catalog.</li>
                    <li>Dedicated account and support team.</li>
                    <li>Advanced routing and brand options.</li>
                  </ul>
                  <button className="btn btn-outline-dark w-100" type="button">Contact sales</button>
                </div>
              </div>
            </div>

            <div className="row g-4" data-aos="fade-up" data-aos-delay="100">
              <div className="col-12 col-lg-6">
                <div className="pod-card h-100">
                  <h5 className="mb-3">How margins work</h5>
                  <ul className="pod-list text-muted mb-0">
                    <li>Each product has a base cost that covers printing and materials.</li>
                    <li>You choose the retail price in your store.</li>
                    <li>Your profit per order is retail price minus base cost and fees.</li>
                    <li>You can set different margins for different products or collections.</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="pod-card h-100">
                  <h5 className="mb-3">Example pricing breakdown</h5>
                  <ul className="pod-list text-muted mb-0">
                    <li>Base cost (premium tee): <strong>$14.00</strong></li>
                    <li>Your store price: <strong>$28.00</strong></li>
                    <li>Your gross margin: <strong>$14.00</strong> per item before platform fees.</li>
                    <li>Adjust pricing to match your audience and positioning.</li>
                  </ul>
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

export default Pricing;
