import './globals.css'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Salihu — AI / Full-stack Engineer',
    template: '%s | Muhammad Salihu'
  },
  description: 'Full-stack engineer specializing in AI integration, modern web technologies, and scalable applications. 5+ years of experience building intelligent solutions.',
  keywords: ['Muhammad Salihu', 'Full-stack Engineer', 'AI Engineer', 'React', 'Next.js', 'TypeScript', 'Python', 'Machine Learning', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Muhammad Salihu', url: 'https://github.com/dsbtek' }],
  creator: 'Muhammad Salihu',
  publisher: 'Muhammad Salihu',
  metadataBase: new URL('https://muhammad-salihu.vercel.app'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammad-salihu.vercel.app', // Update with your actual domain
    title: 'Muhammad Salihu — AI / Full-stack Engineer',
    description: 'Full-stack engineer specializing in AI integration, modern web technologies, and scalable applications. 5+ years of experience building intelligent solutions.',
    siteName: 'Muhammad Salihu Portfolio',
    images: [
      {
        url: '/images/og-image.jpg', // We'll create this
        width: 1200,
        height: 630,
        alt: 'Muhammad Salihu - AI / Full-stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Salihu — AI / Full-stack Engineer',
    description: 'Full-stack engineer specializing in AI integration, modern web technologies, and scalable applications.',
    creator: '@muhammad_dev', // Update with your actual Twitter handle
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code', // Add after setting up Google Search Console
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-terminal text-gray-200 font-sans">
        {children}
      </body>
    </html>
  )
}
