import { Camera, Calendar, MapPin, Users, Eye, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { useState } from "react";

import eventEvaluasi from "@/assets/event-evaluasi.jpg";
import eventPatroli from "@/assets/event-patroli.jpg";
import eventPelatihan from "@/assets/event-pelatihan.jpg";
import eventSosialisasi from "@/assets/event-sosialisasi.jpg";

const Galeri = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("semua");

  const galleries = [
    {
      id: 1,
      title: "Evaluasi Kinerja PKS 2024",
      description: "Kegiatan evaluasi rutin untuk meningkatkan kinerja anggota PKS dalam menjalankan tugas keamanan sekolah",
      image: eventEvaluasi,
      date: "15 September 2024",
      location: "Aula SMKN 2 Bone",
      category: "evaluasi",
      participants: 45,
      photographer: "Tim Dokumentasi PKS"
    },
    {
      id: 2,
      title: "Patroli Rutin Area Sekolah",
      description: "Dokumentasi kegiatan patroli harian anggota PKS untuk menjaga keamanan dan ketertiban lingkungan sekolah",
      image: eventPatroli,
      date: "10 September 2024", 
      location: "Area SMKN 2 Bone",
      category: "patroli",
      participants: 12,
      photographer: "Ahmad Rizky"
    },
    {
      id: 3,
      title: "Pelatihan Dasar Keamanan",
      description: "Program pelatihan intensif untuk anggota baru PKS tentang prosedur keamanan dan penanganan situasi darurat",
      image: eventPelatihan,
      date: "5 September 2024",
      location: "Lab Komputer SMKN 2 Bone", 
      category: "pelatihan",
      participants: 30,
      photographer: "Siti Nurhaliza"
    },
    {
      id: 4,
      title: "Sosialisasi Program PKS",
      description: "Kegiatan sosialisasi program PKS kepada siswa baru untuk mengenalkan peran dan fungsi organisasi",
      image: eventSosialisasi,
      date: "1 September 2024",
      location: "Lapangan SMKN 2 Bone",
      category: "sosialisasi", 
      participants: 200,
      photographer: "Muhammad Fajar"
    }
  ];

  const categories = [
    { id: "semua", name: "Semua Foto", count: galleries.length },
    { id: "evaluasi", name: "Evaluasi", count: galleries.filter(g => g.category === "evaluasi").length },
    { id: "patroli", name: "Patroli", count: galleries.filter(g => g.category === "patroli").length },
    { id: "pelatihan", name: "Pelatihan", count: galleries.filter(g => g.category === "pelatihan").length },
    { id: "sosialisasi", name: "Sosialisasi", count: galleries.filter(g => g.category === "sosialisasi").length }
  ];

  const filteredGalleries = selectedCategory === "semua" 
    ? galleries 
    : galleries.filter(gallery => gallery.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-pks">Galeri PKS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dokumentasi kegiatan dan aktivitas Patroli Keamanan Sekolah SMKN 2 Bone 
              dalam menjalankan tugas menjaga keamanan dan kedisiplinan sekolah
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="pks-card p-6 text-center">
              <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{galleries.length}</div>
              <div className="text-sm text-muted-foreground">Total Foto</div>
            </div>
            <div className="pks-card p-6 text-center">
              <Calendar className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-secondary">12</div>
              <div className="text-sm text-muted-foreground">Event Bulan Ini</div>
            </div>
            <div className="pks-card p-6 text-center">
              <Users className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-accent">287</div>
              <div className="text-sm text-muted-foreground">Total Partisipan</div>
            </div>
            <div className="pks-card p-6 text-center">
              <MapPin className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success">8</div>
              <div className="text-sm text-muted-foreground">Lokasi Kegiatan</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Kategori Foto</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button 
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card border border-border hover:bg-muted text-foreground"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredGalleries.map((gallery) => (
              <Card key={gallery.id} className="pks-card overflow-hidden hover:shadow-glow transition-all duration-300">
                <div className="relative group">
                  <img 
                    src={gallery.image} 
                    alt={gallery.title}
                    className="w-full h-64 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    onClick={() => setSelectedImage(gallery.image)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 capitalize">
                    {gallery.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{gallery.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{gallery.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{gallery.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{gallery.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{gallery.participants} Partisipan</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Camera className="w-4 h-4 text-primary" />
                      <span>Foto oleh: {gallery.photographer}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <button 
                      onClick={() => setSelectedImage(gallery.image)}
                      className="flex-1 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      Lihat
                    </button>
                    <button className="px-4 py-2 border border-border hover:bg-muted text-foreground text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="pks-card-elevated p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gradient-pks">
                Ikuti Kegiatan PKS
              </h3>
              <p className="text-muted-foreground mb-6">
                Bergabunglah dengan kegiatan PKS dan jadilah bagian dari dokumentasi 
                sejarah keamanan sekolah. Cek jadwal event terbaru dan daftarkan diri Anda!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors shadow-lg">
                  Lihat Event Terbaru
                </button>
                <button className="px-6 py-3 border border-border hover:bg-card text-foreground font-semibold rounded-lg transition-colors">
                  Upload Foto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Galeri;