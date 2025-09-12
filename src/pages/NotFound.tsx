import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="pks-card-elevated p-12 rounded-2xl">
            <h1 className="text-6xl font-bold mb-6 text-gradient-pks">404</h1>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Halaman Tidak Ditemukan</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Maaf, halaman yang Anda cari tidak dapat ditemukan. 
              Mungkin halaman telah dipindahkan atau URL yang Anda masukkan salah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors shadow-lg"
              >
                Kembali ke Beranda
              </a>
              <a 
                href="/events" 
                className="inline-flex items-center px-6 py-3 border border-border hover:bg-card text-foreground font-semibold rounded-lg transition-colors"
              >
                Lihat Event
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
