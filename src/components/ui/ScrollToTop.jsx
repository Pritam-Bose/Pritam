import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Every route change starts the new page at the top.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
