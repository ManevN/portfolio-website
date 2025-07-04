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
      <body className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900 transition-colors">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
