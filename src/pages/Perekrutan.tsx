import { CheckCircle, Users, Shield, Award, Target, Clock, Calendar, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

const Perekrutan = () => {
  // Registration period configuration
  const registrationPeriod = {
    startDate: new Date('2024-10-01'),
    endDate: new Date('2024-10-31'),
    title: "Periode Pendaftaran PKS 2024/2025"
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = registrationPeriod.endDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
        
        const isOpen = now >= registrationPeriod.startDate && now <= registrationPeriod.endDate;
        setIsRegistrationOpen(isOpen);
      } else {
        setIsRegistrationOpen(false);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

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

          {/* Registration Period Status */}
          <div className="mb-16">
            <Card className={`max-w-4xl mx-auto ${isRegistrationOpen ? 'border-success bg-success/5' : 'border-destructive bg-destructive/5'}`}>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  {isRegistrationOpen ? (
                    <CheckCircle className="w-6 h-6 text-success" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-destructive" />
                  )}
                  <Badge variant={isRegistrationOpen ? "success" : "destructive"}>
                    {isRegistrationOpen ? "PENDAFTARAN DIBUKA" : "PENDAFTARAN DITUTUP"}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold">{registrationPeriod.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 text-center">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Periode Pendaftaran</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Mulai:</p>
                      <p className="font-medium">{registrationPeriod.startDate.toLocaleDateString('id-ID', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                      <p className="text-sm text-muted-foreground">Berakhir:</p>
                      <p className="font-medium">{registrationPeriod.endDate.toLocaleDateString('id-ID', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                  </div>
                  
                  {isRegistrationOpen && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Waktu Tersisa</h3>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-primary">{timeLeft.days}</div>
                          <div className="text-xs text-muted-foreground">Hari</div>
                        </div>
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-primary">{timeLeft.hours}</div>
                          <div className="text-xs text-muted-foreground">Jam</div>
                        </div>
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-primary">{timeLeft.minutes}</div>
                          <div className="text-xs text-muted-foreground">Menit</div>
                        </div>
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-primary">{timeLeft.seconds}</div>
                          <div className="text-xs text-muted-foreground">Detik</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
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
                {isRegistrationOpen ? "Siap Bergabung?" : "Pendaftaran Akan Segera Dibuka"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {isRegistrationOpen 
                  ? "Jika Anda memenuhi persyaratan dan siap berkomitmen untuk menjaga keamanan sekolah, segera daftarkan diri Anda!"
                  : "Nantikan pembukaan pendaftaran PKS periode berikutnya. Pastikan Anda sudah mempersiapkan persyaratan yang diperlukan."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className={`px-6 py-3 font-semibold rounded-lg transition-colors shadow-lg ${
                    isRegistrationOpen 
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                  disabled={!isRegistrationOpen}
                >
                  {isRegistrationOpen ? "Daftar Sekarang" : "Pendaftaran Ditutup"}
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