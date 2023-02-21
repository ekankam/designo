import { Jost } from '@next/font/google';
import './globals.css';

const jost = Jost({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={jost.className}>
        <div className="max-w-[1440px] min-w-[375px] w-full min-h-screen bg-primary-white text-16">
          <p>Navigation</p>
          <main>{children}</main>
          <footer>Footer</footer>
        </div>
      </body>
    </html>
  );
}
