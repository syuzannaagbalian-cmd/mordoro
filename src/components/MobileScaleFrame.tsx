import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';
import './mobile-scale.css';

type MobileScaleFrameProps = {
  as?: ElementType;
  designHeight: number;
  className?: string;
  canvasClassName?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function MobileScaleFrame({
  as: Tag = 'div',
  designHeight,
  className = '',
  canvasClassName = '',
  children,
  style,
  ...rest
}: MobileScaleFrameProps) {
  const cssVars = {
    '--mobile-design-h': designHeight,
    ...style,
  } as CSSProperties;

  return (
    <Tag className={`mobile-scale-frame ${className}`.trim()} style={cssVars} {...rest}>
      <div className={`mobile-scale-canvas ${canvasClassName}`.trim()}>{children}</div>
    </Tag>
  );
}
