import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css';

const ApplyProgram = () => {
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
        <section className="pod-section" id="apply-program-page">
          <div className="container py-5 py-md-6">
            <div className="text-center mb-5" data-aos="fade-up">
              <h1 className="pod-section-title mb-2">Apply to the partner program</h1>
              <p className="text-muted mb-0">
                Share a few details about your audience and how you plan to promote PrintStore.
                We&apos;ll review your application and get back to you.
              </p>
            </div>

            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="50">
              <div className="col-12 col-lg-8">
                <div className="pod-card">
                  <form className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label">Full name</label>
                      <input type="text" className="form-control" placeholder="Your name" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">Work email</label>
                      <input type="email" className="form-control" placeholder="you@company.com" />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label">Company / brand</label>
                      <input type="text" className="form-control" placeholder="Company or project" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">Website or main link</label>
                      <input type="url" className="form-control" placeholder="https://" />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Audience size & type</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Tell us about your audience, customers, or community."
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <label className="form-label">How do you plan to promote PrintStore?</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Share your channels, campaigns, or ideas."
                      ></textarea>
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label">Region</label>
                      <input type="text" className="form-control" placeholder="Country or region" />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label">Anything else we should know?</label>
                      <input type="text" className="form-control" placeholder="Optional" />
                    </div>

                    <div className="col-12 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mt-3">
                      <button type="submit" className="btn btn-dark px-4">
                        Submit application
                      </button>
                      <p className="small text-muted mb-0">
                        By submitting, you agree to be contacted about the PrintStore partner program.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="100">
              <p className="small text-muted mb-2">Already a partner?</p>
              <Link to="/partner-program" className="small">Back to partner overview</Link>
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

export default ApplyProgram;
