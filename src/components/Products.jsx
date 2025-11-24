import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css';

const Products = () => {
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
        <section className="pod-section" id="products-page">
          <div className="container py-5 py-md-6">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h2 className="pod-section-title mb-1">All products</h2>
                <p className="text-muted mb-0">Browse the full range of print-on-demand items.</p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-delay="0">
                <div className="pod-card pod-card-product h-100">
                  <img
                    className="pod-card-img pod-product-thumb-tee"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vLS0_TZGQjTDTmn9ar8Zr6S0muSDoPsp6p5jciXZXLhinN8PRws9_mi7J_dMsrCl2qg&usqp=CAU"
                    alt="T-Shirts & Hoodies"
                  />
                  <div className="pod-card-body">
                    <h5 className="pod-card-product-title">T‑Shirts & Hoodies</h5>
                    <p className="text-muted mb-2">
                      Soft, premium garments in multiple colors and sizes.
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <span className="pod-card-product-price">From $18.00</span>
                      <button className="btn btn-sm btn-outline-dark">View details</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="pod-card pod-card-product h-100">
                  <img
                    className="pod-card-img pod-product-thumb-mug"
                    src="https://m.media-amazon.com/images/I/71mBAnz9-hL._AC_UF894,1000_QL80_.jpg"
                    alt="Drinkware"
                  />
                  <div className="pod-card-body">
                    <h5 className="pod-card-product-title">Drinkware</h5>
                    <p className="text-muted mb-2">
                      Mugs, tumblers, and bottles that showcase your designs.
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <span className="pod-card-product-price">From $12.50</span>
                      <button className="btn btn-sm btn-outline-dark">View details</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="pod-card pod-card-product h-100">
                  <img
                    className="pod-card-img pod-product-thumb-poster"
                    src="https://m.media-amazon.com/images/I/71ynRexZGOL.jpg"
                    alt="Wall Art & Posters"
                  />
                  <div className="pod-card-body">
                    <h5 className="pod-card-product-title">Wall Art & Posters</h5>
                    <p className="text-muted mb-2">
                      Posters and canvas prints for art and photography.
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <span className="pod-card-product-price">From $15.00</span>
                      <button className="btn btn-sm btn-outline-dark">View details</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="pod-card pod-card-product h-100">
                  <img
                    className="pod-card-img pod-product-thumb-tee"
                    src="https://printbebo.in/wp-content/uploads/2022/01/129-Green-Marble-Print-Phone-Case-with-Holder.jpg"
                    alt="Phone Cases"
                  />
                  <div className="pod-card-body">
                    <h5 className="pod-card-product-title">Phone Cases</h5>
                    <p className="text-muted mb-2">
                      Protective cases with edge-to-edge prints for popular phone models.
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <span className="pod-card-product-price">From $16.00</span>
                      <button className="btn btn-sm btn-outline-dark">View details</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-delay="400">
                <div className="pod-card pod-card-product h-100">
                  <img
                    className="pod-card-img pod-product-thumb-mug"
                    src="https://www.yourprint.in/wp-content/uploads/2024/03/white.jpg"
                    alt="Tote Bags"
                  />
                  <div className="pod-card-body">
                    <h5 className="pod-card-product-title">Tote Bags</h5>
                    <p className="text-muted mb-2">
                      Reusable fabric totes for everyday carry and merch bundles.
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <span className="pod-card-product-price">From $14.00</span>
                      <button className="btn btn-sm btn-outline-dark">View details</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-delay="500">
                <div className="pod-card pod-card-product h-100">
                  <img
                    className="pod-card-img pod-product-thumb-poster"
                    src="https://stickerme.in/wp-content/uploads/2023/04/Logo-Stickers-at-stickerme.jpg"
                    alt="Stickers"
                  />
                  <div className="pod-card-body">
                    <h5 className="pod-card-product-title">Stickers</h5>
                    <p className="text-muted mb-2">
                      Die-cut stickers perfect for laptops, water bottles, and packaging.
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <span className="pod-card-product-price">From $4.00</span>
                      <button className="btn btn-sm btn-outline-dark">View details</button>
                    </div>
                  </div>
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

export default Products;
