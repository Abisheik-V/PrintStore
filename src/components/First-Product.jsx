import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css';

const FirstProduct = () => {
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
        <section className="pod-section" id="first-product-page">
          <div className="container py-5 py-md-6">
            <div className="row g-4 align-items-start mb-5">
              <div className="col-lg-6" data-aos="fade-right">
                <h1 className="pod-section-title mb-3">Create your first product</h1>
                <p className="text-muted mb-3">
                  Use this guided flow to design and launch your very first print‑on‑demand product
                  with PrintStore.
                </p>
                <p className="text-muted mb-4">
                  You can start with a single bestseller—like a tee, poster, or mug—and expand your
                  catalog as you learn what your audience loves.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Link to="/login" className="btn btn-dark btn-lg">Sign in to start</Link>
                  <Link to="/products" className="btn btn-outline-dark btn-lg">Explore templates</Link>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <div className="pod-card h-100">
                  <h5 className="mb-3">First product checklist</h5>
                  <ol className="text-muted mb-0">
                    <li>Pick a product type (tee, hoodie, mug, poster, etc.).</li>
                    <li>Upload your design in high resolution.</li>
                    <li>Adjust placement, size, and background options.</li>
                    <li>Add mockups and product photos to your listing.</li>
                    <li>Write a clear title and description for your audience.</li>
                    <li>Set your price and review your profit margin.</li>
                    <li>Save the product and publish it to your store.</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="row g-4" data-aos="fade-up" data-aos-delay="150">
              <div className="col-12 col-md-4">
                <div className="pod-step-card h-100">
                  <span className="pod-step-number">1</span>
                  <h5>Choose a product</h5>
                  <p className="text-muted mb-0">
                    Start with a proven format like tees or mugs that your audience already expects.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="pod-step-card h-100">
                  <span className="pod-step-number">2</span>
                  <h5>Upload your artwork</h5>
                  <p className="text-muted mb-0">
                    Use high‑resolution files and test different placements to find the best look.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="pod-step-card h-100">
                  <span className="pod-step-number">3</span>
                  <h5>Preview & publish</h5>
                  <p className="text-muted mb-0">
                    Review mockups, confirm pricing, and push the product live to your store.
                  </p>
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

export default FirstProduct;
