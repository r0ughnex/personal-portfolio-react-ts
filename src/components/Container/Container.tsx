import classNames from 'classnames';
import { forwardRef, ReactNode } from 'react';

import styles from './Container.module.scss';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div className={classNames(styles.Container, className)} ref={ref}>
        {children}
      </div>
    );
  },
);

Container.displayName = 'Container';
export default Container;
