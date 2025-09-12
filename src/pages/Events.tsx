import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Sosialisasi Keamanan Sekolah",
      description: "Program sosialisasi tentang pentingnya menjaga keamanan dan ketertiban di lingkungan sekolah",
      date: "15 Januari 2024",
      time: "08:00 - 10:00 WIB",
      location: "Aula Sekolah",
      attendees: 150,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Pelatihan Anggota PKS Baru",
      description: "Pelatihan intensif untuk anggota PKS yang baru bergabung mengenai tugas dan tanggung jawab",
      date: "22 Januari 2024",
      time: "13:00 - 16:00 WIB",
      location: "Ruang Rapat",
      attendees: 30,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Patroli Keamanan Bulanan",
      description: "Kegiatan patroli rutin untuk memastikan keamanan dan kedisiplinan di area sekolah",
      date: "28 Januari 2024",
      time: "07:00 - 08:00 WIB",
      location: "Seluruh Area Sekolah",
      attendees: 25,
      status: "recurring"
    },
    {
      id: 4,
      title: "Evaluasi Kinerja PKS",
      description: "Rapat evaluasi kinerja dan pembahasan strategi peningkatan keamanan sekolah",
      date: "5 Februari 2024",
      time: "14:00 - 16:00 WIB",
      location: "Ruang BK",
      attendees: 20,
      status: "planned"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-pks">Event PKS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ikuti berbagai kegiatan dan event yang diselenggarakan oleh Patroli Keamanan Sekolah
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="pks-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold text-foreground">
                      {event.title}
                    </CardTitle>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === 'upcoming' ? 'bg-primary/20 text-primary' :
                      event.status === 'recurring' ? 'bg-success/20 text-success' :
                      'bg-accent/20 text-accent'
                    }`}>
                      {event.status === 'upcoming' ? 'Mendatang' :
                       event.status === 'recurring' ? 'Rutin' : 'Direncanakan'}
                    </span>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.attendees} peserta</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="pks-card-elevated p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gradient-pks">
                Ingin Bergabung?
              </h3>
              <p className="text-muted-foreground mb-6">
                Jika Anda tertarik untuk berpartisipasi dalam kegiatan PKS atau memiliki pertanyaan, 
                jangan ragu untuk menghubungi kami.
              </p>
              <a 
                href="/perekrutan"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors shadow-lg"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;