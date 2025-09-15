import { Users, Crown, Shield, Star, Award, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const StrukturOrganisasi = () => {
  const struktur = {
    ketua: {
      name: "Ahmad Rizky Pratama",
      position: "Ketua PKS",
      class: "XII RPL 1",
      responsibilities: ["Memimpin dan mengkoordinasi seluruh kegiatan PKS", "Bertanggung jawab kepada kepala sekolah", "Mengambil keputusan strategis organisasi"]
    },
    wakil: {
      name: "Siti Nurhaliza",
      position: "Wakil Ketua PKS", 
      class: "XII TKJ 2",
      responsibilities: ["Membantu tugas ketua PKS", "Menggantikan ketua saat berhalangan", "Mengkoordinasi bidang operasional"]
    },
    sekretaris: {
      name: "Muhammad Fajar",
      position: "Sekretaris",
      class: "XI RPL 2", 
      responsibilities: ["Mengelola administrasi dan dokumentasi", "Membuat laporan kegiatan", "Mengatur jadwal rapat dan kegiatan"]
    },
    bendahara: {
      name: "Dewi Sartika",
      position: "Bendahara",
      class: "XI TKJ 1",
      responsibilities: ["Mengelola keuangan organisasi", "Membuat laporan keuangan", "Mengatur anggaran kegiatan"]
    },
    divisi: [
      {
        name: "Divisi Patroli & Keamanan",
        leader: "Budi Santoso - XII MM 1",
        members: ["Andi Wijaya - XI RPL 1", "Sari Indah - XI TKJ 2", "Reza Pratama - X RPL 1"],
        responsibilities: ["Melakukan patroli rutin di area sekolah", "Mengawasi keamanan lingkungan sekolah", "Menangani situasi darurat keamanan"]
      },
      {
        name: "Divisi Kedisiplinan",
        leader: "Nina Marlina - XII TKJ 1", 
        members: ["Agus Setiawan - XI MM 1", "Rina Sari - XI RPL 2", "Dedi Kurniawan - X TKJ 2"],
        responsibilities: ["Mengawasi kedisiplinan siswa", "Memberikan teguran dan pembinaan", "Melaporkan pelanggaran tata tertib"]
      },
      {
        name: "Divisi Humas & Komunikasi",
        leader: "Lestari Dewi - XII RPL 2",
        members: ["Bambang Irawan - XI TKJ 1", "Fitri Handayani - XI MM 2", "Yoga Pratama - X RPL 2"],
        responsibilities: ["Mengelola komunikasi internal dan eksternal", "Membuat publikasi kegiatan PKS", "Menjalin hubungan dengan pihak luar"]
      },
      {
        name: "Divisi Pelatihan & Pengembangan",
        leader: "Indra Gunawan - XII MM 2",
        members: ["Siska Amelia - XI RPL 1", "Rahman Hakim - XI TKJ 2", "Putri Nabila - X TKJ 1"],
        responsibilities: ["Menyelenggarakan pelatihan anggota", "Mengembangkan skill dan kemampuan", "Membuat program pengembangan diri"]
      }
    ]
  };

  const organigram = [
    { level: 1, positions: [struktur.ketua] },
    { level: 2, positions: [struktur.wakil] },
    { level: 3, positions: [struktur.sekretaris, struktur.bendahara] },
    { level: 4, positions: struktur.divisi }
  ];

  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-pks">Struktur Organisasi</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Susunan kepemimpinan dan pembagian tugas dalam organisasi Patroli Keamanan Sekolah 
              SMKN 2 Bone periode 2024/2025
            </p>
          </div>

          {/* Leadership Structure */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient-pks">
              Struktur Kepemimpinan
            </h2>
            
            {/* Ketua */}
            <div className="flex justify-center mb-8">
              <Card className="pks-card-elevated max-w-md w-full text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-primary" />
                  </div>
                  <Badge className="w-fit mx-auto mb-2">Ketua</Badge>
                  <CardTitle className="text-xl">{struktur.ketua.name}</CardTitle>
                  <p className="text-muted-foreground">{struktur.ketua.class}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {struktur.ketua.responsibilities.map((resp, index) => (
                      <p key={index} className="text-sm text-muted-foreground">• {resp}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Wakil Ketua */}
            <div className="flex justify-center mb-8">
              <Card className="pks-card max-w-md w-full text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">Wakil Ketua</Badge>
                  <CardTitle className="text-xl">{struktur.wakil.name}</CardTitle>
                  <p className="text-muted-foreground">{struktur.wakil.class}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {struktur.wakil.responsibilities.map((resp, index) => (
                      <p key={index} className="text-sm text-muted-foreground">• {resp}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sekretaris & Bendahara */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="pks-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-accent" />
                  </div>
                  <Badge variant="outline" className="w-fit mx-auto mb-2">Sekretaris</Badge>
                  <CardTitle className="text-xl">{struktur.sekretaris.name}</CardTitle>
                  <p className="text-muted-foreground">{struktur.sekretaris.class}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {struktur.sekretaris.responsibilities.map((resp, index) => (
                      <p key={index} className="text-sm text-muted-foreground">• {resp}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="pks-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-success" />
                  </div>
                  <Badge variant="outline" className="w-fit mx-auto mb-2">Bendahara</Badge>
                  <CardTitle className="text-xl">{struktur.bendahara.name}</CardTitle>
                  <p className="text-muted-foreground">{struktur.bendahara.class}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {struktur.bendahara.responsibilities.map((resp, index) => (
                      <p key={index} className="text-sm text-muted-foreground">• {resp}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Divisi Structure */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient-pks">
              Struktur Divisi
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {struktur.divisi.map((divisi, index) => (
                <Card key={index} className="pks-card">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-center">{divisi.name}</CardTitle>
                    <div className="text-center">
                      <Badge className="mb-4">Ketua Divisi</Badge>
                      <p className="font-semibold">{divisi.leader}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Anggota Divisi
                      </h4>
                      <div className="space-y-1">
                        {divisi.members.map((member, memberIndex) => (
                          <p key={memberIndex} className="text-sm text-muted-foreground">• {member}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tanggung Jawab</h4>
                      <div className="space-y-1">
                        {divisi.responsibilities.map((resp, respIndex) => (
                          <p key={respIndex} className="text-sm text-muted-foreground">• {resp}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="pks-card-elevated p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gradient-pks">
                Bergabung dengan Tim Kami
              </h3>
              <p className="text-muted-foreground mb-6">
                PKS SMKN 2 Bone selalu membuka kesempatan bagi siswa yang ingin berkontribusi 
                dalam menjaga keamanan dan kedisiplinan sekolah.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors shadow-lg">
                  Lihat Perekrutan
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

export default StrukturOrganisasi;