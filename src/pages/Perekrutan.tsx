import { CheckCircle, Users, Shield, Award, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Perekrutan = () => {
  const requirements = [
    "Siswa aktif SMKN 2 Bone",
    "Memiliki komitmen tinggi terhadap keamanan sekolah",
    "Mampu bekerja dalam tim",
    "Memiliki integritas dan kedisiplinan yang baik",
    "Siap mengikuti pelatihan dan briefing rutin",
    "Tidak sedang dalam masa sanksi atau pelanggaran"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Pengalaman Kepemimpinan",
      description: "Mengembangkan kemampuan kepemimpinan dan tanggung jawab"
    },
    {
      icon: Users,
      title: "Jaringan Sosial",
      description: "Membangun koneksi dan kerja sama dengan sesama siswa"
    },
    {
      icon: Award,
      title: "Sertifikat & Penghargaan",
      description: "Mendapat pengakuan atas kontribusi untuk keamanan sekolah"
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Meningkatkan kemampuan komunikasi dan problem solving"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Pendaftaran",
      description: "Mengisi formulir pendaftaran dan melengkapi persyaratan"
    },
    {
      step: 2,
      title: "Seleksi Berkas",
      description: "Tim PKS akan meninjau dan memverifikasi berkas pendaftar"
    },
    {
      step: 3,
      title: "Interview",
      description: "Wawancara untuk menilai motivasi dan komitmen calon anggota"
    },
    {
      step: 4,
      title: "Pelatihan",
      description: "Program pelatihan intensif untuk anggota yang diterima"
    },
    {
      step: 5,
      title: "Penugasan",
      description: "Penempatan anggota baru sesuai dengan kemampuan dan kebutuhan"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-pks">Bergabung dengan PKS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Jadilah bagian dari Patroli Keamanan Sekolah dan berkontribusi dalam menjaga 
              keamanan dan kedisiplinan di lingkungan sekolah
            </p>
          </div>

          {/* Hero Section */}
          <div className="pks-card-elevated p-8 rounded-2xl mb-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gradient-pks">
                Mengapa Bergabung dengan PKS?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                PKS (Patroli Keamanan Sekolah) adalah organisasi siswa yang berperan aktif dalam 
                menjaga keamanan, ketertiban, dan kedisiplinan di lingkungan SMKN 2 Bone. 
                Bergabung dengan PKS memberikan kesempatan untuk mengembangkan diri sambil 
                berkontribusi positif bagi sekolah.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient-pks">
              Keuntungan Bergabung
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="pks-card text-center hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient-pks">
              Persyaratan Anggota
            </h2>
            <div className="pks-card-elevated p-8 rounded-2xl max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient-pks">
              Proses Pendaftaran
            </h2>
            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="pks-card-elevated p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gradient-pks">
                Siap Bergabung?
              </h3>
              <p className="text-muted-foreground mb-6">
                Jika Anda memenuhi persyaratan dan siap berkomitmen untuk menjaga keamanan sekolah, 
                segera daftarkan diri Anda!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors shadow-lg">
                  Daftar Sekarang
                </button>
                <button className="px-6 py-3 border border-border hover:bg-card text-foreground font-semibold rounded-lg transition-colors">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Perekrutan;