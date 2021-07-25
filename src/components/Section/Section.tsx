import classNames from 'classnames';
import { ReactNode } from 'react';

import { SectionType } from './types';
import { getSectionClassName } from './utils';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  type?: SectionType;
}

function Section({ children, className, type }: SectionProps) {
  const sectionClassName = getSectionClassName(type);

  const sectionElemProps = {
    className: classNames(sectionClassName, className),
  };

  return <section {...sectionElemProps}>{children}</section>;
}

export default Section;
