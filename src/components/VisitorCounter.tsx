import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get current count from localStorage
    const currentCount = localStorage.getItem('pks-visitor-count');
    
    if (currentCount) {
      const count = parseInt(currentCount);
      setVisitorCount(count);
    } else {
      // If no count exists, start from a reasonable number
      const initialCount = Math.floor(Math.random() * 500) + 1000; // Random between 1000-1500
      localStorage.setItem('pks-visitor-count', initialCount.toString());
      setVisitorCount(initialCount);
    }

    // Check if this is a new visit for this session
    const hasVisitedThisSession = sessionStorage.getItem('pks-visited-this-session');
    
    if (!hasVisitedThisSession) {
      // Increment visitor count
      const newCount = (currentCount ? parseInt(currentCount) : 1000) + 1;
      localStorage.setItem('pks-visitor-count', newCount.toString());
      sessionStorage.setItem('pks-visited-this-session', 'true');
      setVisitorCount(newCount);
    }
  }, []);

  // Format number with thousands separator
  const formatNumber = (num: number) => {
    return num.toLocaleString('id-ID');
  };

  return (
    <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-lg">
      <Eye className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-foreground">
        Total Pengunjung: 
      </span>
      <span className="text-sm font-bold text-primary">
        {formatNumber(visitorCount)}
      </span>
    </div>
  );
};

export default VisitorCounter;