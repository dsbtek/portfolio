'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
    faCode,
    faEnvelope,
    faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'Projects', path: '/#projects' },
    { label: 'Blog', path: '/#blog' },
    { label: 'Contact', path: '/#contact' },
];

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/dsbtek',
        icon: faGithub,
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/muhammad-salihu',
        icon: faLinkedin,
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/dsbtek3818',
        icon: faTwitter,
    },
];

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div className="absolute top-0 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
            <div className="absolute bottom-0 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Logo and description */}
                    <div className="col-span-1 md:col-span-2">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 group mb-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md group-hover:shadow-blue-500/20 transition-all duration-300">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    className="w-5 h-5"
                                />
                            </div>
                            <span className="text-xl font-bold text-white">
                                Muhammad Salihu
                            </span>
                        </Link>
                        <p className="text-slate-400 mb-6 max-w-md">
                            Building innovative software solutions, data
                            engineering pipelines, and AI/ML models to solve
                            complex problems.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-white transition-colors duration-300"
                                    aria-label={link.name}
                                >
                                    <FontAwesomeIcon
                                        icon={link.icon}
                                        className="w-6 h-6"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="text-slate-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Contact
                        </h3>
                        <a
                            href="mailto:dsbtek@gmail.com"
                            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-300 mb-3"
                        >
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="w-5 h-5"
                            />
                            <span>dsbtek@gmail.com</span>
                        </a>
                        <a
                            href="/#contact"
                            className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-800 my-8"></div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <p>© {currentYear} Muhammad Salihu. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">
                        Built with Next.js and Tailwind CSS
                    </p>
                </div>
            </div>

            {/* Scroll to top button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 z-50"
                        aria-label="Scroll to top"
                    >
                        <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5" />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
}
