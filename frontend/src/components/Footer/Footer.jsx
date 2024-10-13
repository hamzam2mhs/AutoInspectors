import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 mt-10"> {/* Adjust mt-10 as needed */}

            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="text-center md:text-left">
                    <h4 className="text-2xl font-bold">WeInspect4U</h4>
                    <p className="text-lg mt-2">Winnipeg, MB, Canada</p>
                    <p className="text-sm mt-1">&copy; {new Date().getFullYear()} WeInspect4U. All rights reserved.</p>
                </div>
                <div className="text-center md:text-left">
                    <h4 className="text-2xl font-bold">Contact</h4>
                    <p className="text-lg mt-2">Email: info@weinspect4u.com</p>
                    <p className="text-lg">Phone: (204) 123-4567</p>
                    <p className="text-lg">Hours: Mon-Fri 9:00 am - 5:00 pm</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
