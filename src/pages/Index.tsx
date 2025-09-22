import { Shield, Users, Award, Eye, Target, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import VisitorCounter from "@/components/VisitorCounter";
import PKSScene3D from "@/components/PKSScene3D";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description: "Menjaga keamanan dan ketertiban di seluruh area sekolah dengan sistem patroli yang terorganisir"
    },
    {
      icon: Users,
      title: "Tim Solid",
      description: "Anggota PKS yang terlatih dan berpengalaman dalam menjaga kedisiplinan siswa"
    },
    {
      icon: Award,
      title: "Prestasi Terbaik",
      description: "Meraih berbagai penghargaan atas kontribusi dalam menciptakan lingkungan sekolah yang aman"
    },
    {
      icon: Eye,
      title: "Pengawasan 24/7",
      description: "Sistem monitoring dan patroli berkelanjutan untuk memastikan keamanan maksimal"
    }
  ];

  const stats = [
    { number: "150+", label: "Anggota Aktif" },
    { number: "5", label: "Tahun Pengalaman" },
    { number: "24/7", label: "Jam Operasional" },
    { number: "100%", label: "Komitmen Keamanan" }
  ];

  const activities = [
    "Patroli rutin area sekolah",
    "Pengawasan kedisiplinan siswa",
    "Bantuan keamanan event sekolah",
    "Sosialisasi keamanan dan kedisiplinan",
    "Koordinasi dengan pihak sekolah",
    "Pelatihan anggota baru"
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-32">
          {/* Visitor Counter */}
          <div className="fixed top-20 right-6 z-40">
            <VisitorCounter />
          </div>

          <div className="max-w-7xl mx-auto text-center">
            {/* 3D PKS Logo */}
            <div className="mb-8">
              <PKSScene3D />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient-pks">PKS</span>
              <br />
              <span className="text-foreground">Patroli Keamanan Sekolah</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Menjaga keamanan dan kedisiplinan siswa di lingkungan SMKN 2 Bone dengan dedikasi tinggi 
              dan komitmen untuk menciptakan lingkungan belajar yang aman dan kondusif
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/events"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-glow hover:shadow-xl transition-all duration-300 text-lg"
              >
                Lihat Event
              </a>
              <a 
                href="/perekrutan"
                className="inline-flex items-center px-8 py-4 border border-border hover:bg-card text-foreground font-semibold rounded-xl transition-all duration-300 text-lg"
              >
                Bergabung
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6 py-16 bg-background-elevated">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient-pks mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-pks">Mengapa PKS?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                PKS berkomitmen untuk menciptakan lingkungan sekolah yang aman, tertib, dan kondusif 
                bagi seluruh warga sekolah
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="pks-card hover:shadow-glow transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="px-6 py-20 bg-background-elevated">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-pks">Kegiatan PKS</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  PKS menjalankan berbagai kegiatan rutin untuk memastikan keamanan dan kedisiplinan 
                  di lingkungan sekolah tetap terjaga dengan baik.
                </p>
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pks-card-elevated p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gradient-pks text-center">
                  Visi & Misi PKS
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Visi</h4>
                    <p className="text-muted-foreground">
                      Menjadi organisasi siswa terdepan dalam menjaga keamanan dan kedisiplinan 
                      di lingkungan SMKN 2 Bone.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Misi</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Menciptakan lingkungan sekolah yang aman dan tertib</li>
                      <li>• Membina kedisiplinan siswa dengan pendekatan yang humanis</li>
                      <li>• Menjalin kerjasama dengan seluruh warga sekolah</li>
                      <li>• Mengembangkan karakter kepemimpinan anggota PKS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="pks-card-elevated p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-pks">Bergabung dengan PKS</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Jadilah bagian dari tim yang berkomitmen menjaga keamanan sekolah. 
                Kembangkan potensi kepemimpinan Anda bersama PKS.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/perekrutan"
                  className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-colors shadow-lg text-lg"
                >
                  Daftar Sekarang
                </a>
                <a 
                  href="/events"
                  className="inline-flex items-center px-8 py-4 border border-border hover:bg-card text-foreground font-semibold rounded-xl transition-colors text-lg"
                >
                  Lihat Event
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
