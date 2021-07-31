import classNames from 'classnames';
import { ReactNode } from 'react';

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

function Section({ children, className, type }: SectionProps) {
  return (
    <section className={classNames(getSectionClassName(type), className)}>
      {children}
    </section>
  );
}

function SectionTitle({ children, className, type }: SectionTitleProps) {
  return (
    <h1 className={classNames(getTitleClassName(type), className)}>
      {children}
    </h1>
  );
}

function SectionText({ children, className }: SectionTextProps) {
  return (
    <p className={classNames(styles.SectionText, className)}>{children}</p>
  );
}

export default Section;
export { SectionText, SectionTitle };
