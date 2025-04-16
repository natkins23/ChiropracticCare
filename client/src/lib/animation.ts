// Animation helper function to check if elements should be animated
export const checkAnimatedElements = () => {
  const elements = document.querySelectorAll('.animate-fade, .animate-slide');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
    
    if (isVisible) {
      element.classList.add('active');
    }
  });
};

// Function to check if reduced motion is preferred
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
