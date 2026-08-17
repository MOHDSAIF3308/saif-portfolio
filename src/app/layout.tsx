import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Saif — Web & App Developer | Lucknow, India',
  description:
    'I build websites, online stores, and mobile apps for businesses across India. No tech jargon — just results. Based in Lucknow, UP.',
  keywords: 'web developer lucknow, app developer india, website design lucknow, freelance developer UP, mobile app developer india',
  openGraph: {
    title: 'Saif — Web & App Developer',
    description: 'Websites, stores, and apps for businesses across India. No tech jargon — just results.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d0f14" />
      </head>
      <body>{children}</body>
    </html>
  );
}
