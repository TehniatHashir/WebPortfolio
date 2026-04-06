import { useCallback, useState } from 'react';

/**
 * Hook for 3D tilt effect on hover using CSS perspective.
 * Returns onMouseMove/onMouseLeave handlers and a transform string.
 */
export function useMouseTilt(intensity = 15) {
  const [transform, setTransform] = useState(
    'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
  );

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.02)`
    );
  }, [intensity]);

  const onMouseLeave = useCallback(() => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)');
  }, []);

  return { transform, onMouseMove, onMouseLeave };
}
