export const observeNav = (
  element: HTMLElement,
  threshold: number,
  onIntersect: () => void
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      });
    },
    { threshold: threshold }
  );

  observer.observe(element);

  return () => {
    observer.unobserve(element);
    observer.disconnect();
  };
};
