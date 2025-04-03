'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { projects, type Project } from '@/data/projects';
import { blogPosts } from '@/data/blog';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import BlogPostCard from '@/components/BlogPostCard';
import Image from 'next/image';
// InfiniteScroll is no longer used for Services section
// import InfiniteScroll from '@/components/InfiniteScroll';
import ServiceGrid from '@/components/ServiceGrid';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Home() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <LoadingSpinner />;
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-slate-800 text-white px-4 py-16 overflow-hidden">
                {/* Background Pattern with improved opacity */}
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-15 z-0"></div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
                    {/* Image Container with enhanced styling */}
                    <div className="w-full md:w-5/12 relative order-2 md:order-1 mt-12 md:mt-0">
                        <div className="relative">
                            {/* Decorative ring */}
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-lg"></div>
                            <div className="w-64 h-64 md:w-[400px] md:h-[400px] mx-auto rounded-full overflow-hidden relative shadow-2xl border-4 border-white/10 transform transition-all duration-500 hover:scale-105">
                                <Image
                                    src="/images/12.jpg"
                                    alt="Muhammad Salihu"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Content with improved hierarchy */}
                    <div className="w-full md:w-7/12 text-center md:text-left space-y-8 order-1 md:order-2">
                        {/* Eyebrow text */}
                        <p className="text-blue-400 font-semibold tracking-wider uppercase text-sm md:text-base animate-fade-in animation-delay-300">
                            Software Engineer & Data Scientist
                        </p>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none animate-fade-in">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
                                Crafting Digital
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                Excellence
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto md:mx-0 animate-fade-in animation-delay-600">
                            I build robust software, engineer data solutions,
                            and develop AI/ML models to drive innovation.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start animate-fade-in animation-delay-900">
                            <a
                                href="#services"
                                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 text-lg"
                            >
                                Explore Services
                            </a>
                            <a
                                href="#contact"
                                className="inline-block bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 transform hover:scale-105 text-lg"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section
                id="services"
                className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden relative"
            >
                {/* Background decorative elements */}
                <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-40 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob"></div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    {/* Section header with improved hierarchy */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm md:text-base mb-3 animate-fade-in">
                            What I Offer
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-blue-200">
                                Services & Expertise
                            </span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                            Specialized solutions tailored to your technical
                            needs, from software development to AI
                            implementation
                        </p>
                    </div>

                    {/* Cards with improved styling - centered grid layout */}
                    <div>
                        <ServiceGrid>
                            {services.map((service, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="w-full sm:w-[340px] md:w-[380px] lg:w-[400px]"
                                    key={index}
                                >
                                    <ServiceCard service={service} />
                                </motion.div>
                            ))}
                        </ServiceGrid>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section
                id="projects"
                className="py-20 md:py-32 px-4 bg-gray-50 dark:bg-slate-800 relative"
            >
                {/* Background decorative elements */}
                <div className="absolute top-40 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-5 animate-blob"></div>
                <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-5 animate-blob animation-delay-2000"></div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    {/* Section header with improved hierarchy */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm md:text-base mb-3 animate-fade-in">
                            My Work
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-blue-200">
                                Featured Projects
                            </span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                            A showcase of my recent work across various domains
                            and technologies
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {projects.slice(0, 3).map((project: Project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a
                            href="/projects"
                            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 text-lg"
                        >
                            View All Projects
                        </a>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section
                id="blog"
                className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 relative"
            >
                {/* Background decorative elements */}
                <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob"></div>
                <div className="absolute bottom-40 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000"></div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    {/* Section header with improved hierarchy */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm md:text-base mb-3 animate-fade-in">
                            Knowledge Sharing
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-blue-200">
                                Latest Articles
                            </span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                            Insights and tutorials on software development, data
                            engineering, and AI/ML
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {blogPosts.slice(0, 3).map((post) => (
                            <BlogPostCard key={post.slug} post={post} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a
                            href="/blog"
                            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 text-lg"
                        >
                            View All Posts
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="py-20 md:py-32 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 relative overflow-hidden"
            >
                {/* Background decorative elements */}
                <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob"></div>
                <div className="absolute bottom-40 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Section header with improved hierarchy */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm md:text-base mb-3 animate-fade-in">
                            Get In Touch
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-blue-200">
                                Let's Work Together
                            </span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                            Interested in collaborating? Let's discuss how I can
                            help bring your ideas to life.
                        </p>
                    </div>

                    {/* Contact card with shadow and gradient border */}
                    <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
                        {/* Subtle gradient border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-5 dark:opacity-10"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
                                <a
                                    href="mailto:dsbtek@gmail.com"
                                    className="w-full md:w-auto inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 text-center"
                                >
                                    Send Me an Email
                                </a>
                                <a
                                    href="https://docs.google.com/document/d/1p75P_4zr3VnEJoQ6OGS-k0TeI1HEAQr5mUe6QBQbzU0/edit?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-auto inline-block bg-transparent border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Download Resume
                                </a>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
                                <div className="text-center">
                                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                                        Connect with me
                                    </p>
                                    <div className="flex justify-center gap-6">
                                        <a
                                            href="https://github.com/dsbtek"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors duration-300"
                                            aria-label="GitHub"
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/dsbtek"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors duration-300"
                                            aria-label="LinkedIn"
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://twitter.com/dsbtek3818"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors duration-300"
                                            aria-label="Twitter"
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
