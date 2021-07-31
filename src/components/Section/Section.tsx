import classNames from 'classnames';
import { ReactNode } from 'react';

import styles from './Section.module.scss';
import { SectionType } from './types';
import { getSectionClassName } from './utils';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  type?: SectionType;
}

export interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export interface SectionTextProps {
  children: ReactNode;
  className?: string;
}

function Section({ children, className, type }: SectionProps) {
  const sectionClassName = getSectionClassName(type);

  return (
    <section className={classNames(sectionClassName, className)}>
      {children}
    </section>
  );
}

function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h1 className={classNames(styles.SectionTitle, className)}>{children}</h1>
  );
}

function SectionText({ children, className }: SectionTextProps) {
  return (
    <p className={classNames(styles.SectionText, className)}>{children}</p>
  );
}

export default Section;
export { SectionText, SectionTitle };
