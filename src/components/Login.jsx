import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css';

const Login = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mode, setMode] = useState('login'); // 'login' | 'signup'

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
        <section className="pod-section" id="login-page">
          <div className="container py-5 py-md-6 d-flex justify-content-center">
            <div className="col-12 col-md-7 col-lg-5" data-aos="fade-up">
              <div className="pod-card h-100">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h1 className="pod-section-title mb-0" style={{ fontSize: '1.5rem' }}>
                    {mode === 'login' ? 'Log in to PrintStore' : 'Create your PrintStore account'}
                  </h1>
                </div>

                <div className="btn-group w-100 mb-4" role="group">
                  <button
                    type="button"
                    className={`btn btn-sm w-50 ${mode === 'login' ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => setMode('login')}
                  >
                    Log in
                  </button>
                  <button
                    type="button"
                    className={`btn btn-sm w-50 ${mode === 'signup' ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => setMode('signup')}
                  >
                    Sign up
                  </button>
                </div>

                {mode === 'login' ? (
                  <form className="d-flex flex-column gap-3">
                    <div>
                      <label className="form-label mb-1">Email</label>
                      <input type="email" className="form-control" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="form-label mb-1">Password</label>
                      <input type="password" className="form-control" placeholder="••••••••" />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label className="form-check-label small" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                      <button type="button" className="btn btn-link p-0 small">
                        Forgot password?
                      </button>
                    </div>
                    <button type="submit" className="btn btn-dark w-100">
                      Continue
                    </button>
                    <p className="text-muted small mb-0 text-center">
                      New to PrintStore?{' '}
                      <button
                        type="button"
                        className="btn btn-link p-0 align-baseline"
                        onClick={() => setMode('signup')}
                      >
                        Create an account
                      </button>
                    </p>
                  </form>
                ) : (
                  <form className="d-flex flex-column gap-3">
                    <div>
                      <label className="form-label mb-1">Full name</label>
                      <input type="text" className="form-control" placeholder="Alex Doe" />
                    </div>
                    <div>
                      <label className="form-label mb-1">Email</label>
                      <input type="email" className="form-control" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="form-label mb-1">Password</label>
                      <input type="password" className="form-control" placeholder="Create a password" />
                    </div>
                    <div>
                      <label className="form-label mb-1">Store or brand name</label>
                      <input type="text" className="form-control" placeholder="Your brand" />
                    </div>
                    <button type="submit" className="btn btn-dark w-100">
                      Create account
                    </button>
                    <p className="text-muted small mb-0 text-center">
                      Already have an account?{' '}
                      <button
                        type="button"
                        className="btn btn-link p-0 align-baseline"
                        onClick={() => setMode('login')}
                      >
                        Log in
                      </button>
                    </p>
                  </form>
                )}
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

export default Login;
