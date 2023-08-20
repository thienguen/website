import { useEffect, useState, useRef, type RefObject } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsOnScreen(entry?.isIntersecting ?? false);
    });
  }, []);

  useEffect(() => {
    // Check if the ref is valid and if it's current property is also valid
    if (ref && ref.current) {
      observerRef.current?.observe(ref.current);

      return () => {
        // Cleanup
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, [ref]);

  return isOnScreen;
}
