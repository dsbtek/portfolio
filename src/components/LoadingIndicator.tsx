'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingIndicator() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-1 bg-blue-500 z-50"
    >
      <motion.div
        className="h-full bg-blue-600"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}