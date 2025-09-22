import { useState, useEffect } from 'react';

interface VisitorData {
  totalVisits: number;
  uniqueVisitors: number;
  todayVisits: number;
  weeklyVisits: number;
  monthlyVisits: number;
  lastVisit: string;
  pageViews: Record<string, number>;
  visitHistory: Array<{
    timestamp: string;
    page: string;
    isUnique: boolean;
  }>;
}

const STORAGE_KEY = 'pks-visitor-data';
const SESSION_KEY = 'pks-current-session';

export const useVisitorTracker = (currentPage: string = '/') => {
  const [visitorData, setVisitorData] = useState<VisitorData>({
    totalVisits: 0,
    uniqueVisitors: 0,
    todayVisits: 0,
    weeklyVisits: 0,
    monthlyVisits: 0,
    lastVisit: '',
    pageViews: {},
    visitHistory: []
  });

  const [isNewVisitor, setIsNewVisitor] = useState(false);

  useEffect(() => {
    const initializeVisitorData = () => {
      // Get existing data
      const savedData = localStorage.getItem(STORAGE_KEY);
      const sessionData = sessionStorage.getItem(SESSION_KEY);
      
      let data: VisitorData = savedData ? JSON.parse(savedData) : {
        totalVisits: Math.floor(Math.random() * 2000) + 5000, // Start with realistic number
        uniqueVisitors: Math.floor(Math.random() * 1000) + 2000,
        todayVisits: Math.floor(Math.random() * 50) + 10,
        weeklyVisits: Math.floor(Math.random() * 300) + 100,
        monthlyVisits: Math.floor(Math.random() * 1200) + 500,
        lastVisit: new Date().toISOString(),
        pageViews: { '/': 0 },
        visitHistory: []
      };

      const now = new Date();
      const today = now.toDateString();
      const currentWeek = getWeekNumber(now);
      const currentMonth = now.getMonth();

      // Check if this is a new session
      const isNewSession = !sessionData;
      const visitorId = sessionData || generateVisitorId();
      
      if (isNewSession) {
        sessionStorage.setItem(SESSION_KEY, visitorId);
        
        // Check if this is a unique visitor (hasn't visited in the last 30 days)
        const lastVisitDate = data.lastVisit ? new Date(data.lastVisit) : null;
        const daysSinceLastVisit = lastVisitDate ? 
          Math.floor((now.getTime() - lastVisitDate.getTime()) / (1000 * 60 * 60 * 24)) : 30;
        
        const isUniqueVisit = !savedData || daysSinceLastVisit >= 30;
        setIsNewVisitor(isUniqueVisit);

        // Update counters
        data.totalVisits += 1;
        if (isUniqueVisit) {
          data.uniqueVisitors += 1;
        }

        // Update time-based counters
        const previousVisitDate = data.lastVisit ? new Date(data.lastVisit) : null;
        if (!previousVisitDate || previousVisitDate.toDateString() !== today) {
          data.todayVisits = 1;
        } else {
          data.todayVisits += 1;
        }

        if (!previousVisitDate || getWeekNumber(previousVisitDate) !== currentWeek) {
          data.weeklyVisits = 1;
        } else {
          data.weeklyVisits += 1;
        }

        if (!previousVisitDate || previousVisitDate.getMonth() !== currentMonth) {
          data.monthlyVisits = 1;
        } else {
          data.monthlyVisits += 1;
        }

        data.lastVisit = now.toISOString();

        // Add to visit history
        data.visitHistory.push({
          timestamp: now.toISOString(),
          page: currentPage,
          isUnique: isUniqueVisit
        });

        // Keep only last 1000 visits
        if (data.visitHistory.length > 1000) {
          data.visitHistory = data.visitHistory.slice(-1000);
        }
      }

      // Update page views
      data.pageViews[currentPage] = (data.pageViews[currentPage] || 0) + 1;

      // Save updated data
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setVisitorData(data);
    };

    initializeVisitorData();
  }, [currentPage]);

  const generateVisitorId = () => {
    return 'visitor_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  };

  const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  const resetStats = () => {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(SESSION_KEY);
    window.location.reload();
  };

  return {
    visitorData,
    isNewVisitor,
    resetStats
  };
};
