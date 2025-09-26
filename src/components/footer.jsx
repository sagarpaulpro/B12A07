import React from 'react';

const DarkFooter = () => {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

                    {/* Column 1: CS — Ticket System (Logo/Brand) and Description */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold text-white mb-4">CS — Ticket System</h3>
                        <p className="text-sm leading-relaxed max-w-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    {/* Column 2: Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition duration-150">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Our Mission</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Contact Sales</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition duration-150">Products & Services</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Customer Stories</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Download Apps</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Information Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Information</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition duration-150">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Join Us</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Social Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Social Links</h4>
                        <ul className="space-y-2 text-sm">
                            {/* Note: I'm using placeholder text/symbols for the icons */}
                            <li><a href="#" className="hover:text-white transition duration-150 flex items-center">
                                <span className="mr-2">X</span> @CS — Ticket System
                            </a></li>
                            <li><a href="#" className="hover:text-white transition duration-150 flex items-center">
                                <span className="mr-2">in</span> @CS — Ticket System
                            </a></li>
                            <li><a href="#" className="hover:text-white transition duration-150 flex items-center">
                                <span className="mr-2">f</span> @CS — Ticket System
                            </a></li>
                            <li><a href="#" className="hover:text-white transition duration-150 flex items-center">
                                <span className="mr-2">@</span> support@cst.com
                            </a></li>
                        </ul>
                    </div>

                </div>

                {/* Copyright Section */}
                <div className="mt-10 pt-6 border-t border-gray-800 text-center">
                    <p className="text-sm text-gray-500">
                        © 2025 CS — Ticket System. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default DarkFooter;