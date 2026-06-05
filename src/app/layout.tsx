
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FAU-G Domination | Elite Tactical Warfare',
  description: 'Experience high-stakes military combat in FAU-G Domination. Join the frontlines today.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Saira+Stencil+One&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground">
        <div className="fixed inset-0 pointer-events-none scanline-overlay z-50 opacity-10"></div>
        {children}
      </body>
    </html>
  );
}
