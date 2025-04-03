'use client';

import { motion } from 'framer-motion';

interface ServiceGridProps {
    children: React.ReactNode;
}

export default function ServiceGrid({ children }: ServiceGridProps) {
    return (
        <div className="w-full">
            <div className="flex flex-wrap justify-center gap-8 md:gap-10 mx-auto max-w-7xl">
                {children}
            </div>
        </div>
    );
}
