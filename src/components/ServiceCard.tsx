'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ServiceCardProps {
    service: {
        title: string;
        description: string;
        icon: IconDefinition;
        capabilities: string[];
        slug?: string;
    };
}

export default function ServiceCard({ service }: ServiceCardProps) {
    // Generate a gradient based on the service title (for visual variety)
    const getGradient = (title: string) => {
        const gradients = {
            'Software Engineering': 'from-blue-500 to-cyan-500',
            'Data Engineering': 'from-purple-500 to-pink-500',
            'AI/ML Engineering': 'from-green-500 to-teal-500',
            Instructor: 'from-orange-500 to-amber-500',
            // Default gradient if none match
            default: 'from-blue-500 to-purple-600',
        };

        return gradients[title as keyof typeof gradients] || gradients.default;
    };

    const gradient = getGradient(service.title);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group h-full min-h-[500px] bg-white dark:bg-slate-800/80 rounded-xl p-8 shadow-lg hover:shadow-xl
                transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
        >
            {/* Subtle gradient border effect */}
            <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300 -z-10 ${gradient}`}
            ></div>

            {/* Icon with gradient background */}
            <div className="relative mb-6">
                <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradient} opacity-20 dark:opacity-30 blur-sm`}
                ></div>
                <div
                    className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${gradient} text-white shadow-lg`}
                >
                    <FontAwesomeIcon icon={service.icon} className="w-7 h-7" />
                </div>
            </div>

            {/* Title with subtle gradient on hover */}
            <h3
                className={`text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r transition-all duration-300 ease-in-out ${gradient}`}
            >
                {service.title}
            </h3>

            {/* Description with improved typography */}
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {service.description}
            </p>

            {/* Divider */}
            <div
                className={`w-16 h-1 bg-gradient-to-r ${gradient} rounded-full mb-6`}
            ></div>

            {/* Capabilities with improved styling */}
            <ul className="list-none p-0 space-y-3 w-full">
                {service.capabilities.map((capability, index) => (
                    <li
                        key={index}
                        className="flex items-center text-slate-700 dark:text-slate-300 py-1"
                    >
                        <span
                            className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${gradient} mr-3`}
                        ></span>
                        <span>{capability}</span>
                    </li>
                ))}
            </ul>

            {/* Subtle hover effect overlay */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-300 -z-10`}
            ></div>
        </motion.div>
    );
}
