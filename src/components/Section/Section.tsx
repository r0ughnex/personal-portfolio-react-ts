import classNames from 'classnames';
import { forwardRef, ReactNode } from 'react';

import styles from './Section.module.scss';
import { SectionType, TitleType } from './types';
import { getSectionClassName, getTitleClassName } from './utils';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  type?: SectionType;
}

export interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  type?: TitleType;
}

export interface SectionTextProps {
  children: ReactNode;
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, type }, ref) => {
    return (
      <section
        className={classNames(getSectionClassName(type), className)}
        ref={ref}
      >
        {children}
      </section>
    );
  },
);

const SectionText = forwardRef<HTMLHeadingElement, SectionTextProps>(
  ({ children, className }, ref) => {
    return (
      <p className={classNames(styles.SectionText, className)} ref={ref}>
        {children}
      </p>
    );
  },
);

const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ children, className, type }, ref) => {
    return (
      <h1 className={classNames(getTitleClassName(type), className)} ref={ref}>
        {children}
      </h1>
    );
  },
);

Section.displayName = 'Section';
SectionText.displayName = 'SectionText';
SectionTitle.displayName = 'SectionTitle';
export { SectionText, SectionTitle };
export default Section;
