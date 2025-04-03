'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSun,
    faMoon,
    faBars,
    faXmark,
    faCode,
    faEnvelope,
    faHome,
    faLaptopCode,
    faDiagramProject,
    faBlog,
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { label: 'Home', path: '/', icon: faHome },
    { label: 'Services', path: '/#services', icon: faLaptopCode },
    { label: 'Projects', path: '/#projects', icon: faDiagramProject },
    { label: 'Blog', path: '/#blog', icon: faBlog },
    { label: 'Contact', path: '/#contact', icon: faEnvelope },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mounted, setMounted] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled for navbar background
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            // Calculate scroll progress
            const scrollHeight =
                document.body.scrollHeight - window.innerHeight;
            const progress =
                scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    // Handle theme mounting
    useEffect(() => {
        setMounted(true);
    }, []);

    // State to track the active section based on scroll position
    const [activeSection, setActiveSection] = useState('/');

    // Initialize active section based on scroll position
    useEffect(() => {
        // Set home as active if we're at the top of the page
        if (typeof window !== 'undefined') {
            setActiveSection(window.scrollY < 100 ? '/' : '');
        }
    }, []);

    // For debugging - log active section changes
    useEffect(() => {
        console.log('Current active section:', activeSection);
    }, [activeSection]);

    // Handle scroll to detect active section
    useEffect(() => {
        const handleSectionScroll = () => {
            // Get all sections with IDs that match our nav items
            const sections = navItems
                .filter((item) => item.path.includes('#'))
                .map((item) => {
                    const id = item.path.split('#')[1];
                    const element = document.getElementById(id);
                    if (element) {
                        return { id, element, path: item.path };
                    }
                    return null;
                })
                .filter(Boolean);

            // Calculate which section is currently in view
            // Add offset for navbar height (adjust this value based on your navbar height)
            const navbarHeight = 80;
            const scrollPosition = window.scrollY + navbarHeight;

            // Find the current active section
            for (const section of sections) {
                if (section) {
                    const { element, path } = section;
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        if (activeSection !== path) {
                            console.log('Active section changed to:', path);
                            setActiveSection(path);
                        }
                        return;
                    }
                }
            }

            // Check if any section is in view
            let sectionInView = false;

            // If we're at the top of the page, set home as active
            // Adjust this threshold based on your hero section height
            const heroSectionThreshold = 500;
            if (scrollPosition < heroSectionThreshold) {
                if (activeSection !== '/') {
                    console.log('Active section changed to: Home');
                    setActiveSection('/');
                }
                sectionInView = true;
                // Early return to ensure home is always active when at the top
                return;
            }
            // If we're at the bottom, set the last section as active
            else if (
                scrollPosition + window.innerHeight >=
                document.body.offsetHeight - 100
            ) {
                const contactPath =
                    navItems.find((item) => item.path.includes('#contact'))
                        ?.path || '';
                if (activeSection !== contactPath) {
                    console.log('Active section changed to: Contact');
                    setActiveSection(contactPath);
                }
                sectionInView = true;
            }

            // If no section is in view and we're not at the top or bottom,
            // clear the active section to ensure no nav item is highlighted
            if (
                !sectionInView &&
                sections.length > 0 &&
                !sections.some((section) => {
                    if (!section) return false;
                    const { element } = section;
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    return (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    );
                })
            ) {
                // Only clear if we're not at the top (which would be home)
                if (scrollPosition >= heroSectionThreshold && activeSection) {
                    console.log('No section in view, clearing active section');
                    setActiveSection('');
                }
            }
        };

        // Initial check
        handleSectionScroll();

        window.addEventListener('scroll', handleSectionScroll);
        return () => window.removeEventListener('scroll', handleSectionScroll);
    }, [activeSection, navItems]);

    // Check if a nav item is active
    const isActive = (path: string) => {
        // For the home page - active when at the top of the page or explicitly set to home
        if (path === '/') {
            // Check if we're at the top of the page (scrollY is small) or if home is explicitly set as active
            return window.scrollY < 100 || activeSection === '/';
        }

        // For hash links (sections on the same page)
        if (path.includes('#')) {
            return activeSection === path;
        }

        // For other pages
        return pathname.startsWith(path) || pathname === path;
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg'
                    : 'bg-transparent dark:bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md group-hover:shadow-blue-500/20 transition-all duration-300">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    className="w-5 h-5"
                                />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-blue-200 group-hover:from-blue-500 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-500 transition-all duration-300">
                                Muhammad Salihu
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <motion.div
                                key={item.path}
                                initial={false}
                                animate={{
                                    scale: isActive(item.path) ? 1.05 : 1,
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    href={item.path}
                                    className={`px-4 py-2 mx-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1 nav-indicator ${
                                        isActive(item.path) ? 'active' : ''
                                    } ${
                                        isActive(item.path)
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:shadow-blue-500/20'
                                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                                    onClick={() => {
                                        // For home link, always set active and scroll to top
                                        if (item.path === '/') {
                                            setActiveSection('/');
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth',
                                            });
                                        }
                                        // For hash links, set the corresponding section as active
                                        else if (item.path.includes('#')) {
                                            setActiveSection(item.path);
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        className="w-4 h-4"
                                    />
                                    <span>{item.label}</span>
                                </Link>
                            </motion.div>
                        ))}

                        {/* Theme Toggle Button with enhanced styling */}
                        {mounted && (
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                    setTheme(
                                        theme === 'dark' ? 'light' : 'dark',
                                    )
                                }
                                className="p-2 ml-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-600/20 text-slate-700 dark:text-slate-200 hover:from-blue-500/20 hover:to-purple-600/20 dark:hover:from-blue-500/30 dark:hover:to-purple-600/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-700"
                                aria-label="Toggle theme"
                            >
                                <div className="relative">
                                    {/* Sun icon with animation */}
                                    <motion.div
                                        initial={{
                                            opacity: theme === 'dark' ? 1 : 0,
                                            rotate: theme === 'dark' ? 0 : 90,
                                        }}
                                        animate={{
                                            opacity: theme === 'dark' ? 1 : 0,
                                            rotate: theme === 'dark' ? 0 : 90,
                                        }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <FontAwesomeIcon
                                            icon={faSun}
                                            className="w-5 h-5"
                                        />
                                    </motion.div>

                                    {/* Moon icon with animation */}
                                    <motion.div
                                        initial={{
                                            opacity: theme === 'light' ? 1 : 0,
                                            rotate: theme === 'light' ? 0 : -90,
                                        }}
                                        animate={{
                                            opacity: theme === 'light' ? 1 : 0,
                                            rotate: theme === 'light' ? 0 : -90,
                                        }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center justify-center"
                                    >
                                        <FontAwesomeIcon
                                            icon={faMoon}
                                            className="w-5 h-5"
                                        />
                                    </motion.div>
                                </div>
                            </motion.button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        {mounted && (
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                    setTheme(
                                        theme === 'dark' ? 'light' : 'dark',
                                    )
                                }
                                className="p-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-600/20 text-slate-700 dark:text-slate-200 hover:from-blue-500/20 hover:to-purple-600/20 dark:hover:from-blue-500/30 dark:hover:to-purple-600/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 mr-3 shadow-sm border border-slate-200 dark:border-slate-700"
                                aria-label="Toggle theme"
                            >
                                <div className="relative">
                                    {/* Sun icon with animation */}
                                    <motion.div
                                        initial={{
                                            opacity: theme === 'dark' ? 1 : 0,
                                            rotate: theme === 'dark' ? 0 : 90,
                                        }}
                                        animate={{
                                            opacity: theme === 'dark' ? 1 : 0,
                                            rotate: theme === 'dark' ? 0 : 90,
                                        }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <FontAwesomeIcon
                                            icon={faSun}
                                            className="w-5 h-5"
                                        />
                                    </motion.div>

                                    {/* Moon icon with animation */}
                                    <motion.div
                                        initial={{
                                            opacity: theme === 'light' ? 1 : 0,
                                            rotate: theme === 'light' ? 0 : -90,
                                        }}
                                        animate={{
                                            opacity: theme === 'light' ? 1 : 0,
                                            rotate: theme === 'light' ? 0 : -90,
                                        }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center justify-center"
                                    >
                                        <FontAwesomeIcon
                                            icon={faMoon}
                                            className="w-5 h-5"
                                        />
                                    </motion.div>
                                </div>
                            </motion.button>
                        )}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-600/20 text-slate-700 dark:text-slate-200 hover:from-blue-500/20 hover:to-purple-600/20 dark:hover:from-blue-500/30 dark:hover:to-purple-600/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-700"
                            aria-label="Toggle menu"
                        >
                            <FontAwesomeIcon
                                icon={isMenuOpen ? faXmark : faBars}
                                className="w-5 h-5"
                            />
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu with Animation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-b-2xl shadow-lg overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <div className="px-4 py-5 space-y-3">
                                {navItems.map((item) => (
                                    <motion.div
                                        key={item.path}
                                        initial={false}
                                        animate={{
                                            x: isActive(item.path) ? 4 : 0,
                                        }}
                                        transition={{ duration: 0.2 }}
                                        className="w-full"
                                    >
                                        <Link
                                            href={item.path}
                                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                                                isActive(item.path)
                                                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 font-bold'
                                                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400'
                                            }`}
                                            onClick={() => {
                                                // Close the mobile menu
                                                setIsMenuOpen(false);

                                                // For home link, always set active and scroll to top
                                                if (item.path === '/') {
                                                    setActiveSection('/');
                                                    window.scrollTo({
                                                        top: 0,
                                                        behavior: 'smooth',
                                                    });
                                                }
                                                // For hash links, set the corresponding section as active
                                                else if (
                                                    item.path.includes('#')
                                                ) {
                                                    setActiveSection(item.path);
                                                }
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={item.icon}
                                                className="w-5 h-5"
                                            />
                                            <span>{item.label}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Scroll Progress Indicator */}
            <div
                className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600 origin-left transform-gpu transition-transform duration-300"
                style={{ transform: `scaleX(${scrollProgress})` }}
            />
        </nav>
    );
}
