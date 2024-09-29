import React from "react";
import OwlCarousel from "react-owl-carousel"; // Optional for carousel functionality

const Home = () => {
  return (
    <div>
      {/* Top Bar Start */}
      <div className="bg-gray-900 text-white py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">
              Auto<span className="text-orange-500">Wash</span>
            </h1>
          </div>
          <div className="hidden lg:flex space-x-10">
            <div className="flex items-center space-x-2">
              <i className="far fa-clock"></i>
              <div>
                <h3 className="font-semibold">Opening Hour</h3>
                <p>Mon - Fri, 8:00 - 9:00</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa fa-phone-alt"></i>
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p>+012 345 6789</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="far fa-envelope"></i>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Bar End */}

      {/* Nav Bar Start */}
      <div className="bg-gray-800">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center p-4">
            <a href="/" className="text-white text-xl">
              MENU
            </a>
            <div className="flex space-x-4">
              <a href="/" className="text-white">
                Home
              </a>
              <a href="/about" className="text-white">
                About
              </a>
              <a href="/service" className="text-white">
                Service
              </a>
              <a href="/price" className="text-white">
                Price
              </a>
              <a href="/location" className="text-white">
                Washing Points
              </a>
              <a href="/contact" className="text-white">
                Contact
              </a>
            </div>
            <a
              href="/booking"
              className="bg-orange-500 text-white px-4 py-2 rounded"
            >
              Get Appointment
            </a>
          </nav>
        </div>
      </div>
      {/* Nav Bar End */}

      {/* Carousel Start */}
      <div className="carousel">
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          <div className="item">
            <div className="relative h-96 bg-gray-200 flex items-center justify-center">
              <img
                src="placeholder-image.jpg"
                alt="Carousel"
                className="absolute w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 text-center">
                <h3 className="text-xl text-white">Washing & Detailing</h3>
                <h1 className="text-4xl text-white font-bold">
                  Keep your Car Newer
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
                </p>
                <a
                  className="bg-orange-500 text-white px-4 py-2 mt-4 inline-block rounded"
                  href="#"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="relative h-96 bg-gray-200 flex items-center justify-center">
              <img
                src="placeholder-image.jpg"
                alt="Carousel"
                className="absolute w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 text-center">
                <h3 className="text-xl text-white">Washing & Detailing</h3>
                <h1 className="text-4xl text-white font-bold">
                  Quality Service for You
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
                </p>
                <a
                  className="bg-orange-500 text-white px-4 py-2 mt-4 inline-block rounded"
                  href="#"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
      {/* Carousel End */}

      {/* About Section */}
      <div className="about py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="about-img">
            <img
              src="placeholder-image.jpg"
              alt="About"
              className="w-full h-auto"
            />
          </div>
          <div>
            <div className="section-header">
              <p className="text-orange-500 font-bold">About Us</p>
              <h2 className="text-3xl font-bold">Car Washing and Detailing</h2>
            </div>
            <div className="about-content">
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in
                hendrerit dui, vel blandit massa.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2">
                  <i className="far fa-check-circle text-green-500"></i>
                  <span>Seats washing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="far fa-check-circle text-green-500"></i>
                  <span>Vacuum cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="far fa-check-circle text-green-500"></i>
                  <span>Interior wet cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="far fa-check-circle text-green-500"></i>
                  <span>Window wiping</span>
                </li>
              </ul>
              <a
                className="bg-orange-500 text-white px-4 py-2 mt-4 inline-block rounded"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
};

export default Home;
