import './globals.css';
import Layout from '@/components/Layout';

export const metadata = {
  title: 'Nenad Manev Portfolio',
  description: 'Portfolio website of Nenad Manev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
