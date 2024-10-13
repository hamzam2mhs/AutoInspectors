import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h4 className="text-xl font-bold">WeInspect4U</h4>
                    <p>Winnipeg, MB, Canada</p>
                    <p>&copy; {new Date().getFullYear()} WeInspect4U. All rights reserved.</p>
                </div>
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h4 className="text-xl font-bold">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/services" className="hover:underline">Our Services</a></li>
                        <li><a href="/location" className="hover:underline">Location</a></li>
                        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>
                <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold">Contact</h4>
                    <p>Email: info@weinspect4u.com</p>
                    <p>Phone: (204) 123-4567</p>
                    <p>Hours: Mon-Fri 9:00 am - 5:00 pm</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
