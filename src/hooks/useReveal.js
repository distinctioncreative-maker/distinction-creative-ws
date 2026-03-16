import { useEffect, useRef } from 'react';

/**
 * Attach to any section ref. All .reveal children will stagger in
 * as the section enters the viewport.
 */
export default function useReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 110);
          });
        }
      });
    }, { threshold });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}