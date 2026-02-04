import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'พอร์ตโฟลิโอ Full Stack Developer | รับทำเว็บไซต์ MERN Stack',
  description: 'นักพัฒนา Full Stack ผู้เชี่ยวชาญ MERN (MongoDB, Express, React, Node.js) รับทำเว็บไซต์ แอปพลิเคชัน และระบบหลังบ้านครบวงจร',
  keywords: ['Full Stack Developer', 'MERN Stack', 'รับทำเว็บไซต์', 'Next.js', 'React', 'Node.js', 'MongoDB', 'นักพัฒนาเว็บไซต์', 'โปรแกรมเมอร์'],
  authors: [{ name: 'Sanan' }],
  creator: 'Sanan',
  publisher: 'Sanan',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'พอร์ตโฟลิโอ Full Stack Developer | รับทำเว็บไซต์ MERN Stack',
    description: 'นักพัฒนา Full Stack มืออาชีพ สร้างสรรค์เว็บไซต์คุณภาพสูงด้วย MERN Stack',
    url: '/',
    siteName: 'พอร์ตโฟลิโอ Full Stack Developer',
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'พอร์ตโฟลิโอ Full Stack Developer',
    description: 'รับทำเว็บไซต์และแอปพลิเคชันด้วยเทคโนโลยีทันสมัย',
    creator: '@yoursocialhandle', // Replace with actual handle if available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="dark scroll-smooth">
      <body
        suppressHydrationWarning
        className={cn(
          'min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/20 selection:text-primary',
          outfit.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
