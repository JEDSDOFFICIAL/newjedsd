import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '../context/AuthProvider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

// Metadata configuration
export const metadata: Metadata = {
  title: "JEDSD - Journal of Embedded and Digital System Design",
  description:
    "Journal of Embedded and Digital System Design. A pioneering platform dedicated to advancing the fields of embedded systems and digital design. At JEDSD, we aim to bridge the gap between innovation and application by providing insightful research, expert analysis, and cutting-edge solutions.",
  icons: {
    icon: [
      {
        url: "/logojedsd.jpg",
      },
    ],
  },
  other: {
    "google-site-verification": "P2Y8X-_uCxmaPSyTZKfeZsv6tULWuEao05ezrbrwsGk",
   },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" >
      <AuthProvider>
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}

