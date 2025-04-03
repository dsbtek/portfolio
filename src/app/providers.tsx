'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
    // Add state to handle mounting to prevent hydration mismatch
    const [mounted, setMounted] = useState(false);

    // Set mounted to true when component mounts
    useEffect(() => {
        setMounted(true);
    }, []);

    // Improved theme provider with persistence
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
            storageKey="portfolio-theme-preference"
        >
            {/* Only render children after mounting to prevent hydration mismatch */}
            {mounted ? children : null}
        </ThemeProvider>
    );
}
