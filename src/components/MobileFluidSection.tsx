import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';
import './mobile-fluid.css';

type MobileFluidSectionProps = {
  as?: ElementType;
  designHeight: number;
  className?: string;
  canvasClassName?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function MobileFluidSection({
  as: Tag = 'section',
  designHeight,
  className = '',
  canvasClassName = '',
  children,
  style,
  ...rest
}: MobileFluidSectionProps) {
  const cssVars = {
    '--mf-h': designHeight,
    ...style,
  } as CSSProperties;

  return (
    <Tag className={`mobile-section-fluid mobile-fluid-section ${className}`.trim()} style={cssVars} {...rest}>
      <div className={`mobile-fluid-canvas ${canvasClassName}`.trim()}>{children}</div>
    </Tag>
  );
}
