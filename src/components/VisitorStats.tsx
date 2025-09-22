import { useState } from 'react';
import { Eye, Users, Calendar, TrendingUp, BarChart3, X } from 'lucide-react';
import { useVisitorTracker } from '../hooks/useVisitorTracker';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface VisitorStatsProps {
  currentPage?: string;
  showDetailed?: boolean;
}

const VisitorStats = ({ currentPage = '/', showDetailed = false }: VisitorStatsProps) => {
  const { visitorData, isNewVisitor } = useVisitorTracker(currentPage);
  const [showModal, setShowModal] = useState(false);

  const formatNumber = (num: number) => {
    return num.toLocaleString('id-ID');
  };

  const getTopPages = () => {
    return Object.entries(visitorData.pageViews)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([page, views]) => ({
        page: page === '/' ? 'Beranda' : page.replace('/', '').replace('-', ' '),
        views
      }));
  };

  if (showDetailed) {
    return (
      <>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2"
          >
            <BarChart3 className="w-4 h-4" />
            <span className="hidden sm:inline">Statistik</span>
          </Button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-background border border-border rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-2xl font-bold text-foreground">Statistik Pengunjung Website PKS</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowModal(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Main Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Kunjungan</CardTitle>
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">
                        {formatNumber(visitorData.totalVisits)}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Pengunjung Unik</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">
                        {formatNumber(visitorData.uniqueVisitors)}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Hari Ini</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">
                        {formatNumber(visitorData.todayVisits)}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Bulan Ini</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">
                        {formatNumber(visitorData.monthlyVisits)}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Top Pages */}
                <Card>
                  <CardHeader>
                    <CardTitle>Halaman Terpopuler</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {getTopPages().map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm font-medium capitalize">{item.page}</span>
                          <span className="text-sm text-muted-foreground">
                            {formatNumber(item.views)} kunjungan
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Aktivitas Terbaru</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {visitorData.visitHistory.slice(-10).reverse().map((visit, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            {new Date(visit.timestamp).toLocaleString('id-ID')}
                          </span>
                          <span className="font-medium">
                            {visit.page === '/' ? 'Beranda' : visit.page}
                          </span>
                          {visit.isUnique && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              Baru
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {isNewVisitor && (
                  <div className="text-center p-4 bg-primary/10 text-primary rounded-lg">
                    <p className="font-medium">🎉 Selamat datang di website PKS!</p>
                    <p className="text-sm mt-1">Terima kasih telah mengunjungi website kami.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Simple counter display
  return (
    <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-lg">
      <Eye className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-foreground">
        Total Pengunjung: 
      </span>
      <span className="text-sm font-bold text-primary">
        {formatNumber(visitorData.totalVisits)}
      </span>
    </div>
  );
};

export default VisitorStats;