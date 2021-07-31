import classNames from 'classnames';
import { ReactNode } from 'react';

import styles from './Page.module.scss';
import { PageType } from './types';
import { getPageClassName } from './utils';

export interface PageProps {
  children: ReactNode;
  className?: string;
  hasScroll?: boolean;
  type?: PageType;
}

function Page({ children, className, hasScroll, type }: PageProps) {
  return (
    <div className={classNames(getPageClassName(type, hasScroll), className)}>
      <div className={styles.PageContent}>{children}</div>
    </div>
  );
}

export default Page;
