'use client';

import { useEffect, useState } from 'react';

const DESIGN_WIDTH = 390;

export function useMobileFluidScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      setScale(window.innerWidth / DESIGN_WIDTH);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return scale;
}
