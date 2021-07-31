import classNames from 'classnames';
import { ReactNode } from 'react';

import { PageType } from './types';
import { getContentClassName, getPageClassName } from './utils';

export interface PageProps {
  children: ReactNode;
  className?: string;
  type?: PageType;
}

function Page({ children, className, type }: PageProps) {
  const pageClassName = getPageClassName(type);

  return (
    <section className={classNames(pageClassName, className)}>
      <div className={getContentClassName(type)}>{children}</div>
    </section>
  );
}

export default Page;
