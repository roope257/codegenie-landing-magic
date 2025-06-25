
import { useState, useEffect } from "react";

interface UseResponsiveReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  itemsPerPage: number;
}

export const useResponsive = (): UseResponsiveReturn => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  const itemsPerPage = isDesktop ? 3 : isTablet ? 2 : 1;

  return {
    isMobile,
    isTablet,
    isDesktop,
    itemsPerPage,
  };
};
