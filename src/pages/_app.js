import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <Component {...pageProps} />
      </main>
    </>
  );
}